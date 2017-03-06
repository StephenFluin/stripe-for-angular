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

  constructor(ss: StripeService) {
    console.log("Key is",ss.stripe._apiKey);

  }
}
