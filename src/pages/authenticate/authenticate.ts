import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { DetailPage } from "../detail/detail" 

const UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
const LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
const NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';

@Component({
  selector: 'page-authenticate',
  templateUrl: 'authenticate.html',
})
export class AuthenticatePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ble: BLE,
              public toastCtrl: ToastController,
              private ngZone: NgZone,
              public Detail: DetailPage) {
      let device = navParams.get('device');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticatePage');
  }

  returnLaptop(){
    this.ble.read(this.Detail.peripheral.id,this.Detail.UNLOCK_SERVICE,NFC_READ).then(
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
