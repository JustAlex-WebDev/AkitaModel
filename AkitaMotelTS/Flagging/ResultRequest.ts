/**
 * Represents DTO for Flagging API call.
 */
export class ResultRequest {
  /**
   * Date of birth of the patient.
   * Default value is 33 years and 6 months old.
   */
  dateOfBirth?: Date;

  /**
   * Gender indicator of the patient. By default, it is null (Unknown).
   */
  isMale?: boolean | null;

  /**
   * Id of the patient's species. By default, it is 1 (Human).
   */
  speciesId?: number | null;

  /**
   * Date/time the sample was taken.
   */
  sampleDate?: Date;

  /**
   * References the taken test identifier.
   */
  testId: number;

  /**
   * Text representation of the test result.
   */
  textResult: string;

  /**
   * Numeric prefixes of the result.
   */
  numericPrefix: string;

  /**
   * Numeric result of the test.
   */
  numericResult?: number | null;

  /**
   * Reference Id, e.g., SaleItemId, Sample barcode, etc.
   */
  refId: string;

  /**
   * Constructor to initialize the ResultRequest class.
   * @param testId - ID of the test.
   * @param textResult - Text representation of the result.
   * @param numericPrefix - Numeric prefix of the result.
   * @param refId - Reference ID for the sample or related entity.
   * @param dateOfBirth - Date of birth of the patient.
   * @param isMale - Gender indicator of the patient.
   * @param speciesId - Species ID of the patient.
   * @param sampleDate - Date/time the sample was taken.
   * @param numericResult - Numeric result of the test.
   */
  constructor(
    testId: number,
    textResult: string,
    numericPrefix: string,
    refId: string,
    dateOfBirth: Date = new Date(
      new Date().setFullYear(
        new Date().getFullYear() - 33,
        new Date().getMonth() - 6
      )
    ),
    isMale: boolean | null = null,
    speciesId: number = 1,
    sampleDate: Date = new Date(),
    numericResult: number | null = null
  ) {
    this.dateOfBirth = dateOfBirth;
    this.isMale = isMale;
    this.speciesId = speciesId;
    this.sampleDate = sampleDate;
    this.testId = testId;
    this.textResult = textResult;
    this.numericPrefix = numericPrefix;
    this.numericResult = numericResult;
    this.refId = refId;
  }
}
