function reverseString(str) {
    newarr = str.split("")
    result = [];
    x = newarr.length;
    for (i = x; i > -1; i--) {
      result.push(newarr[i]);
    }
    str = result.join("");
    return str;
  }
  
  console.log(reverseString("Привет"));
  console.log(reverseString("Привет, как дела "));

  function arithmeticMean(...args){
    let num = args.reduce((total, num) => total + num, 0)
    let result = num /args.length;
    return result
  }
  console.log(arithmeticMean(10, 13, 15, 16, 18, 20, 25));
  