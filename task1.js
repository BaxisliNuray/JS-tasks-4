var arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12]

// a) arr arrayinin butun elementlerini cap edin 
// arr.map(function(print){
//     console.log(print);
// })


// b) arr arrayinin en boyuk elementini cap edin
// console.log(Math.max(...arr))

// c) arr arrayinin sonuna 15 ededini elave et
// arr.push(15)
// console.log(arr);

// d) arr arrayin ilk elementini sil
// arr.shift(arr[0])
// console.log(arr);

// e) arr arrayi sort edin ve sonuncu elementi cap edin
// arr.sort((a, b) => a - b);
// console.log(arr);

// f) arr arrayin 3cu elementinden sonra 43 ededini elave edin
// arr.splice(4,0,43)
// console.log(arr);

// g) arr arrayin 3cu elementinden sonraki elementleri cap et
// arr.splice(0,3)
// console.log(arr);

// h)forEach ist ederek arr arrayinin butun elementlerini cap edin
// arr.forEach(function(print2){
//  console.log(print2);
// })

//i) arr arrayin 40dan boyuk elementlerini cap edin 
// const findGreat = (arr, num) => {
//     let empty = [];
//     for(let i = 0; i < arr.length; i++){
//        if(arr[i] < num){
//           continue;
//        };
//        empty.push(arr[i]);
//     };
//     return empty;
//  };
//  let greaterthan = 40;
//  console.log(findGreat(arr,greaterthan));