// *****number*****
// number veri türü tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "fiyat: "+price,
    "\nkdv oranı: "+tax,
    "\nkdv tutarı: "+priceTax,
    "\ntotal: "+total)

let stringnumber = "123"
console.log(stringnumber)
let intNumber = Number(stringnumber)//Number ile stringi sayıya çevirdik.

console.log(intNumber*2)

// artırma ve azaltma işlemleri
let counter = 1
counter = counter +1
counter += 1
counter ++
console.log(counter)
//azaltma işlemleri de bunun tam tersi eksi işareti ile yapılır.

//işlem önceliği

console.log(2 + 3 * 10 / 2) //sonuc 17 olur.
//öncelik sırası -> parantez içi, bölme, çarpma,toplama ve çıkarma

//mod(kalan) alma % -> kalanı verir
console.log(19 % 2)


//us alma **

console.log(2*2*2)
console.log(2**3)
console.log(Math.pow(2,3))//hepsi aynı sonucu verir

//aşağı yuvarlama işlemi -> Math.floor
console.log(Math.floor(1.6))
//yukarı yuvarlama işlemi -> Math.ceil
console.log(Math.ceil(1.4))
//yakına yuvarlama işlemi -> Math.round

console.log(Math.round(1.4))
console.log(Math.round(1.5))
