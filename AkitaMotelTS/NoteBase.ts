/**
 * Base structure for notes.
 */
export class NoteBase {
  /**
   * PK in LIS iLab.
   */
  id?: number;

  /**
   * Text of the note.
   */
  text: string = "";

  /**
   * Constructor to initialize the NoteBase class.
   * @param text - The content or message of the note.
   * @param id - The unique identifier for the note (optional).
   */
  constructor(text: string = "", id?: number) {
    this.text = text;
    this.id = id;
  }
}
