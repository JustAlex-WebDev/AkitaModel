/**
 * Medical speciality of a doctor, e.g. General practitioner, Surgeon, etc.
 */
export class Speciality {
  /**
   * PK in LIS iLab.
   */
  id?: number;

  /**
   * Name of the speciality, e.g. "Surgeon".
   */
  name: string;

  /**
   * Constructor to initialize the Speciality class.
   * @param name - Name of the speciality.
   * @param id - Optional PK for the speciality.
   */
  constructor(name: string, id?: number) {
    this.name = name;
    this.id = id;
  }
}
