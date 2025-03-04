import { PersonBase } from "./PersonBase";
import type { Speciality } from "./Speciality";

export class Doctor extends PersonBase {
  /**
   * Unique Identification Number. Provided by healthcare authorities, jurisdiction dependent.
   */
  uin: string;

  /**
   * Title, e.g. "Dr.", "Prof.", etc.
   */
  title: string;

  /**
   * Speciality of the doctor.
   */
  speciality: Speciality;

  /**
   * Region of the doctor.
   */
  region: string;

  /**
   * City where the doctor practices.
   */
  city: string;

  /**
   * Postal code of the doctor's address.
   */
  postalCode: string;

  /**
   * Business address, usually same as practice address.
   */
  postAddress: string;

  /**
   * Doctor's information (last name, title, first name, speciality name and job place).
   */
  displayName: string;

  /**
   * Constructor to initialize the Doctor class.
   * @param uin - Unique Identification Number.
   * @param title - Title of the doctor (e.g. "Dr.", "Prof.", etc.).
   * @param speciality - Speciality of the doctor.
   * @param region - Region where the doctor practices.
   * @param city - City where the doctor practices.
   * @param postalCode - Postal code of the doctor's address.
   * @param postAddress - Business address, usually the same as practice address.
   * @param displayName - Doctor's information (last name, title, first name, speciality name, and job place).
   * @param givenName - Given (first) name (inherited from PersonBase).
   * @param familyName - Family name (surname, last name) (inherited from PersonBase).
   * @param middleName - Middle (second) name (optional, inherited from PersonBase).
   * @param id - Primary key (optional, inherited from PersonBase).
   */
  constructor(
    uin: string,
    title: string,
    speciality: Speciality,
    region: string,
    city: string,
    postalCode: string,
    postAddress: string,
    displayName: string,
    givenName: string,
    familyName: string,
    middleName?: string,
    id?: number
  ) {
    super(givenName, familyName, middleName, id);
    this.uin = uin;
    this.title = title;
    this.speciality = speciality;
    this.region = region;
    this.city = city;
    this.postalCode = postalCode;
    this.postAddress = postAddress;
    this.displayName = displayName;
  }
}
