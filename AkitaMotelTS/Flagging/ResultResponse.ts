import { CalculationResult } from "./CalculationResult";

/**
 * Represents the answer from the flagging service when a result flag is requested.
 */
export class ResultResponse {
  /**
   * Calculation result.
   */
  calculationResult?: CalculationResult;

  /**
   * If any error occurred when the result is flagged, it will be written here.
   */
  error?: string;

  /**
   * Reference, like SaleItemId, etc.
   */
  refId: string;

  /**
   * Default constructor to initialize the ResultResponse class.
   */
  constructor();

  /**
   * Convenience constructor to initialize the ResultResponse class with a reference ID.
   * @param refId - Reference ID.
   */
  constructor(refId: string);

  /**
   * Overloaded constructor implementation.
   * @param refId - Reference ID (optional).
   */
  constructor(refId: string = "") {
    this.refId = refId;
  }
}
