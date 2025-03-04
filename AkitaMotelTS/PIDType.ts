/**
 * Represents a type of PID (Personal Identifier) used for identification purposes.
 */
export class PIDType {
  /**
   * The unique identifier for the PID type.
   */
  id: number;

  /**
   * Whether the PID type encodes the date of birth (DOB).
   */
  encodesDob: boolean;

  /**
   * Whether the PID type encodes the sex (gender).
   */
  encodesSex: boolean;

  /**
   * The country code associated with the PID type.
   */
  countryCode: string;

  /**
   * The name of the PID type.
   */
  name: string;

  /**
   * Whether the PID type represents an identity.
   */
  isIdentity: boolean;

  /**
   * A fixed species identifier associated with the PID type.
   */
  fixedSpecies: number;

  /**
   * The minimum length of the PID.
   */
  minIdLen: number;

  /**
   * The maximum length of the PID.
   */
  maxIdLen: number;

  /**
   * Whether the PID type only consists of numeric characters.
   */
  isNumOnly: boolean;

  /**
   * Whether the PID type is currently active.
   */
  isActive: boolean;

  /**
   * Constructor to initialize the PIDType class.
   * @param id - The unique identifier for the PID type.
   * @param encodesDob - Whether the PID encodes the date of birth.
   * @param encodesSex - Whether the PID encodes the sex (gender).
   * @param countryCode - The country code associated with the PID type.
   * @param name - The name of the PID type.
   * @param isIdentity - Whether the PID type represents an identity.
   * @param fixedSpecies - A fixed species identifier for the PID type.
   * @param minIdLen - The minimum length of the PID.
   * @param maxIdLen - The maximum length of the PID.
   * @param isNumOnly - Whether the PID is numeric-only.
   * @param isActive - Whether the PID type is active.
   */
  constructor(
    id: number,
    encodesDob: boolean,
    encodesSex: boolean,
    countryCode: string,
    name: string,
    isIdentity: boolean,
    fixedSpecies: number,
    minIdLen: number,
    maxIdLen: number,
    isNumOnly: boolean,
    isActive: boolean
  ) {
    this.id = id;
    this.encodesDob = encodesDob;
    this.encodesSex = encodesSex;
    this.countryCode = countryCode;
    this.name = name;
    this.isIdentity = isIdentity;
    this.fixedSpecies = fixedSpecies;
    this.minIdLen = minIdLen;
    this.maxIdLen = maxIdLen;
    this.isNumOnly = isNumOnly;
    this.isActive = isActive;
  }
}
