import { ExaminationBase } from "./ExaminationBase";
import { Note } from "./Note";

/**
 * Wrapper class of examination results that follows structure of the printout.
 */
export class DepartmentResults {
  /**
   * PK of the Department in LIS iLab.
   */
  departmentId: number;

  /**
   * Name of the department.
   */
  departmentName: string = "";

  /**
   * Rank of the department, use it for sorting.
   */
  rank: number;

  /**
   * Label for the reference range column for this department.
   */
  rangeLabel: string;

  /**
   * Department-level note.
   */
  note: Note;

  /**
   * List of examination results.
   */
  results: ExaminationBase[];

  /**
   * Constructor to initialize the DepartmentResults class.
   * @param departmentId - The unique identifier for the department.
   * @param departmentName - The name of the department.
   * @param rank - The rank of the department, used for sorting purposes.
   * @param rangeLabel - The label for the reference range column.
   * @param note - The department-level note.
   * @param results - The list of examination results associated with the department.
   */
  constructor(
    departmentId: number,
    departmentName: string = "",
    rank: number,
    rangeLabel: string,
    note: Note,
    results: ExaminationBase[]
  ) {
    this.departmentId = departmentId;
    this.departmentName = departmentName;
    this.rank = rank;
    this.rangeLabel = rangeLabel;
    this.note = note;
    this.results = results;
  }
}
