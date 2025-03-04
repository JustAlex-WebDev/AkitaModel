import { Footnote } from "../Footnote";
import type { Patient } from "../Patient";
import { VisitBase } from "../VisitBase";
import { DepartmentResults } from "./DepartmentResults";
import { Note } from "./Note";
import { Sample } from "./Sample";

/**
 * Represents a Visit view with structure for results reporting.
 */
export class VisitResults extends VisitBase {
  /**
   * List of visit-level notes and announcements.
   */
  notes: Note[];

  /**
   * List of departments with results.
   */
  departmentResults: DepartmentResults[];

  /**
   * List of samples used in examinations.
   */
  samples: Sample[];

  /**
   * Footnotes list.
   */
  footnotes: Footnote[];

  /**
   * Constructor to initialize the VisitResults class.
   * @param id - The unique identifier for the visit.
   * @param date - The date and time of the visit.
   * @param patient - The patient associated with the visit.
   * @param notes - The list of notes and announcements for the visit.
   * @param departmentResults - The list of departments with results for the visit.
   * @param samples - The list of samples collected during the visit.
   * @param footnotes - The list of footnotes related to the visit.
   */
  constructor(
    id: number,
    date: Date,
    patient: Patient,
    notes: Note[],
    departmentResults: DepartmentResults[],
    samples: Sample[],
    footnotes: Footnote[]
  ) {
    // Call the constructor of the base class (VisitBase)
    super(id, date, patient);

    this.notes = notes;
    this.departmentResults = departmentResults;
    this.samples = samples;
    this.footnotes = footnotes;
  }
}
