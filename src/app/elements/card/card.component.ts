import { Component, OnInit,  } from '@angular/core';
import { StripeService } from '../stripe.service';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private ss: StripeService) {

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let card = this.ss.elements.create('card');
    card.mount('#card-element');
  }

}
