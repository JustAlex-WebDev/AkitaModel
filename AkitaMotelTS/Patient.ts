import { PersonBase } from "./PersonBase";

/**
 * Patient.
 */
export class Patient extends PersonBase {
  /**
   * Patient's identifier descriptor.
   */
  pidTypeId?: number;

  /**
   * Name of the identifier.
   */
  pidTypeIdName: string = "";

  /**
   * Patient's identifier is unique.
   */
  pidTypeIdIsIdentity: boolean = true;

  /**
   * Well-known identifier, e.g. SSN, EGN, etc.
   */
  patientId: string;

  /**
   * Gender indicator.
   */
  isMale?: boolean;

  /**
   * Id of a species of the patient. Default (null) means human.
   */
  speciesId?: number;

  /**
   * Name of a species of the patient (human, cat, dog, etc.).
   */
  speciesIdName: string;

  /**
   * Date of birth.
   */
  dateOfBirth?: Date;

  /**
   * Indicator whether date of birth is approximate or exact.
   */
  isDobApprox?: boolean;

  /**
   * Constructor to initialize the Patient class.
   * @param givenName - Given (first) name.
   * @param familyName - Family name (surname, last name).
   * @param pidTypeIdName - Name of the identifier.
   * @param pidTypeIdIsIdentity - Whether the identifier is unique.
   * @param patientId - Well-known identifier (SSN, EGN, etc.).
   * @param speciesIdName - Name of the species (e.g., human, cat, dog).
   * @param isMale - Gender indicator (optional).
   * @param speciesId - Species ID (optional).
   * @param dateOfBirth - Date of birth (optional).
   * @param isDobApprox - Whether the date of birth is approximate (optional).
   * @param middleName - Middle name (optional).
   * @param id - Primary key (optional).
   */
  constructor(
    givenName: string,
    familyName: string,
    pidTypeIdName: string = "",
    pidTypeIdIsIdentity: boolean = true,
    patientId: string,
    speciesIdName: string,
    isMale?: boolean,
    speciesId?: number,
    dateOfBirth?: Date,
    isDobApprox?: boolean,
    middleName?: string,
    id?: number
  ) {
    super(givenName, familyName, middleName, id);
    this.pidTypeIdName = pidTypeIdName;
    this.pidTypeIdIsIdentity = pidTypeIdIsIdentity;
    this.patientId = patientId;
    this.speciesIdName = speciesIdName;
    this.isMale = isMale;
    this.speciesId = speciesId;
    this.dateOfBirth = dateOfBirth;
    this.isDobApprox = isDobApprox;
  }
}
