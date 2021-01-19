/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentService } from './payment.service';
import { CreditCardPaymentFacade } from '../store/facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

describe('Service: Payment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],

      providers: [PaymentService, CreditCardPaymentFacade],
    });
  });

  it('should create service', inject(
    [PaymentService],
    (service: PaymentService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('Should return success on payWithCard', () => {
    const service: PaymentService = TestBed.inject(PaymentService);
    const mockPaymentData = {
      creditCardNumber: '1234567890123456',
      cardHolder: 'Test Holder',
      expirationDate: '2021-01-19T14:22:16.105Z',
      securityCode: '123',
      amount: 1000,
    };
    const mockResponse = {
      status: 'success',
      message: 'Payment processed successfully!',
    };

    service.makePayment(mockPaymentData).pipe(takeUntil(new Subject())).subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    }

    );
  });
});
