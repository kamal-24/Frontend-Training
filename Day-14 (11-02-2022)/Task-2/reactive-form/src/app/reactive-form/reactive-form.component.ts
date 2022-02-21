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
      'fname': new FormControl('First Name',[Validators.required,Validators.minLength(3)]),
      'lname': new FormControl('Last Name'),
      'age':new FormControl(''),
      'address':new FormGroup({
        'street':new FormControl(null),
        'state':new FormControl(null)
      })
    })
  }

  Onsubmit(){
    console.log(this.logIn.value)
  }
}
