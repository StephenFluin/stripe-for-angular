import { Injectable, Inject } from '@angular/core';
import { StripeKey } from './tokens';

import { Subject } from 'rxjs/Subject';

declare var Stripe: any;

@Injectable()
export class StripeService {
  stripe;
  elements;

  onSuccess = new Subject<any>();
  onFailure = new Subject<any>();

  constructor(@Inject(StripeKey) key: string) {
    this.stripe = Stripe(key);
    this.elements = this.stripe.elements();
   }

   submit(destiationUrl: string, context: any) {
    //@TODO Implement
   }


}
