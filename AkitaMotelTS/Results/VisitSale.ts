import type { PaymentBase } from "../PaymentBase";
import type { Product } from "./Product";

/**
 * Represents a sale associated with a visit.
 */
export class VisitSale {
  /**
   * Primary key in LIS iLab.
   */
  id: number;

  /**
   * Date/time the sale was created.
   */
  date: Date;

  /**
   * List of billable products in the sale.
   */
  products: Product[];

  /**
   * List of payments made for this sale.
   */
  payments: PaymentBase[];

  /**
   * Total price of the sale.
   * @returns The sum of the prices of the products.
   */
  get total(): number {
    return this.products?.reduce((sum, product) => sum + product.price, 0) ?? 0;
  }

  /**
   * Balance of the sale.
   * @returns The difference between total and the sum of payments.
   */
  get balance(): number {
    return (
      this.total -
      (this.payments?.reduce((sum, payment) => sum + payment.amount, 0) ?? 0)
    );
  }

  /**
   * Constructor to initialize the VisitSale class.
   * @param id - The unique identifier for the sale.
   * @param date - The date/time the sale was created.
   * @param products - The list of billable products in the sale.
   * @param payments - The list of payments made for this sale.
   */
  constructor(
    id: number,
    date: Date,
    products: Product[],
    payments: PaymentBase[]
  ) {
    this.id = id;
    this.date = date;
    this.products = products;
    this.payments = payments;
  }
}
