import { ItemBase } from "./ItemBase";

/**
 * Base class for Panel and Test.
 */
export class ExaminationBase extends ItemBase {
  /**
   * If the examination is a panel, this property will be true.
   */
  isPanel: boolean;

  /**
   * Constructor to initialize the ExaminationBase class.
   * @param id - The unique identifier for the examination.
   * @param name - The name of the examination.
   * @param rank - The rank of the examination, used for sorting purposes.
   * @param isPanel - Indicates whether the examination is a panel.
   * @param productId - The optional product ID associated with the examination.
   */
  constructor(
    id: number,
    name: string,
    rank: number,
    isPanel: boolean,
    productId?: number
  ) {
    // Call the constructor of the base class with required arguments
    super(id, name, rank, productId);

    this.isPanel = isPanel;
  }
}
