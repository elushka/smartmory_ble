import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

import { CompleteloanPage } from '../completeloan/completeloan';

// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
const UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
const LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
const LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
const NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';

@Component({
  selector: 'page-loan',
  templateUrl: 'loan.html',
})
export class LoanPage {

  public device;
  selectAction: any;
  peripheral: any = {};
  pin: number;
  public compartments: any;
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              private ble: BLE,
              public toastCtrl: ToastController,
              private ngZone: NgZone) {
    this.device = navParams.get('device');
    this.ble.connect(this.device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)      
    );
    this.compartments = [];
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Updating Table');
    this.checkAvailability();
    this.presentLoadingIos();
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

exitConnection() {
  this.ble.disconnect(this.peripheral.id).then(
        () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
        () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
      )
}

presentLoadingIos() {
  let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Checking for laptops...',
    duration: 3000
  });

  loading.present();
}

showLongToast(phrase: string) {
  if(phrase == "0") {
      let toast = this.toastCtrl.create({
          message: 'No remaining laptops :(',
          duration: 5000,
      });
      toast.present();
      this.exitConnection();
      this.navCtrl.popToRoot();
  }
}

actLock(i){
  this.pin = i;
  console.log("Pin rn: "+this.pin);
  console.log('setLock');
  console.log('This is the pin: '+this.pin);
  let data = new Uint8Array([this.pin]);
  console.log('This is the data: '+data);
  console.log('This is the data buffer: '+data.buffer);
  this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(
    () => console.log('Updated lock'),
    () => console.log('Error updating lock')
  );
  this.navCtrl.push(CompleteloanPage, {
    device: this.device,
    pin: this.pin
      });
  console.log('The write is done!!!');
}

checkAvailability(){
  console.log('About to read...');
  this.ble.read(this.peripheral.id,UNLOCK_SERVICE,LOAN_AVAIL).then(
      buffer =>{
        let data = new Uint8Array(buffer);
          console.log('This is the data: '+data);
          console.log('This is the data [0]: '+data[0]);
          console.log('This is the data zero: '+data[1]);
          console.log('This is the data buffer: '+data.buffer);
          if(data[1] == 33) {
            this.compartments[0] = "Macbook";
            this.compartments[1] = 'Empty';
          }
          else if (data[1] == 55) {
            this.compartments[0] = "Windows";
            this.compartments[1] = 'Empty';
          }
          else if (data[1] == 24) {
            this.compartments[0] = 'Empty';
            this.compartments[1] = "Macbook";
          }
          else if (data[1] == 40) {
            this.compartments[0] = 'Empty';
            this.compartments[1] = "Windows";
          }
          else if (data[1] == 73) {
            this.compartments[0] = "Macbook";
            this.compartments[1] = "Windows";
          }
          else if (data[1] == 79) {
            this.compartments[0] = "Windows";
            this.compartments[1] = "Macbook";
          }
          else if(data[1] == 0) {
            this.showLongToast(data[1].toString());
          }
      }
  )
}

}

