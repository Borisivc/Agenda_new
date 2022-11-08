import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    usuario:"",
    password:""
  }
  constructor(private router: Router, public loadingController: LoadingController ) { }

  ngOnInit() {
  }
  ingresar(){
    this.presentLoadingWithOptions();
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.loadingController.dismiss();
    this.router.navigate(['/menu'],navigationExtras);
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 500,
      message: 'INICIANDO SESION',
    });
    return await loading.present();
  }

}
