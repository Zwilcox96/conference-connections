import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload, UserDetails} from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: UserDetails;
  confirmPassword: '';
  credentials: TokenPayload = {
    email: '',
    password: ''
  };
  passwordsMatch = this.confirmPassword === this.credentials.password;
  failedToResetPassword: '';

  constructor(private auth: AuthenticationService) {}

  resetPassword() {
    this.auth.resetPassword(this.credentials).subscribe({error: e => console.error(e)});
  }
  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}
