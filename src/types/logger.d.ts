/**
 * Interface for a logger with various logging methods.
 */
export interface Logger {
  /**
   * Generic logging method.
   * @param data Data to be logged.
   */
  (...data: any[]): void;
  /**
   * Logs information messages.
   * @param data Data to be logged.
   */
  log(...data: any[]): void;
  /**
   * Logs informational messages.
   * @param data Data to be logged.
   */
  info(...data: any[]): void;
  /**
   * Logs warning messages.
   * @param data Data to be logged.
   */
  warn(...data: any[]): void;
  /**
   * Logs error messages.
   * @param data Data to be logged.
   */
  error(...data: any[]): void;
}
