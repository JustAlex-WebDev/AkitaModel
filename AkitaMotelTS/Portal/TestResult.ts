/**
 * Represents a single test result.
 */
export class TestResult {
  /**
   * Unique identifier of the result (PK).
   */
  id: number;

  /**
   * Identifier of the test this result belongs to.
   */
  saleId: number;

  /**
   * Date/time of the result.
   */
  resultTime: Date;

  /**
   * Result as text.
   */
  result: string;

  /**
   * Optional, decimal result.
   */
  numericResult?: number;

  /**
   * Flag, according to reference range (1-7, 10, 11).
   *
   * 1 = ultra low, 2 = very low, 3 = low, 5 = high,
   * 6 = very high, 7 = ultra high, 10 = star.
   * 4 = no flag. Null means the flag is not calculated.
   */
  flag?: number;

  /**
   * Flag string, e.g., "↑", "↓↓", etc.
   */
  flagSymbol: string;

  /**
   * Measurement units.
   */
  units: string;

  /**
   * Reference range (label) for this patient.
   */
  range: string;

  /**
   * Indicates if the result is ready.
   */
  isReady?: boolean;

  /**
   * Constructor to initialize the TestResult class.
   * @param id - Unique identifier for the test result.
   * @param saleId - The identifier of the test this result belongs to.
   * @param resultTime - The date/time when the result was generated.
   * @param result - The result as text (e.g., "positive", "negative").
   * @param flagSymbol - A string representing the result's flag symbol (e.g., "↑", "↓↓").
   * @param units - The units of the result (e.g., "mg/dL").
   * @param range - The reference range for this test result.
   * @param numericResult - Optional. The numeric representation of the result.
   * @param flag - Optional. A numeric flag indicating the result status (e.g., 1 for ultra-low, 5 for high).
   * @param isReady - Optional. Indicates if the result is ready for use.
   */
  constructor(
    id: number,
    saleId: number,
    resultTime: Date,
    result: string,
    flagSymbol: string,
    units: string,
    range: string,
    numericResult?: number,
    flag?: number,
    isReady?: boolean
  ) {
    this.id = id;
    this.saleId = saleId;
    this.resultTime = resultTime;
    this.result = result;
    this.flagSymbol = flagSymbol;
    this.units = units;
    this.range = range;
    this.numericResult = numericResult;
    this.flag = flag;
    this.isReady = isReady;
  }
}
