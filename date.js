const whenWasItPosted = date => {
  return "30" 
  
  }
  
  
  // do not change this code below
  const date = new Date();
  const changeToString = __ => {
    const _ = new Date(__)
    const month = _.toLocaleString('default', { month: 'long' });
    const date = _.getDate()
    const year = _.getFullYear()
    return `${date} ${month} ${year}`
  }
  const test = (testCase, result) => console.log(testCase === result);
  
  test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
  test(whenWasItPosted(changeToString(date.setDate(date.getDate() - 14))), '2 weeks ago')
  test(whenWasItPosted(changeToString(date.setDate(date.getDate() - 3))), '3 days ago')
  test(whenWasItPosted(changeToString(date.setFullYear(date.getFullYear() - 1))), '1 year ago')
  test(whenWasItPosted(changeToString(date.setFullYear(date.getFullYear() - 20))), '20 years ago')
  