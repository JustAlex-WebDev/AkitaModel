import { SampleType } from "./SampleType";

/**
 * Base class for sample, used in other derived sample types.
 */
export class SampleBase {
  /**
   * PK in LIS iLab.
   */
  id?: number; // Optional (nullable)

  /**
   * Type of the sample.
   */
  sampleType: SampleType;

  /**
   * Barcode on the label.
   */
  barcode: string;

  /**
   * Date and time the sample was taken.
   */
  taken?: Date; // Optional (nullable)

  /**
   * Constructor to initialize the SampleBase class.
   * @param sampleType - The type of the sample (e.g., blood, urine).
   * @param barcode - The barcode assigned to the sample.
   * @param taken - Date and time the sample was taken (optional).
   * @param id - The primary key in the LIS (optional).
   */
  constructor(
    sampleType: SampleType,
    barcode: string,
    taken?: Date,
    id?: number
  ) {
    this.sampleType = sampleType;
    this.barcode = barcode;
    this.taken = taken;
    this.id = id;
  }
}
