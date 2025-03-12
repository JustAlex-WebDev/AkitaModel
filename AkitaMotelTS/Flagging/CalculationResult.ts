import { FlagLevels } from "../FlagLevels";

/**
 * Represents a result received from the flagging API.
 */
export class CalculationResult {
  /**
   * Text representation of the results as it would be printed, shown on screen, etc.
   */
  textResult: string;

  /**
   * Number prefix, e.g. "<", ">>", ">=", etc.
   */
  prefix: string;

  /**
   * Decimal representation (if available).
   */
  decimalResult?: number | null;

  /**
   * Flag level of the result.
   */
  flagLevel: FlagLevels;

  /**
   * Flag, e.g., "↑", "↓↓", "3+", etc.
   */
  flag: string;

  /**
   * Flag, according to HL7 table 0078.
   */
  hl7Flag: string;

  /**
   * Constructor to initialize the CalculationResult class.
   * @param textResult - Text representation of the result.
   * @param prefix - Number prefix.
   * @param decimalResult - Decimal representation of the result.
   * @param flagLevel - Flag level of the result.
   * @param flag - Flag indicator.
   * @param hl7Flag - HL7-compliant flag indicator.
   */
  constructor(
    textResult: string = "",
    prefix: string,
    decimalResult: number | null = null,
    flagLevel: FlagLevels = FlagLevels.NONE,
    flag: string,
    hl7Flag: string
  ) {
    this.textResult = textResult;
    this.prefix = prefix;
    this.decimalResult = decimalResult;
    this.flagLevel = flagLevel;
    this.flag = flag;
    this.hl7Flag = hl7Flag;
  }
}
