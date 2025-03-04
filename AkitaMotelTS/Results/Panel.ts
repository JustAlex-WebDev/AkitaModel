import { ExaminationBase } from "./ExaminationBase";
import { Test } from "./Test";

/**
 * Represents a panel of tests (Profile).
 */
export class Panel extends ExaminationBase {
  /**
   * If the examination is a panel, this property will be true.
   */
  override isPanel: boolean = true;

  /**
   * Test items that are part of the panel.
   */
  tests: Test[];

  /**
   * Constructor to initialize the Panel class.
   * @param tests - The list of test items that are part of the panel.
   * @param id - The unique identifier for the panel.
   * @param name - The name of the panel.
   * @param rank - The rank of the panel, used for sorting.
   * @param productId - The optional product ID associated with the panel.
   */
  constructor(
    tests: Test[],
    id: number,
    name: string,
    rank: number,
    productId?: number
  ) {
    // Call the constructor of the base class (ExaminationBase)
    super(id, name, rank, true, productId);

    this.tests = tests;
  }
}
