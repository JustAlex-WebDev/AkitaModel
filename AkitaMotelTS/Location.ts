import type { LocationGroup } from "./LocationGroup";

/**
 * Represents a laboratory location, such as "Central lab", "Reception North", etc.
 */
export class Location {
  /**
   * Primary key in LIS iLab.
   */
  id: number;

  /**
   * Name of the location, e.g. "Central lab".
   */
  name: string;

  /**
   * Description of the location, e.g. "Sample collection point in Medical Center North."
   */
  description: string;

  /**
   * Soft delete field indicating if the location is active.
   */
  isActive: boolean = true;

  /**
   * Code for the location.
   */
  code: string;

  /**
   * Document profile ID for the location.
   */
  documentProfileId: number;

  /**
   * Type ID for the location.
   */
  typeId: number;

  /**
   * City where the location is based.
   */
  city: string;

  /**
   * Postal code for the location.
   */
  postalCode: string;

  /**
   * Address of the location.
   */
  address: string;

  /**
   * Primary phone number for the location.
   */
  phone1: string;

  /**
   * Secondary phone number for the location.
   */
  phone2: string;

  /**
   * Email for the location.
   */
  email: string;

  /**
   * Latitude of the location.
   */
  latitude?: number;

  /**
   * Longitude of the location.
   */
  longitude?: number;

  /**
   * Whether the location is visible on the web.
   */
  webVisible: boolean = true;

  /**
   * Whether the location accepts cards.
   */
  acceptCards: boolean = true;

  /**
   * Whether the location has disabilities access.
   */
  disabilitiesAccess: boolean = true;

  /**
   * Public note for the location.
   */
  publicNote: string;

  /**
   * Whether the public note uses markup.
   */
  publicNoteMarkup: boolean = false;

  /**
   * Group ID the location belongs to.
   */
  groupId: number;

  /**
   * Location group this location belongs to.
   */
  locationGroup: LocationGroup;

  /**
   * Whether the location can receive samples.
   */
  canReceiveSamples: boolean = true;

  /**
   * Global identifier for the location.
   */
  globalId: string;

  /**
   * Date the location was created.
   */
  created?: Date;

  /**
   * User who created the location.
   */
  createdBy: string;

  /**
   * Date the location was last modified.
   */
  modified?: Date;

  /**
   * User who last modified the location.
   */
  modifiedBy: string;

  /**
   * Constructor to initialize the Location class.
   * @param id - The unique identifier for the location.
   * @param name - The name of the location.
   * @param description - A description of the location.
   * @param code - The location code.
   * @param documentProfileId - Document profile ID.
   * @param typeId - Type ID.
   * @param city - City of the location.
   * @param postalCode - Postal code of the location.
   * @param address - Address of the location.
   * @param phone1 - Primary phone number of the location.
   * @param phone2 - Secondary phone number of the location.
   * @param email - Email of the location.
   * @param locationGroup - The group to which the location belongs.
   * @param globalId - Global identifier for the location.
   * @param createdBy - User who created the location.
   * @param modifiedBy - User who last modified the location.
   * @param publicNote - Public note for the location.
   * @param groupId - Group ID the location belongs to.
   */
  constructor(
    id: number,
    name: string,
    description: string,
    code: string,
    documentProfileId: number,
    typeId: number,
    city: string,
    postalCode: string,
    address: string,
    phone1: string,
    phone2: string,
    email: string,
    locationGroup: LocationGroup,
    globalId: string,
    createdBy: string,
    modifiedBy: string,
    publicNote: string,
    groupId: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.code = code;
    this.documentProfileId = documentProfileId;
    this.typeId = typeId;
    this.city = city;
    this.postalCode = postalCode;
    this.address = address;
    this.phone1 = phone1;
    this.phone2 = phone2;
    this.email = email;
    this.locationGroup = locationGroup;
    this.globalId = globalId;
    this.createdBy = createdBy;
    this.modifiedBy = modifiedBy;
    this.publicNote = publicNote;
    this.groupId = groupId;
  }
}
