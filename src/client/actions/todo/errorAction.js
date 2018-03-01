/*
 * todo错误
 */
export const TODO_NOT_VALID = 'TODO_NOT_VALID';

export function todoNotValid(message) {
  return { type: TODO_NOT_VALID, message };
}
