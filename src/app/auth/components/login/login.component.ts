import { Component, OnInit } from '@angular/core'
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/auth.service'

@Component({
  selector: 'tdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  loginForm = new UntypedFormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl('', [Validators.minLength(4), Validators.required]),
    rememberMe: new FormControl(null),
  })

  get email() {
    return this.loginForm.controls['email']
    // return this.loginForm.get('email')!
  }

  get password() {
    return this.loginForm.get('password')!
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value)
  }

  ngOnInit(): void {
    console.log('login')
  }
}
