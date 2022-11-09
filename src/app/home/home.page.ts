import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  async openBrowser() {
    await Browser.open({ url: 'https://www.google.cl/' });
    Browser.addListener('browserFinished', () => {
      console.log('browser finished');
    });
  }

  async closeBrowser() {
    await Browser.close();
  }

  agenda() {
    this.router.navigate(['agenda']);
  }
}