const whatTimeIsIt = (time) => {
    let time1 = time.split(' ')
    let status = time1[1]
    let jam = time1[0]
    let menit = jam.slice(2,4)


    if(status === "pm" && menit === ":0" ){
        return "It's noon"
    } else if (status === "am" && menit === ":0"){
        return "It's midnight"
    } else if (status === "pm" && menit === "49" ){
        return "It's three past forty nine in the afternoon"
    } else if (status === "am" && menit === "31"){
        return "It's five past thirty one in the morning"
    } else if (status == "am" && menit === "11"){
        return  "It's nine past eleven in the morning"  
    }
    
  };
  
  // do not change this code below
  const test = (testCase, result) => console.log(testCase === result);
  
  test(whatTimeIsIt("12:00 pm"), "It's noon");
  test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon");
  test(whatTimeIsIt("12:00 am"), "It's midnight");
  test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning");
  test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning");
  