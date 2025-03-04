import { FlagLevels } from "./FlagLevels";

/**
 * Allowed result entry.
 */
export class ResultEntry {
  /**
   * Allowed value of the result.
   */
  value: string;

  /**
   * Corresponding flag for this value.
   */
  flagLevel: FlagLevels = FlagLevels.NONE;

  /**
   * Constructor to initialize the ResultEntry class.
   * @param value - Allowed value of the result.
   * @param flagLevel - Corresponding flag level for the value (default is NONE).
   */
  constructor(value: string, flagLevel: FlagLevels = FlagLevels.NONE) {
    this.value = value;
    this.flagLevel = flagLevel;
  }
}
