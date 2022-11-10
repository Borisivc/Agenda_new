import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  lat: number;
  lon: number;
  total: string;
  data: any;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router) 
    {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) 
      {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }
      else {
        this.router.navigate(["/login"])
      }
    });
  }
  async openBrowser() 
  {
    await Browser.open({ url: 'https://www.google.cl/' });
    Browser.addListener('browserFinished', () => 
    {
      console.log('browser finished');
    });
  }
}
