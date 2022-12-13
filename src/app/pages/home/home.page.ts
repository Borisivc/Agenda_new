import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenthicationService } from 'src/app/services/autenthication.service';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
S
  constructor(
    private router: Router,
    public dbtaskService: DbserviceService,
    private alertcontroler: AlertController,
    public authenticationService:AutenthicationService) {

  }
  
  /**
   * Función que permite navegar entre componentes
   * mediante la URL
   * @param $event 
   */
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['home/'+direction]);
  }
 
  ionViewWillEnter(){
    this.router.navigate(['home/casa']);  
  }
 
  logout(){
    this.authenticationService.logout();
  }

  async salir(){
    const alert = await this.alertcontroler.create({
      header: 'Cerrar Sesión',
      message: '¿Estas Seguro que deseas cerrar tu sesión?',
      buttons: [
        {
          text: 'No, cancelar',
          handler: () => {

          }
        }, {
          text: 'Si, aceptar',
          handler: () => {
            this.authenticationService.logout();
          }
        }
      ]
    });

    await alert.present();
  }


}