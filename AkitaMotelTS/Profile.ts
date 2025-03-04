import type { ProfileItem } from "./ProfileItem";

/**
 * Represents a set of tests in LIS database.
 */
export class Profile {
  /**
   * Profile ID in LIS Database.
   */
  id: number;

  /**
   * Name of the profile.
   */
  name: string;

  /**
   * Long name of the profile.
   */
  longName: string;

  /**
   * Department ID.
   */
  departmentId: number;

  /**
   * Rank of the profile.
   */
  rank: number;

  /**
   * Global rank of the profile.
   */
  rankGlobal: number;

  /**
   * LOINC code associated with the profile.
   */
  loincCode: string;

  /**
   * Whether the profile is active.
   */
  isActive: boolean;

  /**
   * The last modified date and time of the profile.
   */
  lastModified: Date;

  /**
   * List of profile items.
   */
  items: ProfileItem[];

  /**
   * Constructor to initialize the Profile class.
   * @param id - Profile ID in LIS Database.
   * @param name - Name of the profile.
   * @param longName - Long name of the profile.
   * @param departmentId - Department ID.
   * @param rank - Rank of the profile.
   * @param rankGlobal - Global rank of the profile.
   * @param loincCode - LOINC code.
   * @param isActive - Whether the profile is active.
   * @param lastModified - Last modified date and time of the profile.
   * @param items - List of profile items.
   */
  constructor(
    id: number,
    name: string,
    longName: string,
    departmentId: number,
    rank: number,
    rankGlobal: number,
    loincCode: string,
    isActive: boolean,
    lastModified: Date,
    items: ProfileItem[]
  ) {
    this.id = id;
    this.name = name;
    this.longName = longName;
    this.departmentId = departmentId;
    this.rank = rank;
    this.rankGlobal = rankGlobal;
    this.loincCode = loincCode;
    this.isActive = isActive;
    this.lastModified = lastModified;
    this.items = items;
  }
}
