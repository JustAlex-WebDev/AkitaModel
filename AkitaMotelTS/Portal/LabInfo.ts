/**
 * Represents information about a laboratory.
 */
export class LabInfo {
  /**
   * Brand of the laboratory, e.g., "Precisio".
   */
  brand: string = "";

  /**
   * Short name of the laboratory, e.g., "Precisio Laboratory".
   */
  shortName: string = "";

  /**
   * Full name of the laboratory, e.g., "Precisio Laboratory, Inc.".
   */
  fullName: string = "";

  /**
   * License number of the laboratory.
   */
  licenseNumber: string = "";

  /**
   * Constructor to initialize the LabInfo class.
   * @param brand - The brand of the laboratory.
   * @param shortName - The short name of the laboratory.
   * @param fullName - The full name of the laboratory.
   * @param licenseNumber - The license number of the laboratory.
   */
  constructor(
    brand: string = "",
    shortName: string = "",
    fullName: string = "",
    licenseNumber: string = ""
  ) {
    this.brand = brand;
    this.shortName = shortName;
    this.fullName = fullName;
    this.licenseNumber = licenseNumber;
  }
}
