/**
 * Base class for items in the results or sale.
 */
export class ItemBase {
  /**
   * PK of the item in LIS iLab.
   */
  id: number;

  /**
   * FK of the product in LIS iLab (test or panel/profile).
   */
  productId?: number;

  /**
   * Name of the item.
   */
  name: string = "";

  /**
   * Rank of the item, use it for sorting.
   */
  rank: number;

  /**
   * Constructor to initialize the ItemBase class.
   * @param id - The unique identifier for the item.
   * @param name - The name of the item.
   * @param rank - The rank of the item, used for sorting.
   * @param productId - The optional product ID associated with the item.
   */
  constructor(id: number, name: string = "", rank: number, productId?: number) {
    this.id = id;
    this.name = name;
    this.rank = rank;
    this.productId = productId;
  }
}
