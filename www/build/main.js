webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_ble__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var HomePage = (function () {
    function HomePage(navCtrl, ble, alertCtrl, ngZone) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.detected = null;
        this.devices = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.devices = [];
        this.scan();
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.devices = []; // clear existing list
        this.ble.scan([UNLOCK_SERVICE], 4).subscribe(function (device) { return _this.onDiscoveredDevice(device); });
        if (this.devices = []) {
            this.detected = 1;
        }
        else {
            this.detected = 0;
        }
        console.log('Scanning for Bluetooth LE Devices');
    };
    HomePage.prototype.onDiscoveredDevice = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
        });
    };
    HomePage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + ' selected');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            device: device
        });
    };
    HomePage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    HomePage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Smartmory\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="scan()">\n        Scan\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-list>\n    <button ion-item *ngFor="let device of devices" (click)="deviceSelected(device)">\n      <button ion-item>Smartmory @ Photonics</button>\n      <!-- <h2>{{ device.name || \'Unnamed\' }}</h2> -->\n      <!-- <p>{{ device.id }}</p>\n      <p>RSSI: {{device.rssi}}</p> -->\n    </button>\n   </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_authenticate__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loan_loan__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__return_return__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF2';
var CHECK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
var SHELF = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        this.device = navParams.get('device');
        this.ble.connect(this.device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    DetailPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    DetailPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
            // TODO navigate back?
        });
        toast.present();
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.exitConnection = function () {
        var _this = this;
        this.navCtrl.pop();
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    // ionViewWillLeave() {
    //   console.log('ionViewWillLeave disconnecting Bluetooth');
    //   this.ble.disconnect(this.peripheral.id).then(
    //     () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
    //     () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    //   )
    // }
    DetailPage.prototype.showLongToast = function (phrase) {
        if (phrase == "0") {
            var toast = this.toastCtrl.create({
                message: 'Please return the correct device.',
                duration: 2000,
            });
            toast.present();
        }
        if (phrase == "1") {
            var toast = this.toastCtrl.create({
                message: 'Laptop returned successfully.',
                duration: 2000,
            });
            toast.present();
        }
        if (phrase == "2") {
            var toast = this.toastCtrl.create({
                message: 'NFC connection timeout, open shelf again',
                duration: 5000,
            });
            toast.present();
        }
    };
    DetailPage.prototype.ShelfUnlock = function (position) {
        var action = this.selectAction;
        if (action == "borrow") {
            var toast = this.toastCtrl.create({
                message: 'Unlocked! Proceed to borrow',
                duration: 2000,
                position: position
            });
            toast.present(toast);
        }
        else if (action == "return") {
            var toast = this.toastCtrl.create({
                message: 'Unlocked! Proceed to return',
                duration: 2000,
                position: position
            });
            toast.present(toast);
        }
        // let toast = this.toastCtrl.create({
        //   message: 'Unlocked!',
        //   duration: 2000,
        //   position: position
        // });
        // toast.present(toast);
    };
    DetailPage.prototype.returnLaptop = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, NFC_READ).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            _this.showLongToast(data[1].toString());
        });
    };
    DetailPage.prototype.loanDevice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__loan_loan__["a" /* LoanPage */], {
            device: this.device
        });
    };
    DetailPage.prototype.returnDevice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__return_return__["a" /* ReturnPage */], {
            device: this.device
        });
    };
    DetailPage.prototype.setLock = function () {
        console.log('setLock');
        console.log('This is the pin: ' + this.pin);
        var data = new Uint8Array([this.pin]);
        console.log('This is the data: ' + data);
        console.log('This is the data buffer: ' + data.buffer);
        this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(function () { return console.log('Updated lock'); }, function () { return console.log('Error updating lock'); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__authenticate_authenticate__["a" /* AuthenticatePage */], {
            device: this.device
        });
        console.log('The write is done!!!');
    };
    DetailPage.prototype.actLock = function (i) {
        this.pin = i;
        console.log("Pin rn: " + this.pin);
        this.setLock();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/detail/detail.html"*/'\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button clear large (click)="exitConnection()">\n      <ion-icon name="arrow-back"></ion-icon> \n    </button>\n    <!-- <ion-title>{{ peripheral.name || \'Device\' }}</ion-title> -->\n    <ion-title text-wrap>Smartmory @ Photonics</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="padding">\n\n<ion-content padding>\n  To get started, choose an option.\n  <ion-list no-lines>\n      <!-- <ion-item *ngFor="let laptop of compartments; let i = index"> -->\n      <!-- <button ion-button default item-center (click)="ShelfUnlock(\'middle\'); actLock(i+2);">{{laptop}}</button> -->\n      <button ion-button default item-center (click)="loanDevice();">Loan</button>\n      <button ion-button default item-center (click)="returnDevice();">Return</button>\n      <!-- </ion-item> -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
var AuthenticatePage = (function () {
    function AuthenticatePage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        var device = navParams.get('device');
        this.ble.connect(device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    AuthenticatePage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    AuthenticatePage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
    };
    AuthenticatePage.prototype.showLongToast = function (phrase) {
        if (phrase == "0") {
            var toast = this.toastCtrl.create({
                message: 'Please return the correct device.',
                duration: 2000,
            });
            toast.present();
        }
        if (phrase == "1") {
            var toast = this.toastCtrl.create({
                message: 'Laptop returned successfully.',
                duration: 2000,
            });
            toast.present();
        }
        if (phrase == "2") {
            var toast = this.toastCtrl.create({
                message: 'NFC connection timeout, retry again',
                duration: 5000,
            });
            toast.present();
        }
    };
    AuthenticatePage.prototype.returnLaptop = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, NFC_READ).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            _this.showLongToast(data[1].toString());
        });
    };
    return AuthenticatePage;
}());
AuthenticatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-authenticate',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/authenticate/authenticate.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Authentication</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <button ion-button default item-center (click)="returnLaptop();">Authorize Return</button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/authenticate/authenticate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], AuthenticatePage);

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completeloan_completeloan__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
var LoanPage = (function () {
    function LoanPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        this.device = navParams.get('device');
        this.ble.connect(this.device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
        this.compartments = [];
    }
    LoanPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter Updating Table');
        this.checkAvailability();
    };
    LoanPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    LoanPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
    };
    LoanPage.prototype.exitConnection = function () {
        var _this = this;
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    LoanPage.prototype.showLongToast = function (phrase) {
        if (phrase == "0") {
            var toast = this.toastCtrl.create({
                message: 'No remaining laptops :(',
                duration: 5000,
            });
            toast.present();
            this.exitConnection();
            this.navCtrl.popToRoot();
        }
    };
    LoanPage.prototype.actLock = function (i) {
        this.pin = i;
        console.log("Pin rn: " + this.pin);
        console.log('setLock');
        console.log('This is the pin: ' + this.pin);
        var data = new Uint8Array([this.pin]);
        console.log('This is the data: ' + data);
        console.log('This is the data buffer: ' + data.buffer);
        this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(function () { return console.log('Updated lock'); }, function () { return console.log('Error updating lock'); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__completeloan_completeloan__["a" /* CompleteloanPage */], {
            device: this.device,
            pin: this.pin
        });
        console.log('The write is done!!!');
    };
    LoanPage.prototype.checkAvailability = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, LOAN_AVAIL).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data [0]: ' + data[0]);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            if (data[1] == 33) {
                _this.compartments[0] = "Macbook";
                _this.compartments[1] = 'Empty';
            }
            else if (data[1] == 55) {
                _this.compartments[0] = "Windows";
                _this.compartments[1] = 'Empty';
            }
            else if (data[1] == 24) {
                _this.compartments[0] = 'Empty';
                _this.compartments[1] = "Macbook";
            }
            else if (data[1] == 40) {
                _this.compartments[0] = 'Empty';
                _this.compartments[1] = "Windows";
            }
            else if (data[1] == 73) {
                _this.compartments[0] = "Macbook";
                _this.compartments[1] = "Windows";
            }
            else if (data[1] == 79) {
                _this.compartments[0] = "Windows";
                _this.compartments[1] = "Macbook";
            }
            else if (data[1] == 0) {
                _this.showLongToast(data[1].toString());
            }
        });
    };
    return LoanPage;
}());
LoanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loan',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/loan/loan.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Loan Device</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item *ngFor="let laptop of compartments; let i = index">\n        <button ion-button default [hidden]="laptop == \'Empty\'" item-center (click)="actLock(i+2);">{{laptop}}</button>\n        </ion-item> \n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/loan/loan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], LoanPage);

