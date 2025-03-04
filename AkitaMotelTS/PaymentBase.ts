import type { PaymentMethod } from "./PaymentMethod";

/**
 * Base class for payments (abstract).
 */
export abstract class PaymentBase {
  /**
   * Primary key of the payment in LIS iLab.
   */
  id: number;

  /**
   * Date/time when the payment was made.
   */
  date: Date;

  /**
   * Payment method. This is an abstract property, each subclass should implement it.
   */
  abstract method: PaymentMethod;

  /**
   * Amount of the payment.
   */
  amount: number;

  /**
   * Constructor to initialize the PaymentBase class.
   * @param id - Unique identifier for the payment.
   * @param date - Date/time when the payment was made.
   * @param amount - Amount of the payment.
   */
  constructor(id: number, date: Date, amount: number) {
    this.id = id;
    this.date = date;
    this.amount = amount;
  }
}
