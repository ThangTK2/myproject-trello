/**
 * Capitalize the first letter of a string (chữ cái đầu tiên viết hoa)
 */
export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

/**
 * =================Ví dụ=======================
 */
// const stringTest = 'tk2'
// const capString = capitalizeFirstLetter(stringTest)

// console.log('stringTest:', stringTest)
// console.log('capString:', capString)
/**
 * Kết quả:
 *
 * stringTest: Of course, nothing changes =))
 * capString: Tk2
 */