//# sourceMappingURL=loan.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteloanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
var LOAN_STATUS = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF2';
var CompleteloanPage = (function () {
    function CompleteloanPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        this.pin = navParams.get('pin');
        this.device = navParams.get('device');
        this.ble.connect(this.device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    CompleteloanPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    CompleteloanPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
    };
    CompleteloanPage.prototype.showLongToast = function (phrase) {
        if (phrase == "0") {
            var toast = this.toastCtrl.create({
                message: 'Please shut the door.',
                duration: 5000,
            });
            toast.present();
        }
        if (phrase == "1") {
            var toast = this.toastCtrl.create({
                message: 'Loan completed!',
                duration: 5000,
            });
            toast.present();
            this.exitConnection();
            this.navCtrl.popToRoot();
        }
        if (phrase == "2") {
            var toast = this.toastCtrl.create({
                message: 'Please take the device.',
                duration: 5000,
            });
            toast.present();
            this.actLock();
        }
    };
    CompleteloanPage.prototype.actLock = function () {
        console.log("Pin rn: " + this.pin);
        console.log('setLock');
        console.log('This is the pin: ' + this.pin);
        var data = new Uint8Array([this.pin]);
        console.log('This is the data: ' + data);
        console.log('This is the data buffer: ' + data.buffer);
        this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(function () { return console.log('Updated lock'); }, function () { return console.log('Error updating lock'); });
        console.log('The write is done!!!');
    };
    CompleteloanPage.prototype.exitConnection = function () {
        var _this = this;
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    CompleteloanPage.prototype.loanValidate = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, LOAN_STATUS).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            _this.showLongToast(data[1].toString());
        });
    };
    return CompleteloanPage;
}());
CompleteloanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-completeloan',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/completeloan/completeloan.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Complete Loan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button default item-center (click)="loanValidate();">Complete Loan</button>\n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/completeloan/completeloan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], CompleteloanPage);

