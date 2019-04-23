import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  remember = false;
  loginForm;

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router,
    private snackBar: MatSnackBar) {
      const savedDetails: any = JSON.parse(localStorage.getItem('userCredentials'));
      this.loginForm = this.fb.group({
        username: [savedDetails && savedDetails.username ? savedDetails.username : '' ],
        password: [savedDetails && savedDetails.password ? savedDetails.password : '']
      });
  }

  ngOnInit() {
  }

  rememberMe(event) {
    if (event.checked) {
     this.remember = true;
    }
  }
  onSubmit() {
    this.rest.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response.status);
        if (this.remember) {
          localStorage.setItem('userCredentials', JSON.stringify(this.loginForm.value));
        }
        this.snackBar.open('Login Success!', '', {
          duration: 2000,
        });
        this.router.navigate(['/orders']);
    }, ((error: any)   => {
      console.log(error);
      this.snackBar.open('Failure!', 'Please insert correct credentials', {
        duration: 2000,
      });
    }));
  }
}
