/**
 * Describes test decimal values and their alarms for specific gender or both of them.
 */
export class ReferenceRange {
  /**
   * Primary Key in DB.
   */
  id?: number;

  /**
   * Species discriminator, e.g. 1=human.
   */
  speciesId: number = 1;

  /**
   * Number of days.
   */
  ageFrom: number = Math.round(
    (new Date().getTime() - Date.UTC(0, 0, 0)) / (1000 * 3600 * 24)
  ); // Convert age to number of days

  /**
   * When true, range is determined by the gender of the patient.
   */
  isRangedByGender: boolean = false;

  // Both genders
  lowValue?: number;
  highValue?: number;
  lowAlarm1?: number;
  highAlarm1?: number;
  lowAlarm2?: number;
  highAlarm2?: number;
  absoluteMin?: number;
  absoluteMax?: number;

  // Male
  mLowValue?: number;
  mHighValue?: number;
  mLowAlarm1?: number;
  mHighAlarm1?: number;
  mLowAlarm2?: number;
  mHighAlarm2?: number;
  mAbsoluteMin?: number;
  mAbsoluteMax?: number;

  // Female
  fLowValue?: number;
  fHighValue?: number;
  fLowAlarm1?: number;
  fHighAlarm1?: number;
  fLowAlarm2?: number;
  fHighAlarm2?: number;
  fAbsoluteMin?: number;
  fAbsoluteMax?: number;

  /**
   * Constructor to initialize the ReferenceRange class.
   * @param speciesId - Species discriminator (default 1).
   * @param ageFrom - Age from (in days).
   * @param isRangedByGender - Whether the range is determined by gender.
   * @param other parameters for both genders, male, and female values.
   */
  constructor(
    speciesId: number = 1,
    ageFrom: number = Math.round(
      (new Date().getTime() - Date.UTC(0, 0, 0)) / (1000 * 3600 * 24)
    ),
    isRangedByGender: boolean = false,
    lowValue?: number,
    highValue?: number,
    lowAlarm1?: number,
    highAlarm1?: number,
    lowAlarm2?: number,
    highAlarm2?: number,
    absoluteMin?: number,
    absoluteMax?: number,
    mLowValue?: number,
    mHighValue?: number,
    mLowAlarm1?: number,
    mHighAlarm1?: number,
    mLowAlarm2?: number,
    mHighAlarm2?: number,
    mAbsoluteMin?: number,
    mAbsoluteMax?: number,
    fLowValue?: number,
    fHighValue?: number,
    fLowAlarm1?: number,
    fHighAlarm1?: number,
    fLowAlarm2?: number,
    fHighAlarm2?: number,
    fAbsoluteMin?: number,
    fAbsoluteMax?: number
  ) {
    this.speciesId = speciesId;
    this.ageFrom = ageFrom;
    this.isRangedByGender = isRangedByGender;
    this.lowValue = lowValue;
    this.highValue = highValue;
    this.lowAlarm1 = lowAlarm1;
    this.highAlarm1 = highAlarm1;
    this.lowAlarm2 = lowAlarm2;
    this.highAlarm2 = highAlarm2;
    this.absoluteMin = absoluteMin;
    this.absoluteMax = absoluteMax;
    this.mLowValue = mLowValue;
    this.mHighValue = mHighValue;
    this.mLowAlarm1 = mLowAlarm1;
    this.mHighAlarm1 = mHighAlarm1;
    this.mLowAlarm2 = mLowAlarm2;
    this.mHighAlarm2 = mHighAlarm2;
    this.mAbsoluteMin = mAbsoluteMin;
    this.mAbsoluteMax = mAbsoluteMax;
    this.fLowValue = fLowValue;
    this.fHighValue = fHighValue;
    this.fLowAlarm1 = fLowAlarm1;
    this.fHighAlarm1 = fHighAlarm1;
    this.fLowAlarm2 = fLowAlarm2;
    this.fHighAlarm2 = fHighAlarm2;
    this.fAbsoluteMin = fAbsoluteMin;
    this.fAbsoluteMax = fAbsoluteMax;
  }
}
