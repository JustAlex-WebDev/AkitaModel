/**
 * API error. Usually sent as content in case of non-success HTTP codes, such as 500, 404, etc.
 */
export class ApiError {
  /**
   * Correlation Identifier.
   */
  correlationId: string;

  /**
   * Reason of the error.
   */
  message: string;

  /**
   * Detailed information, e.g. exception stack.
   */
  details: string;

  /**
   * Constructor to initialize the ApiError class.
   * @param correlationId - The correlation identifier for tracing.
   * @param message - The reason of the error.
   * @param details - The detailed information about the error.
   */
  constructor(correlationId: string, message: string, details: string) {
    this.correlationId = correlationId;
    this.message = message;
    this.details = details;
  }
}
