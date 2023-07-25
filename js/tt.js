

const diffArr = (arr1, arr2) => {
 let arr = []
 arr1.map(item => {
  if(arr2.indexOf(item) > -1) {
    arr.push(item)
  }
 })
 return arr
}