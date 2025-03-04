/**
 * Represents a generic paged result.
 */
export class PagedResult<T> {
  /**
   * The list of items for the current page.
   */
  items: T[];

  /**
   * The total number of items across all pages.
   */
  totalCount: number;

  /**
   * The current page number (1-indexed).
   */
  pageNumber: number;

  /**
   * The number of items per page.
   */
  pageSize: number;

  /**
   * The total number of pages.
   */
  totalPages: number;

  /**
   * The index of the first item in the current page (1-indexed).
   */
  startIndex: number;

  /**
   * The index of the last item in the current page (1-indexed).
   */
  endIndex: number;

  /**
   * Indicates if there's a previous page.
   */
  hasPrevious: boolean;

  /**
   * Indicates if there's a next page.
   */
  hasNext: boolean;

  /**
   * Constructor to initialize the PagedResult.
   * @param items - The list of items for the current page.
   * @param totalCount - The total number of items across all pages.
   * @param pageNumber - The current page number (1-indexed).
   * @param pageSize - The number of items per page.
   * @param totalPages - The total number of pages.
   * @param startIndex - The index of the first item in the current page (1-indexed).
   * @param endIndex - The index of the last item in the current page (1-indexed).
   * @param hasPrevious - Indicates if there's a previous page.
   * @param hasNext - Indicates if there's a next page.
   */
  constructor(
    items: T[],
    totalCount: number,
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    startIndex: number,
    endIndex: number,
    hasPrevious: boolean,
    hasNext: boolean
  ) {
    this.items = items;
    this.totalCount = totalCount;
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.totalPages = totalPages;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
  }
}
