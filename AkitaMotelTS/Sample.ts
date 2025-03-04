import { SampleBase } from "./SampleBase";
import type { SampleType } from "./SampleType";

/**
 * Sample to be examined.
 */
export class Sample extends SampleBase {
  /**
   * FK to other sample, in case of aliquot or otherwise sample derivative.
   * Specifies the parent sample if this is an aliquot or derived sample.
   */
  parentId?: number; // Optional (nullable)

  /**
   * FK to Sale/Visit.
   * Reference to the sale or visit that this sample is associated with.
   */
  saleId?: number; // Optional (nullable)

  /**
   * FK to Location where sample is located currently.
   * Specifies the location where the sample is currently stored.
   */
  currentLocationId?: number; // Optional (nullable)

  /**
   * List of codes printed on sample label, e.g. "BC->MIC->RET".
   * List of processing points associated with the sample, to be printed on its label.
   */
  processingPoints: string; // Required

  /**
   * Constructor to initialize the Sample class.
   * @param sampleType - The type of the sample (e.g., blood, urine).
   * @param barcode - The barcode assigned to the sample.
   * @param processingPoints - List of processing points for the sample.
   * @param parentId - The primary key of the parent sample (optional).
   * @param saleId - The primary key of the sale or visit (optional).
   * @param currentLocationId - The current location of the sample (optional).
   * @param taken - Date and time when the sample was taken (optional).
   * @param id - The primary key in the LIS (optional).
   */
  constructor(
    sampleType: SampleType,
    barcode: string,
    processingPoints: string,
    parentId?: number,
    saleId?: number,
    currentLocationId?: number,
    taken?: Date,
    id?: number
  ) {
    super(sampleType, barcode, taken, id);
    this.processingPoints = processingPoints;
    this.parentId = parentId;
    this.saleId = saleId;
    this.currentLocationId = currentLocationId;
  }
}
