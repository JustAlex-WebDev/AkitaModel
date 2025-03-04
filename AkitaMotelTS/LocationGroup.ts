/**
 * Represents a group where a Location belongs to.
 */
export class LocationGroup {
  /**
   * Primary key in LIS iLab.
   */
  id: number;

  /**
   * Name of the group.
   */
  name: string;

  /**
   * Rank of the group.
   */
  rank: number;

  /**
   * Constructor to initialize the LocationGroup class.
   * @param id - The unique identifier for the group.
   * @param name - The name of the group.
   * @param rank - The rank of the group.
   */
  constructor(id: number, name: string, rank: number) {
    this.id = id;
    this.name = name;
    this.rank = rank;
  }
}
