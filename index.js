function iterativeLog(array) {
  array.forEach((array, index) => {
    console.log(`${index}: ${array}`)
  })
}

function iterate(callback) {
  var array = [1,2,3]
  array.forEach(callback)
  return array
}

function doToArray(array,callback) {
  array.forEach(callback)
}
