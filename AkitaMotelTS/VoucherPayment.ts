import { PaymentBase } from "./PaymentBase";
import { PaymentMethod } from "./PaymentMethod";

/**
 * Represents a payment made with a voucher.
 */
export class VoucherPayment extends PaymentBase {
  /**
   * The payment method used for this payment (Voucher).
   */
  override method: PaymentMethod.Voucher = PaymentMethod.Voucher;

  /**
   * Voucher serial number used for the payment.
   */
  voucherNumber: string;

  /**
   * Constructor to initialize the VoucherPayment object.
   * @param id - Unique identifier for the payment.
   * @param date - Date/time when the payment was made.
   * @param amount - Amount of the payment.
   * @param voucherNumber - The voucher serial number used for the payment.
   */
  constructor(id: number, date: Date, amount: number, voucherNumber: string) {
    super(id, date, amount); // Call the base class constructor
    this.voucherNumber = voucherNumber;
  }
}
