import { Component, OnInit } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms = [];
  model = new Form();
  constructor() { }

  ngOnInit() {
  }

}