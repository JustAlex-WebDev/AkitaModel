/**
 * Represents a footnote.
 */
export class Footnote {
  /**
   * Unique Identification Number.
   */
  id: number;

  /**
   * Label.
   */
  label: string;

  /**
   * Footnote text.
   */
  text: string;

  /**
   * Sequence number.
   */
  sequenceNumber: number;

  /**
   * Constructor to initialize the Footnote.
   * @param id - Unique Identification Number.
   * @param label - Label for the footnote.
   * @param text - The actual text of the footnote.
   * @param sequenceNumber - Sequence number for ordering footnotes.
   */
  constructor(id: number, label: string, text: string, sequenceNumber: number) {
    this.id = id;
    this.label = label;
    this.text = text;
    this.sequenceNumber = sequenceNumber;
  }
}
