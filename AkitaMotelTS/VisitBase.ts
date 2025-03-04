import type { Patient } from "./Patient";

/**
 * Base structure for a visit.
 */
export class VisitBase {
  /**
   * PK in LIS iLab.
   */
  id: number;

  /**
   * Date/time the visit was created.
   */
  date: Date;

  /**
   * Visiting patient.
   */
  patient: Patient;

  /**
   * Constructor to initialize the VisitBase.
   * @param id - Primary key of the visit.
   * @param date - Date/time the visit was created.
   * @param patient - Visiting patient.
   */
  constructor(id: number, date: Date, patient: Patient) {
    this.id = id;
    this.date = date;
    this.patient = patient;
  }
}
