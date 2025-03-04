import { SampleBase } from "../SampleBase";
import type { SampleType } from "../SampleType";

/**
 * Represents a sample, extending the base Sample class.
 */
export class Sample extends SampleBase {
  /**
   * Constructor to initialize the Sample class.
   * @param sampleType - The type of the sample.
   * @param barcode - The barcode of the sample.
   * @param taken - The optional date/time the sample was taken.
   * @param id - The optional unique identifier for the sample.
   */
  constructor(
    sampleType: SampleType,
    barcode: string,
    taken?: Date,
    id?: number
  ) {
    // Call the constructor of the base class (SampleBase)
    super(sampleType, barcode, taken, id);
  }
}
