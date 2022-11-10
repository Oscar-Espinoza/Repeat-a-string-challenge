function repeatStringNumTimes (str, num) {
  let repeatedWord = ""
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedWord += str       
    }
    return repeatedWord   
  } else {
    return repeatedWord
  }
}

module.exports = repeatStringNumTimes
