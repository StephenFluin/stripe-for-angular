import { Injectable, Inject } from '@angular/core';
import { StripeKey } from './tokens';

declare var Stripe: any;

@Injectable()
export class StripeService {
  stripe;
  elements;

  constructor(@Inject(StripeKey) key: string) {
    this.stripe = Stripe(key);
    this.elements = this.stripe.elements();
   }

}
