function Factor(factor, num) {
    for (let i=0; i<factor.length; i++){
      let integer = factor[i];
      if (num % integer !== 0){
        return false
      }
    }
    return true
  }
  
  
  console.log(Factor([4, 2, 3], 12))
  console.log("-------------------------------------------------"); 
  console.log(Factor([4, 2, 11], 12))