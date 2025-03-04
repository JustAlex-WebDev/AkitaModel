/**
 * Represents an item in a profile.
 */
export class ProfileItem {
  /**
   * Test ID associated with the profile item.
   */
  testId: number;

  /**
   * Profile ID to which the item belongs.
   */
  profileId: number;

  /**
   * Whether the profile item is optional.
   */
  isOptional: boolean;

  /**
   * Whether the profile item is added by default.
   */
  addByDefault: boolean;

  /**
   * Constructor to initialize the ProfileItem class.
   * @param testId - Test ID associated with the profile item.
   * @param profileId - Profile ID to which the item belongs.
   * @param isOptional - Whether the profile item is optional.
   * @param addByDefault - Whether the profile item is added by default.
   */
  constructor(
    testId: number,
    profileId: number,
    isOptional: boolean,
    addByDefault: boolean
  ) {
    this.testId = testId;
    this.profileId = profileId;
    this.isOptional = isOptional;
    this.addByDefault = addByDefault;
  }
}
