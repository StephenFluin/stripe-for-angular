import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseUserConfig } from 'angularfire2';
import { StripeService } from './elements/stripe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stripe Elements Example';
  cardStyle = {
    fontSize:'40px',
  };

  constructor(public ss: StripeService) {

  }

  submitStripe() {
     let context = {};
     this.ss.submit('https://token-eesintation.example', context);
  }
}
