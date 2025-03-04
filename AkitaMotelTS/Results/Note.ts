import { NoteBase } from "../NoteBase";
import { NoteLevels } from "./NoteLevels";

/**
 * Represents a note that may appear at visit or department level.
 */
export class Note extends NoteBase {
  /**
   * Level of importance of the note.
   */
  level: NoteLevels = NoteLevels.Info;

  /**
   * True if the note can be dismissed by the user.
   */
  isDismissible: boolean = false;

  /**
   * Constructor to initialize the Note class.
   * @param text - The content of the note.
   * @param level - The level of importance of the note (e.g., Info, Warning, Error).
   * @param isDismissible - Indicates if the note can be dismissed by the user.
   * @param id - The optional unique identifier of the note.
   */
  constructor(
    text: string,
    level: NoteLevels = NoteLevels.Info,
    isDismissible: boolean = false,
    id?: number
  ) {
    // Call the constructor of the base class (NoteBase)
    super(text, id);

    this.level = level;
    this.isDismissible = isDismissible;
  }
}
