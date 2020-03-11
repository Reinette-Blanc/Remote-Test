import { Component } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { CalendarComponent, CalendarResult } from 'ion2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date: string;
  type: 'string';
  test: string;
  onChange($event) {
    this.test = $event.format('DD-MM-YYYY');
    // console.log($event.format('DD-MM-YYYY'));
  }
  constructor(public auth: AngularFireAuth, private cc: CalendarComponent, public res: CalendarResult) {}
}
