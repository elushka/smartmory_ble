import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

// NeoPixel Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
const UNLOCK_SERVICE = 'ccc0';
const LOCK = 'ccc2';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  peripheral: any = {};
  pin: number;
  public compartments: any;
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
    this.compartments = [
                  "MacBook Pro 15",
                  "MacBook Air 13",
                  "Lenovo ThinkPad",
                  "MacBook Pro 13",
                  "MacBook Pro 15",
                  "Lenovo ThinkPad",
                  "MacBook Air 11",
                  "Empty Compartment",
                  "MacBook Pro 13",
                  "MacBook Pro 15",
                ];
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

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      // TODO navigate back?
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Laptop returned successfully!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Please return the correct device.',
      duration: 2000,
    });
    toast.present();
  }

  ShelfUnlock(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Unlocked!',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  
  setLock(event){
    console.log('setLock');
    console.log('This is the pin: '+this.pin);
    let data = new Uint8Array([this.pin]);
    console.log('This is the data: '+data);
    console.log('This is the data buffer: '+data.buffer);
    this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(
      () => console.log('Updated lock'),
      () => console.log('Error updating lock')
    );

  }

  actLock(i){
    this.pin = i;
    console.log("Pin rn: "+this.pin);
    this.setLock(event);
  }

}
