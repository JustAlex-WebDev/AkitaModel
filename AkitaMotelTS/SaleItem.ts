/**
 * SaleItem represents an examination record, test, or panel with its results.
 */
export class SaleItem {
  /**
   * Primary Key of the item in LIS iLab.
   */
  id?: number;

  /**
   * Foreign Key to Visit.
   */
  saleId?: number;

  /**
   * Foreign Key to Profile/Panel.
   */
  profileId?: number;

  /**
   * Foreign Key to Test.
   */
  testId?: number;

  /**
   * Foreign Key to Department.
   */
  departmentId?: number;

  /**
   * Name of the department.
   */
  departmentName: string;

  /**
   * Sort order of the department.
   */
  departmentRank?: number;

  /**
   * Note for this sale item.
   */
  saleDepartmentNote?: string;

  /**
   * LOINC code for the test.
   */
  loincId: string;

  /**
   * Name of the test or panel.
   */
  name: string;

  /**
   * Sort order among other items.
   */
  rank?: number;

  /**
   * Result of the test as text.
   */
  result?: string;

  /**
   * Numeric result (optional).
   */
  numericResult?: number;

  /**
   * Flag based on reference range (1-7, 10, 11).
   * 1=ultra low, 2=very low, 3=low, 5=high, 6=very high, 7=ultra high, 10=star.
   * 4=no flag. Null means the flag is not calculated.
   */
  flag?: number;

  /**
   * Flag symbol, e.g., "↑", "↓↓", etc.
   */
  flagSymbol?: string;

  /**
   * Version of the record, updated with each change.
   */
  version?: number;

  /**
   * Measurement units for the result.
   */
  units?: string;

  /**
   * Reference range for this patient.
   */
  range?: string;

  /**
   * Ready/Pending flag.
   */
  isReady?: boolean;

  /**
   * Child items, applicable only to panels/profiles.
   */
  children?: SaleItem[];

  /**
   * Constructor to initialize SaleItem.
   * @param departmentName - Name of the department.
   * @param loincId - LOINC code for the test.
   * @param name - Name of the test or panel.
   * @param departmentRank - Sort order of the department (optional).
   * @param saleDepartmentNote - Note for this sale item (optional).
   * @param result - Result of the test as text (optional).
   * @param numericResult - Numeric result for the test (optional).
   * @param flag - Flag based on reference range (optional).
   * @param flagSymbol - Flag symbol, e.g., "↑", "↓↓", etc. (optional).
   * @param version - Version of the record (optional).
   * @param units - Measurement units for the result (optional).
   * @param range - Reference range for this patient (optional).
   * @param isReady - Ready/Pending flag (optional).
   * @param children - Child items for panels/profiles (optional).
   * @param id - Primary Key of the item in LIS iLab (optional).
   * @param saleId - Foreign Key to Visit (optional).
   * @param profileId - Foreign Key to Profile/Panel (optional).
   * @param testId - Foreign Key to Test (optional).
   * @param departmentId - Foreign Key to Department (optional).
   * @param rank - Sort order among other items (optional).
   */
  constructor(
    departmentName: string,
    loincId: string,
    name: string,
    departmentRank?: number,
    saleDepartmentNote?: string,
    result?: string,
    numericResult?: number,
    flag?: number,
    flagSymbol?: string,
    version?: number,
    units?: string,
    range?: string,
    isReady?: boolean,
    children?: SaleItem[],
    id?: number,
    saleId?: number,
    profileId?: number,
    testId?: number,
    departmentId?: number,
    rank?: number
  ) {
    this.departmentName = departmentName;
    this.loincId = loincId;
    this.name = name;
    this.departmentRank = departmentRank;
    this.saleDepartmentNote = saleDepartmentNote;
    this.result = result;
    this.numericResult = numericResult;
    this.flag = flag;
    this.flagSymbol = flagSymbol;
    this.version = version;
    this.units = units;
    this.range = range;
    this.isReady = isReady;
    this.children = children;
    this.id = id;
    this.saleId = saleId;
    this.profileId = profileId;
    this.testId = testId;
    this.departmentId = departmentId;
    this.rank = rank;
  }
}
