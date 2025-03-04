/**
 * Price list entry.
 */
export class Product {
  /**
   * Product ID.
   */
  id: number;

  /**
   * Department ID.
   */
  departmentId: number;

  /**
   * Product rank (optional).
   */
  rank?: number;

  /**
   * Test ID (optional).
   */
  testId?: number;

  /**
   * Profile ID (optional).
   */
  profileId?: number;

  /**
   * LOINC code.
   */
  loincCode: string;

  /**
   * Name of the product.
   */
  name: string;

  /**
   * Price of the product.
   */
  price: number;

  /**
   * Price description or text.
   */
  priceText: string;

  /**
   * Constructor to initialize the Product class.
   * @param id - Product ID.
   * @param departmentId - Department ID.
   * @param rank - Product rank (optional).
   * @param testId - Test ID (optional).
   * @param profileId - Profile ID (optional).
   * @param loincCode - LOINC code.
   * @param name - Name of the product.
   * @param price - Price of the product.
   * @param priceText - Price description or text.
   */
  constructor(
    id: number,
    departmentId: number,
    loincCode: string,
    name: string,
    price: number,
    priceText: string,
    rank?: number,
    testId?: number,
    profileId?: number
  ) {
    this.id = id;
    this.departmentId = departmentId;
    this.loincCode = loincCode;
    this.name = name;
    this.price = price;
    this.priceText = priceText;
    this.rank = rank;
    this.testId = testId;
    this.profileId = profileId;
  }
}
