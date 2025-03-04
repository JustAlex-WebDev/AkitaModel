import { PaymentBase } from "./PaymentBase";
import { PaymentMethod } from "./PaymentMethod";

/**
 * Represents a cash payment.
 */
export class CashPayment extends PaymentBase {
  /**
   * Payment method (Cash).
   */
  override method: PaymentMethod.Cash;

  /**
   * Constructor to initialize the CashPayment class.
   * @param id - Unique identifier for the payment.
   * @param date - Date/time when the payment was made.
   * @param amount - Amount of the payment.
   */
  constructor(id: number, date: Date, amount: number) {
    super(id, date, amount);
    this.method = PaymentMethod.Cash;
  }
}
