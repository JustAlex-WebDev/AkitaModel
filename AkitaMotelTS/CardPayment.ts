import { PaymentBase } from "./PaymentBase";
import { PaymentMethod } from "./PaymentMethod";

/**
 * Represents a card payment.
 */
export class CardPayment extends PaymentBase {
  /**
   * Payment method (Card).
   */
  override method: PaymentMethod.Card;

  /**
   * Card number (masked) used for the payment.
   */
  cardNumber: string;

  /**
   * Constructor to initialize the CardPayment class.
   * @param id - Unique identifier for the payment.
   * @param date - Date/time when the payment was made.
   * @param amount - Amount of the payment.
   * @param cardNumber - The masked card number used for the payment.
   */
  constructor(id: number, date: Date, amount: number, cardNumber: string) {
    super(id, date, amount);
    this.method = PaymentMethod.Card;
    this.cardNumber = cardNumber;
  }
}
