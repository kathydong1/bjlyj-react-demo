
/*
 * action 类型
 */

export const GET_INDEX = 'GET_INDEX';
export const SET_INDEX = 'SET_INDEX';

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: GET_INDEX, text }
}
