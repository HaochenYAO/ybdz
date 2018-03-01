/*
 * common错误
 */
export const INTERNET_ERROR = 'INTERNET_ERROR';

export function internetError(message) {
  return { type: INTERNET_ERROR, message };
}
