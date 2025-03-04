/**
 * Sample type, e.g. Serum, Whole blood, Stool, etc.
 */
export class SampleType {
  /**
   * PK in LIS iLab.
   */
  id?: number; // Optional (nullable)

  /**
   * Name of the sample type, e.g. "Serum", "Whole blood", "Stool", etc.
   */
  name: string;

  /**
   * Short code, used across the laboratory, e.g. "Serum", "WB", etc.<br/>
   * This is the code that usually is printed on sample tubes.
   */
  code: string;

  /**
   * Red component of the sample color code (optional).
   */
  colorR?: number;

  /**
   * Green component of the sample color code (optional).
   */
  colorG?: number;

  /**
   * Blue component of the sample color code (optional).
   */
  colorB?: number;

  /**
   * Material code, e.g. "WB" (Whole Blood in HL7 table 0487).<br/>
   * See <see href="http://terminology.hl7.org/CodeSystem/v2-0487"/>.
   */
  typeCode: string;

  /**
   * Sample additive/preservative code, e.g. "EDTK" (Potassium/K EDTA in HL7 table 0371).<br/>
   * See <see href="http://terminology.hl7.org/CodeSystem/v2-0371"/>.
   */
  additiveCode: string;

  /**
   * Specimen source code, e.g. "BLDV" (Blood venous in HL7 table 0070).<br/>
   * See <see href="https://terminology.hl7.org/4.0.0/CodeSystem-v2-0070.html"/>.
   */
  specimenSourceCode: string;

  /**
   * Constructor to initialize the SampleType class.
   * @param name - The name of the sample type (e.g., "Serum").
   * @param code - The short code for the sample type (e.g., "WB").
   * @param typeCode - The material code for the sample (e.g., "WB" for Whole Blood).
   * @param additiveCode - The additive or preservative code used in the sample (e.g., "EDTK").
   * @param specimenSourceCode - The code representing the specimen source (e.g., "BLDV" for blood venous).
   * @param colorR - The red component of the color code (optional).
   * @param colorG - The green component of the color code (optional).
   * @param colorB - The blue component of the color code (optional).
   * @param id - The primary key in LIS iLab (optional).
   */
  constructor(
    name: string,
    code: string,
    typeCode: string,
    additiveCode: string,
    specimenSourceCode: string,
    colorR?: number,
    colorG?: number,
    colorB?: number,
    id?: number
  ) {
    this.name = name;
    this.code = code;
    this.typeCode = typeCode;
    this.additiveCode = additiveCode;
    this.specimenSourceCode = specimenSourceCode;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.id = id;
  }
}
