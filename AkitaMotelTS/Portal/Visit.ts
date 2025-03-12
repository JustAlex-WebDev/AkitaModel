import type { Patient } from "../Patient";
import { VisitBase } from "../VisitBase";

/**
 * Represents a patient visit.
 * This class is intended for use in lists, tables, or similar scenarios.
 */
export class Visit extends VisitBase {
  /**
   * Total number of ordered tests.
   */
  totalTests: number;

  /**
   * Number of completed tests.
   */
  readyTests: number;

  /**
   * Number of flagged tests.
   * This value only counts already flagged tests and does not include tests that could be flagged on the fly.
   */
  flaggedTests: number;

  /**
   * Constructor to initialize the Visit class.
   * @param id - The unique identifier for the visit.
   * @param date - The date of the visit.
   * @param patient - The patient associated with the visit.
   * @param totalTests - The total number of tests ordered for this visit.
   * @param readyTests - The number of tests that are completed.
   * @param flaggedTests - The number of flagged tests, only including those that have been explicitly flagged.
   */
  constructor(
    id: number,
    date: Date,
    patient: Patient,
    totalTests: number,
    readyTests: number,
    flaggedTests: number
  ) {
    // Call the constructor of the base class
    super(id, date, patient);

    this.totalTests = totalTests;
    this.readyTests = readyTests;
    this.flaggedTests = flaggedTests;
  }

  /**
   * Percent of completed tests.
   * @returns The percentage of tests that have been completed, based on the ratio of ready tests to total tests.
   */
  get percentReady(): number {
    return this.totalTests === 0
      ? 100
      : Math.floor((this.readyTests / this.totalTests) * 100);
  }

  /**
   * Degree of readiness from 0 (none) to 5 (complete).
   * @returns A number between 0 and 5 indicating the degree of readiness, calculated based on the ratio of ready tests to total tests.
   */
  get degreeOfReadiness5(): number {
    return this.totalTests === 0
      ? 5
      : Math.min(5, Math.floor((this.readyTests / this.totalTests) * 5));
  }

  /**
   * Degree of readiness from 0 (none) to 8 (complete).
   * @returns A number between 0 and 8 indicating the degree of readiness, calculated based on the ratio of ready tests to total tests.
   */
  get degreeOfReadiness8(): number {
    return this.totalTests === 0
      ? 8
      : Math.min(8, Math.floor((this.readyTests / this.totalTests) * 8));
  }
}
