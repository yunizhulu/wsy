/**
 * 将时间对象或时间戳解析为指定格式的字符串
 * @param {(Object|string|number)} time 时间对象、时间字符串或时间戳
 * @param {string} cFormat 自定义的时间格式字符串，默认格式为 '{y}-{m}-{d} {h}:{i}:{s}'
 * @returns {string | null} 解析后的时间字符串，如果解析失败返回 null
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // 支持 "1548221490638" 这种时间戳格式
        time = parseInt(time)
      } else {
        // 支持 safari 浏览器中的时间格式
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      // 将秒级时间戳转换为毫秒级时间戳
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // 注意：getDay() 方法返回的星期几是从 0 开始的（0 表示星期天）
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0') // 用 0 补齐不足两位的数字
  })
  return time_str
}

/**
 * 将时间戳格式化为字符串，显示时间距离当前时间的相对时间
 * @param {number} time 时间戳
 * @param {string} option 格式选项，可选，默认为空
 * @returns {string} 格式化后的相对时间字符串
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    // 如果时间戳是秒级的，转换为毫秒级时间戳
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // 小于 1 小时
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    // 如果有自定义格式选项，则使用 parseTime 方法格式化时间
    return parseTime(time, option)
  } else {
    // 否则，返回默认的格式（月、日、时、分）
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 将 URL 参数字符串解析为对象
 * @param {string} url URL 参数字符串
 * @returns {Object} 解析后的对象
 */
export function param2Obj(url) {
  // 解码 URL 参数字符串并替换 '+' 为 ' '
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  // 遍历参数数组，将参数名和参数值解析为键值对对象
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
