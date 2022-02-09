// *** string veri türü işlemleri ***

let email = "mertsmsk70@gmail.com"
let firsName = "mert"
let lastName = "ŞİMŞEK"

// karater sayısı -> length

let uzunluk =
`email ${email} || uzunluk: ${email.length}
isim ${firsName}    || uzunluk: ${firsName.length}
soyisim ${lastName} || uzunluk: ${lastName.length}
`
console.log(uzunluk)

// ilk karakteri bulmak -> [0] veya charAt(indexno)

let ilkKarakter = 
`email ${email} || ilk harf: ${email[0]}
isim ${firsName}    || ilk harf: ${firsName[0]}
soyisim ${lastName} || ilk harf: ${lastName[0]}
`
console.log(ilkKarakter)

// buyuk/kucuk harf
console.log(firsName.toUpperCase())
console.log(firsName.toLowerCase())



// string içinde istediğimiz veriyi arayıp bulmak -> search veya indexOf
let index = email.search("@")
console.log(index)
console.log(email[index])
// olmayan bir değer aratırsak -1 döner

// belli bir yere kadar almak -> slice
let username = email.slice(0,index)
let DOMAIN = email.slice(index+1)
let slice = 
`username: ${username}
domain: ${DOMAIN}`
console.log(slice)


// string içinde istediğimiz kısmı değiştirmek -> replace

let degis = email.replace("gmail.com","kodluyoruz.org")
console.log(degis)

// istediğimiz bilgi var mı diye kontrol etmek -> includes --- boolean döner
console.log(email.includes("a"))


// istediğim bilgiyle başladı mı? bitti mi? -> startsWidth,endsWidth

console.log(email.startsWith("mert"))
console.log(email.endsWith(".org"))

// ilk harflerini büyük yapmak

let fullname =
`
${firsName[0].toUpperCase()}${firsName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullname)


