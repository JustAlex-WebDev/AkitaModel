/**
 * Represents a department, which is a group of tests (analyzes) and panels/profiles.
 */
export class Department {
  /**
   * Primary key of the department.
   */
  id: number;

  /**
   * Name of the department.
   */
  name: string;

  /**
   * Label to be shown on results report for items in this department.
   */
  rangeText: string;

  /**
   * Sorting value used for ranking the department.
   */
  rank: number;

  /**
   * Constructor to initialize the Department class.
   * @param id - The unique identifier for the department.
   * @param name - The name of the department.
   * @param rangeText - The label to be shown on the results report for items in this department.
   * @param rank - The sorting value used for ranking the department.
   */
  constructor(id: number, name: string, rangeText: string, rank: number) {
    this.id = id;
    this.name = name;
    this.rangeText = rangeText;
    this.rank = rank;
  }
}
