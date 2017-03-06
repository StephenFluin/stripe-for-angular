import { Component, OnInit, Input } from '@angular/core';
import { StripeService } from '../stripe.service';


@Component({
  selector: 'stripe-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() style;
  @Input() hidePostalCode: boolean = false;

  constructor(private ss: StripeService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let card = this.ss.elements.create('card', { style: { base: this.style }, hidePostalCode: this.hidePostalCode });
    card.mount('#card-element');



  }

}
