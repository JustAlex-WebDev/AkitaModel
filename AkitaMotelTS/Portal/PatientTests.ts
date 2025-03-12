import { Patient } from "../Patient";
import { TestSummary } from "./TestSummary";

/**
 * Represents a patient and their distinct test entries.
 */
export class PatientTests {
  /**
   * The patient associated with these tests.
   */
  patient: Patient;

  /**
   * The summaries of tests associated with the patient.
   */
  testSummaries: TestSummary[];

  /**
   * Constructor to initialize the PatientTests class.
   * @param patient - The patient associated with the tests.
   * @param testSummaries - A list of test summaries for the patient.
   */
  constructor(patient: Patient, testSummaries: TestSummary[]) {
    this.patient = patient;
    this.testSummaries = testSummaries;
  }
}
