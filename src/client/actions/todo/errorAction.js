/*
 * todo error
 */

// variable
export const TODO_NOT_VALID = 'TODO_NOT_VALID';

// function
export function todoNotValid(message) {
  return { type: TODO_NOT_VALID, message };
}
