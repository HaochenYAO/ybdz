/*
 * common error
 */
// variable
export const INTERNET_ERROR = 'INTERNET_ERROR';

// function
export function internetError(message) {
  return { type: INTERNET_ERROR, message };
}
