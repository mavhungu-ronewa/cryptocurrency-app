import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent],
  selector: 'crypocurrency-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cryptocurrency';
}
