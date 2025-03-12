import { Patient } from "../Patient";
import { Test } from "../results/Test";
import { TestResult } from "./TestResult";

/**
 * Represents test results over time for a given patient.
 */
export class TestHistory {
  /**
   * The patient associated with the test history.
   */
  patient: Patient;

  /**
   * The test this history is associated with.
   */
  test: Test;

  /**
   * The results of the test.
   */
  results: TestResult[];

  /**
   * Constructor to initialize the TestHistory class.
   * @param patient - The patient associated with this test history.
   * @param test - The test for which history is being tracked.
   * @param results - The results of the test over time.
   */
  constructor(patient: Patient, test: Test, results: TestResult[]) {
    this.patient = patient;
    this.test = test;
    this.results = results;
  }
}
