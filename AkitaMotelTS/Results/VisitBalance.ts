import type { Patient } from "../Patient";
import { VisitBase } from "../VisitBase";
import type { VisitSale } from "./VisitSale";

/**
 * Represents a Visit view with structure for bill reporting.
 */
export class VisitBalance extends VisitBase {
  /**
   * List of sales.
   */
  sales: VisitSale[];

  /**
   * Balance of the visit.
   * @returns The sum of the balances of the sales.
   */
  get balance(): number {
    return this.sales?.reduce((sum, sale) => sum + sale.balance, 0) ?? 0;
  }

  /**
   * Constructor to initialize the VisitBalance class.
   * @param id - The unique identifier for the visit.
   * @param date - The date of the visit.
   * @param patient - The patient associated with the visit.
   * @param sales - The list of sales associated with the visit.
   */
  constructor(id: number, date: Date, patient: Patient, sales: VisitSale[]) {
    // Call the constructor of the base class (VisitBase)
    super(id, date, patient);

    this.sales = sales;
  }
}
