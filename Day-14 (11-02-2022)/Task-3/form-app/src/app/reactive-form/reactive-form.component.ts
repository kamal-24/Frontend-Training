import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!:FormGroup 
  constructor() { }
  
  ngOnInit(): void {
    
    this.logIn=new FormGroup({
      'email': new FormControl('xyz@mail.com',[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'captcha':new FormControl('QW12ER'),
      'captcha2':new FormControl(null),

  })
  }
  Onsubmit(){

    console.log(this.logIn.value)
    console.log(this.logIn.status)
  }

}
