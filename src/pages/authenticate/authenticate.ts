import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
const UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
const LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
const NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';

@Component({
  selector: 'page-authenticate',
  templateUrl: 'authenticate.html',
})
export class AuthenticatePage {

    selectAction: any;
    peripheral: any = {};
    pin: number;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private ble: BLE,
                public toastCtrl: ToastController,
                private ngZone: NgZone) {
      let device = navParams.get('device');
      this.ble.connect(device.id).subscribe(
        peripheral => this.onConnected(peripheral),
        peripheral => this.onDeviceDisconnected(peripheral)      
      );
  
  }

  onConnected(peripheral) {
    console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
    this.ngZone.run(() => {
      this.peripheral = peripheral;
    });

  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'center'
    });
}

  showLongToast(phrase: string) {
    if(phrase == "0") {
        let toast = this.toastCtrl.create({
            message: 'Please return the correct device.',
            duration: 2000,

        });
        toast.present();
    }
    if(phrase == "1") {
        let toast = this.toastCtrl.create({
            message: 'Laptop returned successfully.',
            duration: 2000,
        });
        toast.present();
      }
  if(phrase == "2") {
      let toast = this.toastCtrl.create({
          message: 'NFC connection timeout, retry again',
          duration: 5000,
      });
      toast.present();
  }

}

returnLaptop(){
  this.ble.read(this.peripheral.id,UNLOCK_SERVICE,NFC_READ).then(
      buffer =>{
        let data = new Uint8Array(buffer);
          console.log('This is the data: '+data);
          console.log('This is the data zero: '+data[1]);
          console.log('This is the data buffer: '+data.buffer);
          this.showLongToast(data[1].toString());
      }
  )
}
  }
