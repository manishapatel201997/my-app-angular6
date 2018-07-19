import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() { }

  test_form: boolean;
  btnText: string = 'Display Message';
  ngOnInit() {
  }

  setFlagValue() {
    if (this.test_form == true) {
        this.test_form = false;
        this.btnText = 'Display Form'
    } else {
      this.test_form = true;
      this.btnText = 'Hide Form'

    }
  }

}
