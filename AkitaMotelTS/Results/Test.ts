import { FlagLevels } from "../FlagLevels";
import { ExaminationBase } from "./ExaminationBase";

/**
 * Represents a single test (analyze, assay) result.
 */
export class Test extends ExaminationBase {
  /**
   * If the examination is a panel, this property will be false for tests.
   */
  override isPanel: boolean;

  /**
   * The result of the test.
   */
  textResult: string;

  /**
   * Measurement units.
   */
  units?: string;

  /**
   * Applicable reference range.
   */
  referenceRange?: string;

  /**
   * Level of the abnormality flag.
   */
  flagLevel?: FlagLevels;

  /**
   * Text of the abnormality flag.
   */
  flagText: string;

  /**
   * FK to the footnote in LIS iLab.
   */
  footnoteId?: number;

  /**
   * Constructor to initialize the Test class.
   * @param id - The unique identifier for the test.
   * @param name - The name of the test.
   * @param rank - The rank of the test, used for sorting.
   * @param textResult - The result of the test.
   * @param flagText - The text describing the abnormality flag.
   * @param isPanel - If the examination is a panel (false for tests).
   * @param units - The optional measurement units for the result.
   * @param referenceRange - The optional reference range for the result.
   * @param flagLevel - The optional level of the abnormality flag.
   * @param footnoteId - The optional foreign key to the footnote in LIS iLab.
   * @param productId - The optional product ID associated with the test.
   */
  constructor(
    id: number,
    name: string,
    rank: number,
    textResult: string,
    flagText: string,
    isPanel: boolean,
    units?: string,
    referenceRange?: string,
    flagLevel?: FlagLevels,
    footnoteId?: number,
    productId?: number
  ) {
    // Call the constructor of the base class (ExaminationBase)
    super(id, name, rank, isPanel, productId);

    this.isPanel = isPanel;
    this.textResult = textResult;
    this.flagText = flagText;
    this.units = units;
    this.referenceRange = referenceRange;
    this.flagLevel = flagLevel;
    this.footnoteId = footnoteId;
  }
}
