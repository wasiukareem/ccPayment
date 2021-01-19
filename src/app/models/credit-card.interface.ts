export interface CreditCardState {
  creditCardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  securityCodeCVV?: string;
  amount: number;
}

