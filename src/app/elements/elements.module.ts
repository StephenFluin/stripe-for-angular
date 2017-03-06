import { NgModule, ModuleWithProviders, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeService } from './stripe.service';
import { CardComponent } from './card/card.component';
import { CardNumberComponent } from './card-number/card-number.component';
import { CardExpiryComponent } from './card-expiry/card-expiry.component';
import { CardCvcComponent } from './card-cvc/card-cvc.component';
import { PostalCodeComponent } from './postal-code/postal-code.component';
import { StripeKey } from './tokens';

export const components = [    CardComponent, 
    CardNumberComponent, 
    CardExpiryComponent, 
    CardCvcComponent, 
    PostalCodeComponent
    ]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
  providers: [
    StripeService
  ]
})
export class ElementsModule { 
  static initializeApp(key: string): ModuleWithProviders {
    return {
      ngModule: ElementsModule,
      providers: [
        { provide: StripeKey, useValue: key },
      ]
    }
  }
}
