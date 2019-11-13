import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conference-connections';
  constructor(public auth: AuthenticationService) {}
}
