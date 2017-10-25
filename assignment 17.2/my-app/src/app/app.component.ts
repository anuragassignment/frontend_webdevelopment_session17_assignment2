import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  title = 'this is an example of data transformed by titlecase pipe in Anuglar 4';

  collection = [{ event: 'hiking' },
  { event: 'treking' },
  { event: 'go carting' }];


  onSubmit() {
    this.form.reset();
  }

}
