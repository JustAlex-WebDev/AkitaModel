import type { Test } from "../Test";
import { TestResult } from "./TestResult";

/**
 * Entry of the patient's file.
 */
export class TestSummary {
  /**
   * The test this summary is for.
   */
  test: Test;

  /**
   * Total number of test results over time.
   */
  numberOfResults: number;

  /**
   * The latest test result.
   */
  lastResult: TestResult;

  /**
   * Constructor to initialize the TestSummary class.
   * @param test - The test this summary pertains to.
   * @param numberOfResults - The total number of results recorded for this test over time.
   * @param lastResult - The latest test result available for this test.
   */
  constructor(test: Test, numberOfResults: number, lastResult: TestResult) {
    this.test = test;
    this.numberOfResults = numberOfResults;
    this.lastResult = lastResult;
  }
}
