import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'tdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl('init email'),
    password: new FormControl(''),
  })

  onSubmit() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
    console.log('login')
  }
}
