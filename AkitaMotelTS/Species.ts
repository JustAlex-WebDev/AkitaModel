/**
 * Species, e.g. Human, Dog, Cat, etc.
 */
export class Species {
  /**
   * Primary key. Value 1 is reserved for "Human".
   */
  id: number;

  /**
   * Name of the species, e.g. "Human".
   */
  name: string;

  /**
   * Constructor to initialize the Species class.
   * @param id - Primary key for the species.
   * @param name - Name of the species.
   */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
