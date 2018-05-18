import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public username:string;
  public email:string;
  public password:string;
  constructor() {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  public submit() {
    if (this.username !== '') {
      console.log(this.username);
    }

    if (this.email !== '') {
      console.log(this.email);
    }

    if (this.password !== '') {
      console.log(this.password);
    }
  }
}
