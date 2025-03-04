import { FlagLevelLimits } from "./FlagLevelLimits";
import type { FlagType } from "./FlagType";
import type { ReferenceRange } from "./ReferenceRange";
import type { ResultEntry } from "./ResultEntry";
import { ResultTypes } from "./ResultTypes";
import type { SampleType } from "./SampleType";

/**
 * Test (analyte).
 */
export class Test {
  /**
   * Primary key.
   */
  id: number;

  /**
   * Name of the test (analyte), e.g. "Glucose".
   */
  name: string;

  /**
   * Long name of the test (analyte), e.g. "Glucose in Serum".
   */
  longName: string;

  /**
   * Foreign key to department this test belongs to.
   */
  departmentId?: number;

  /**
   * Sorting value.
   */
  rank?: number;

  /**
   * LOINC code of the test.
   */
  loincCode: string;

  /**
   * Measurement units of the test.
   */
  units: string;

  /**
   * Type of the result (numeric, text, etc.), see ResultTypes.
   */
  resultType: ResultTypes = ResultTypes.Text;

  /**
   * When result type is semiquantitative, this flag shows which range stands for negative results.
   */
  negativeIsLow: boolean = true;

  /**
   * Scale is the number of digits to the right of the decimal point in a number.
   */
  scale: number;

  /**
   * Foreign key to SampleType.
   */
  sampleTypeId?: number;

  /**
   * SampleType of the test.
   */
  sampleType: SampleType;

  /**
   * Foreign key to Flag Types.
   */
  flagTypeId?: number;

  /**
   * Applicable flags, such as "+", "↑", "3+", etc.
   */
  flagType: FlagType;

  /**
   * If false, test should be considered as "internal use only" and shouldn't be reported to third parties.
   */
  showInResults?: boolean = true;

  /**
   * Maximum allowed flag level.
   */
  flagLimit: FlagLevelLimits = FlagLevelLimits.UP_TO_ULTRA;

  /**
   * Collection of reference ranges for the given test.
   */
  ranges: ReferenceRange[] = [];

  /**
   * List of allowed values, applicable only if result type is ResultTypes.List.
   */
  allowedResults: ResultEntry[] = [];

  /**
   * Constructor to initialize the Test object.
   * @param id - The unique identifier for the test.
   * @param name - The name of the test.
   * @param longName - The long name of the test.
   * @param departmentId - The ID of the department the test belongs to (optional).
   * @param rank - The sorting value for the test (optional).
   * @param loincCode - The LOINC code for the test.
   * @param units - The measurement units for the test.
   * @param resultType - The result type of the test.
   * @param negativeIsLow - Flag indicating whether negative results are considered low for semiquantitative tests.
   * @param scale - The scale of the test.
   * @param sampleTypeId - The ID of the sample type (optional).
   * @param sampleType - The sample type associated with the test.
   * @param flagTypeId - The ID of the flag type (optional).
   * @param flagType - The flag type associated with the test.
   * @param showInResults - Whether the test should be reported to third parties (optional).
   * @param flagLimit - The maximum allowed flag level for the test.
   * @param ranges - The reference ranges for the test.
   * @param allowedResults - The allowed results for the test.
   */
  constructor(
    id: number,
    name: string,
    longName: string,
    loincCode: string,
    units: string,
    resultType: ResultTypes,
    negativeIsLow: boolean,
    scale: number,
    sampleType: SampleType,
    flagType: FlagType,
    flagLimit: FlagLevelLimits,
    ranges: ReferenceRange[] = [],
    allowedResults: ResultEntry[] = [],
    departmentId?: number,
    rank?: number,
    sampleTypeId?: number,
    flagTypeId?: number,
    showInResults?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.longName = longName;
    this.departmentId = departmentId;
    this.rank = rank;
    this.loincCode = loincCode;
    this.units = units;
    this.resultType = resultType;
    this.negativeIsLow = negativeIsLow;
    this.scale = scale;
    this.sampleTypeId = sampleTypeId;
    this.sampleType = sampleType;
    this.flagTypeId = flagTypeId;
    this.flagType = flagType;
    this.showInResults = showInResults;
    this.flagLimit = flagLimit;
    this.ranges = ranges;
    this.allowedResults = allowedResults;
  }
}