//# sourceMappingURL=completeloan.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validatereturn_validatereturn__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
var ReturnPage = (function () {
    function ReturnPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        this.device = navParams.get('device');
        this.ble.connect(this.device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
        this.compartments = [];
    }
    ReturnPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter Updating Table');
        this.checkAvailability();
    };
    ReturnPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    ReturnPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
    };
    ReturnPage.prototype.exitConnection = function () {
        var _this = this;
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    ReturnPage.prototype.showLongToast = function (phrase) {
        if (phrase == "170") {
            var toast = this.toastCtrl.create({
                message: 'No empty shelves available.',
                duration: 5000,
            });
            toast.present();
            this.exitConnection();
            this.navCtrl.popToRoot();
        }
    };
    ReturnPage.prototype.actLock = function () {
        console.log("Pin rn: " + this.pin);
        console.log('setLock');
        console.log('This is the pin: ' + this.pin);
        var data = new Uint8Array([this.pin]);
        console.log('This is the data: ' + data);
        console.log('This is the data buffer: ' + data.buffer);
        this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(function () { return console.log('Updated lock'); }, function () { return console.log('Error updating lock'); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__validatereturn_validatereturn__["a" /* ValidatereturnPage */], {
            device: this.device,
            pin: this.pin
        });
        console.log('The write is done!!!');
    };
    ReturnPage.prototype.checkAvailability = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, NFC_READ).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            if (data[1] == 170) {
                _this.showLongToast(data[1].toString());
            }
            else {
                _this.pin = data[1] + 2;
            }
        });
    };
    return ReturnPage;
}());
ReturnPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-return',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/return/return.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Return Device</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n        <button ion-button default item-center (click)="actLock();">Empty Shelf</button>\n        \n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/return/return.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], ReturnPage);

//# sourceMappingURL=return.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatereturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// OG Service UUIDs FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0
var UNLOCK_SERVICE = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF0';
var LOAN_AVAIL = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF1';
var LOCK = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF4';
var NFC_READ = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF3';
var LOAN_STATUS = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFF2';
var ValidatereturnPage = (function () {
    function ValidatereturnPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        this.pin = navParams.get('pin');
        this.device = navParams.get('device');
        this.ble.connect(this.device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    ValidatereturnPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
    };
    ValidatereturnPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
    };
    ValidatereturnPage.prototype.showLongToast = function (phrase) {
        if (phrase == "0") {
            var toast = this.toastCtrl.create({
                message: 'Please shut the door.',
                duration: 5000,
            });
            toast.present();
        }
        if (phrase == "1") {
            var toast = this.toastCtrl.create({
                message: 'Please return the correct device.',
                duration: 5000,
            });
            toast.present();
            this.actLock();
        }
        if (phrase == "2") {
            var toast = this.toastCtrl.create({
                message: 'Successfully returned!',
                duration: 5000,
            });
            toast.present();
            this.exitConnection();
            this.navCtrl.popToRoot();
        }
    };
    ValidatereturnPage.prototype.actLock = function () {
        console.log("Pin rn: " + this.pin);
        console.log('setLock');
        console.log('This is the pin: ' + this.pin);
        var data = new Uint8Array([this.pin]);
        console.log('This is the data: ' + data);
        console.log('This is the data buffer: ' + data.buffer);
        this.ble.write(this.peripheral.id, UNLOCK_SERVICE, LOCK, data.buffer).then(function () { return console.log('Updated lock'); }, function () { return console.log('Error updating lock'); });
        console.log('The write is done!!!');
    };
    ValidatereturnPage.prototype.exitConnection = function () {
        var _this = this;
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    ValidatereturnPage.prototype.returnValidate = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, UNLOCK_SERVICE, LOAN_STATUS).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('This is the data: ' + data);
            console.log('This is the data zero: ' + data[1]);
            console.log('This is the data buffer: ' + data.buffer);
            _this.showLongToast(data[1].toString());
        });
    };
    return ValidatereturnPage;
}());
ValidatereturnPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validatereturn',template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/pages/validatereturn/validatereturn.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Verify Return</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button default item-center (click)="returnValidate();">Complete Return</button>\n</ion-content>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/pages/validatereturn/validatereturn.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], ValidatereturnPage);

//# sourceMappingURL=validatereturn.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_authenticate_authenticate__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loan_loan__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_return_return__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_completeloan_completeloan__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_validatereturn_validatereturn__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_loan_loan__["a" /* LoanPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_return_return__["a" /* ReturnPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_completeloan_completeloan__["a" /* CompleteloanPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validatereturn_validatereturn__["a" /* ValidatereturnPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_loan_loan__["a" /* LoanPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_return_return__["a" /* ReturnPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_completeloan_completeloan__["a" /* CompleteloanPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validatereturn_validatereturn__["a" /* ValidatereturnPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/erostin/Desktop/smartmory_ble/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/erostin/Desktop/smartmory_ble/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map