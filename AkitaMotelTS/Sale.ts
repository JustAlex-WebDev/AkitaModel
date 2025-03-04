import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import type { SaleItem } from "./SaleItem";
import type { Sample } from "./results/Sample";

/**
 * Sale, laboratory order.
 */
export class Sale {
  /**
   * PK in LIS iLab.
   */
  id?: number;

  /**
   * Reference to an external system.
   */
  externalId: string = "";

  /**
   * Date and time the sale was created.
   */
  registered?: Date;

  /**
   * Patient.
   */
  patient: Patient;

  /**
   * FK to sale schema.
   */
  schemaId?: number;

  /**
   * Sale schema name.
   */
  schemaName: string = "";

  /**
   * FK to location where registration was made.
   */
  locationId?: number;

  /**
   * Custom field #1.
   */
  field1: string = "";

  /**
   * Custom field #2.
   */
  field2: string = "";

  /**
   * Custom field #3.
   */
  field3: string = "";

  /**
   * Priority
   */
  isStat?: boolean;

  /**
   * Referring doctor.
   */
  doctor: Doctor;

  /**
   * Visit's examinations.
   */
  items: SaleItem[];

  /**
   * Samples to the visit.
   */
  samples: Sample[];

  /**
   * Name of first fund
   */
  fund1Name: string;

  /**
   * Name of second fund
   */
  fund2Name: string;

  // public notes?: Note[]; // Add Note class when necessary

  /**
   * Constructor to initialize the Sale class.
   * @param externalId - Reference to an external system.
   * @param patient - The patient associated with the sale.
   * @param schemaName - Name of the sale schema.
   * @param doctor - Referring doctor for the sale.
   * @param items - List of examinations for the visit.
   * @param samples - List of samples related to the visit.
   * @param fund1Name - Name of the first fund.
   * @param fund2Name - Name of the second fund.
   * @param id - PK in LIS iLab (optional).
   * @param registered - Date and time the sale was created (optional).
   * @param schemaId - FK to the sale schema (optional).
   * @param locationId - FK to location where registration was made (optional).
   * @param field1 - Custom field #1 (default is an empty string).
   * @param field2 - Custom field #2 (default is an empty string).
   * @param field3 - Custom field #3 (default is an empty string).
   * @param isStat - Priority (optional).
   */
  constructor(
    externalId: string = "",
    patient: Patient,
    schemaName: string = "",
    doctor: Doctor,
    items: SaleItem[],
    samples: Sample[],
    fund1Name: string,
    fund2Name: string,
    id?: number,
    registered?: Date,
    schemaId?: number,
    locationId?: number,
    field1: string = "",
    field2: string = "",
    field3: string = "",
    isStat?: boolean
  ) {
    this.externalId = externalId;
    this.patient = patient;
    this.schemaName = schemaName;
    this.doctor = doctor;
    this.items = items;
    this.samples = samples;
    this.fund1Name = fund1Name;
    this.fund2Name = fund2Name;
    this.id = id;
    this.registered = registered;
    this.schemaId = schemaId;
    this.locationId = locationId;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = field3;
    this.isStat = isStat;
  }
}
