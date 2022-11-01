import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'tdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  })

  //спросить
  get email() {
    // return this.loginForm.controls.email
    return this.loginForm.get('email')!
  }

  get password() {
    return this.loginForm.get('password')!
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
    console.log('login')
  }
}