import { Component, OnInit } from '@angular/core';
import { StripeService } from '../stripe.service';

@Component({
  selector: 'stripe-card-cvc',
  templateUrl: './card-cvc.component.html',
  styleUrls: ['./card-cvc.component.css']
})
export class CardCvcComponent implements OnInit {

  constructor(private ss: StripeService) {

   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let card = this.ss.elements.create('card',{style:{}});
    card.mount('#card-cvc');



  }
}
