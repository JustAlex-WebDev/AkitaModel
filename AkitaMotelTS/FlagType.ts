import { FlagLevels } from "./FlagLevels";

/**
 * Represents symbols to be shown or printed for abnormal results.
 */
export class FlagType {
  /**
   * The value when the result is below the scale, e.g. "<<".
   */
  belowScale: string;

  /**
   * The value when the result is below alarm 2, e.g. "↓↓↓".
   * This value corresponds to FlagLevels.ULTRA_LOW.
   */
  ultraLow: string;

  /**
   * The value when the result is below alarm 1, e.g. "↓↓".
   * This value corresponds to FlagLevels.VERY_LOW.
   */
  veryLow: string;

  /**
   * The value when the result is below the reference range, e.g. "↓".
   * This value corresponds to FlagLevels.LOW.
   */
  low: string;

  /**
   * The value when the result is above the reference range, e.g. "↑".
   * This value corresponds to FlagLevels.HIGH.
   */
  high: string;

  /**
   * The value when the result is above alarm 1, e.g. "↑↑".
   * This value corresponds to FlagLevels.VERY_HIGH.
   */
  veryHigh: string;

  /**
   * The value when the result is above alarm 2, e.g. "↑↑↑".
   * This value corresponds to FlagLevels.ULTRA_HIGH.
   */
  ultraHigh: string;

  /**
   * The value when the result is above the scale, e.g. ">>".
   */
  aboveScale: string;

  /**
   * Constructor to initialize the FlagType class.
   * @param belowScale - The value when the result is below the scale.
   * @param ultraLow - The value when the result is below alarm 2.
   * @param veryLow - The value when the result is below alarm 1.
   * @param low - The value when the result is below the reference range.
   * @param high - The value when the result is above the reference range.
   * @param veryHigh - The value when the result is above alarm 1.
   * @param ultraHigh - The value when the result is above alarm 2.
   * @param aboveScale - The value when the result is above the scale.
   */
  constructor(
    belowScale: string,
    ultraLow: string,
    veryLow: string,
    low: string,
    high: string,
    veryHigh: string,
    ultraHigh: string,
    aboveScale: string
  ) {
    this.belowScale = belowScale;
    this.ultraLow = ultraLow;
    this.veryLow = veryLow;
    this.low = low;
    this.high = high;
    this.veryHigh = veryHigh;
    this.ultraHigh = ultraHigh;
    this.aboveScale = aboveScale;
  }

  /**
   * Convenience method to get the flag for the given level.
   * @param flagLevel - Result flag level.
   * @returns Flag to be shown/printed.
   */
  getFlag(flagLevel: FlagLevels): string {
    switch (flagLevel) {
      case FlagLevels.ULTRA_LOW:
        return this.ultraLow;
      case FlagLevels.VERY_LOW:
        return this.veryLow;
      case FlagLevels.LOW:
        return this.low;
      case FlagLevels.HIGH:
        return this.high;
      case FlagLevels.VERY_HIGH:
        return this.veryHigh;
      case FlagLevels.ULTRA_HIGH:
        return this.ultraHigh;
      default:
        return "";
    }
  }
}
