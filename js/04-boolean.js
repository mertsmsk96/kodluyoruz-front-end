// ******** boolean veri türü ile çalışmak **********

// 0 ve 1 i anlamak

let isActive = false
isActive = true
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

// booleana çevirirken gönderilen değişkenin ii boş olursa false döner

// 0, -0, null, NaN, undefined
Boolean(0) //false
Boolean(-0) //false
Boolean(0.1) //true
Boolean(null) //false
Boolean(NaN) //false

console.log(Boolean(1n)); //true
console.log(Boolean(-1n)); //true
console.log(Boolean(Infinity)); //true
console.log(Boolean({})); //true
console.log(Boolean(10/'a')); //false