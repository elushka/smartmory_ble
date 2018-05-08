import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

import { HomePage } from '../home/home';

// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
const UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
const LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
const LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
const NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
const LOAN_STATUS = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF2';


@Component({
  selector: 'page-validatereturn',
  templateUrl: 'validatereturn.html',
})
export class ValidatereturnPage {

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
    this.pin = navParams.get('pin');
    this.device = navParams.get('device');
    this.ble.connect(this.device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)      
    );
  }

  ionViewWillEnter() {
    console.log('return validate page');
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

  presentLoadingIos() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Loading...',
      duration: 1000
    });
  
    loading.present();
  }
  
  showLongToast(phrase: string) {
    if(phrase == "0") {
        let toast = this.toastCtrl.create({
            message: 'Please shut the door.',
            duration: 5000,
  
        });
        toast.present();
    }
    if(phrase == "1") {
        let toast = this.toastCtrl.create({
            message: 'Please return the correct device.',
            duration: 5000,
        });
        toast.present();
        this.actLock();
      }
  if(phrase == "2") {
      let toast = this.toastCtrl.create({
          message: 'Successfully returned!',
          duration: 5000,
      });
      toast.present();
      this.exitConnection();
      this.navCtrl.popToRoot();
  }
  
  }
  
  actLock(){
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
    console.log('The write is done!!!');
  }
  
  exitConnection() {
    this.ble.disconnect(this.peripheral.id).then(
          () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
          () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
        )
  }
  
  returnValidate(){
  this.ble.read(this.peripheral.id,UNLOCK_SERVICE,LOAN_STATUS).then(
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
