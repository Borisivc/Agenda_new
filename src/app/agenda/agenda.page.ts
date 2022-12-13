import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private router: Router) {

   }
   segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['agenda/'+direction])
  }

  ngOnInit() {
  }

}
