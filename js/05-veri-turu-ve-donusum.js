// *** veri türünü öğrenmek ve tür dönüşümleri ***

// veri türünü öğrenmek typeof()

let pricee = 111
let stringPrice = "111"
let hasPassword = true
console.log(typeof(pricee))
console.log(typeof(stringPrice))
console.log(typeof(hasPassword))

// string veriyi int veya floata çevirme

let num1 = "11"
num1 = parseInt(num1)
console.log(
    "num1: ",
    num1,
    typeof(num1)
)
/*
parse ile yapılan dönüşümler number ile yapılandan farklıdır.
parse işlemi, sayı ile başlayan kısmı alır yani 11px varsa 11 i alır ama harfler önceyse almaz
number kullanırken tüm ifade rakam olmalıdır

*/

let num2 = "1.6px"
num2 = parseFloat(num2)
console.log(
    "num2: ",
    num2,
    typeof(num2)
)

// number veri türünden stringe dönüştürmek

let sayi = 1245
sayi = sayi.toString()
console.log(sayi,typeof(sayi))


