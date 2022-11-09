import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'agenda.page.html',
  styleUrls: ['agenda.page.scss'],
})
export class AgendaPage {

  constructor(private router: Router) {
  }
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['agenda/'+direction])
  }
}

