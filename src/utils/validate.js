/**
 * 判断路径是否为外部链接
 * @param {string} path 要判断的路径
 * @returns {Boolean} 如果路径为外部链接返回 true，否则返回 false
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 验证用户名是否有效
 * @param {string} str 要验证的用户名
 * @returns {Boolean} 如果用户名有效返回 true，否则返回 false
 */
export function validUsername(str) {
  // 定义有效的用户名列表
  const valid_map = ["admin", "editor"];
  // 去除用户名两边的空格并检查是否在有效用户名列表中
  return valid_map.indexOf(str.trim()) >= 0;
}
