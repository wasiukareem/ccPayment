import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardPaymentFacade } from './store/facade';
import { CreditCardState } from './models/credit-card.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Credit Card Payment';
  creditCard$: Observable<CreditCardState>;
  
  constructor(private router: Router, private creditCardPaymentFacade: CreditCardPaymentFacade) {
    this.creditCard$ = this.creditCardPaymentFacade.data$;
  }

  ngOnInit() {
    this.creditCard$.subscribe(data => {
    })
  }


  navigate(){
    this.router.navigate(['/payment']);
  }
}
