import { ItemBase } from "./ItemBase";

/**
 * Represents an orderable/payable product in Sale.
 */
export class Product extends ItemBase {
  /**
   * Price of the product, payable by the patient.
   */
  price: number;

  /**
   * Constructor to initialize the Product class.
   * @param id - The unique identifier for the product.
   * @param name - The name of the product.
   * @param rank - The rank of the product, used for sorting.
   * @param Price - The price of the product, payable by the patient.
   * @param productId - The optional product ID associated with the item.
   */
  constructor(
    id: number,
    name: string,
    rank: number,
    Price: number,
    productId?: number
  ) {
    // Call the constructor of the base class (ItemBase)
    super(id, name, rank, productId);

    this.price = Price;
  }
}
