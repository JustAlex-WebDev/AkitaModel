import { Product } from "./Product";

export class Schema {
  /**
   * Unique identifier for the schema.
   */
  id: number;

  /**
   * Name of the schema.
   */
  name: string;

  /**
   * Indicates whether the schema has a doctor associated with it.
   */
  hasDoctor: boolean;

  /**
   * Indicates whether the schema has a first fund associated with it.
   */
  hasFund1: boolean;

  /**
   * The ID of the first fund associated with the schema, if applicable.
   */
  fund1Id?: number;

  // The actual fund1 object is commented out, assuming it may be implemented elsewhere.
  // public fund1: Fund;

  /**
   * Indicates whether the schema has a second fund associated with it.
   */
  hasFund2: boolean;

  /**
   * The ID of the second fund associated with the schema, if applicable.
   */
  fund2Id?: number;

  // The actual fund2 object is commented out, assuming it may be implemented elsewhere.
  // public fund2: Fund;

  /**
   * Custom field 1 associated with the schema.
   */
  field1: string;

  /**
   * Custom field 2 associated with the schema.
   */
  field2: string;

  /**
   * Custom field 3 associated with the schema.
   */
  field3: string;

  /**
   * Indicates whether the schema is active or not.
   */
  isActive: boolean;

  /**
   * The ID of the sale type associated with the schema, if applicable.
   */
  saleTypeId?: number;

  /**
   * Collection of products associated with the schema.
   */
  items: Product[];

  // The enabled funds and patient ID types are commented out, assuming they may be implemented elsewhere.
  // public enabledFunds: Fund[];
  // public enabledPidTypes: PatientIdType[];

  /**
   * Constructor to initialize the Schema object.
   * @param id - The unique identifier for the schema.
   * @param name - The name of the schema.
   * @param hasDoctor - A flag indicating if a doctor is associated with the schema.
   * @param hasFund1 - A flag indicating if the schema has a first fund associated with it.
   * @param hasFund2 - A flag indicating if the schema has a second fund associated with it.
   * @param field1 - Custom field 1 associated with the schema.
   * @param field2 - Custom field 2 associated with the schema.
   * @param field3 - Custom field 3 associated with the schema.
   * @param isActive - A flag indicating if the schema is active or not.
   * @param items - A collection of products associated with the schema.
   * @param fund1Id - The ID of the first fund associated with the schema (optional).
   * @param fund2Id - The ID of the second fund associated with the schema (optional).
   * @param saleTypeId - The ID of the sale type associated with the schema (optional).
   */
  constructor(
    id: number,
    name: string,
    hasDoctor: boolean,
    hasFund1: boolean,
    hasFund2: boolean,
    field1: string,
    field2: string,
    field3: string,
    isActive: boolean,
    items: Product[],
    fund1Id?: number,
    fund2Id?: number,
    saleTypeId?: number
  ) {
    this.id = id;
    this.name = name;
    this.hasDoctor = hasDoctor;
    this.hasFund1 = hasFund1;
    this.hasFund2 = hasFund2;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = field3;
    this.isActive = isActive;
    this.items = items;
    this.fund1Id = fund1Id;
    this.fund2Id = fund2Id;
    this.saleTypeId = saleTypeId;
  }
}
