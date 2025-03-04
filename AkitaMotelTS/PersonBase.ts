/**
 * Abstract class for people.
 */
export abstract class PersonBase {
  /**
   * PK (Primary Key).
   */
  id?: number;

  /**
   * Given (first) name.
   */
  givenName: string = "";

  /**
   * Middle (second) name.
   */
  middleName?: string;

  /**
   * Family name (surname, last name).
   */
  familyName: string = "";

  /**
   * Constructor to initialize the PersonBase class.
   * @param givenName - Given (first) name.
   * @param familyName - Family name (surname, last name).
   * @param middleName - Middle (second) name (optional).
   * @param id - Primary key (optional).
   */
  constructor(
    givenName: string = "",
    familyName: string = "",
    middleName?: string,
    id?: number
  ) {
    this.givenName = givenName;
    this.familyName = familyName;
    this.middleName = middleName;
    this.id = id;
  }
}
