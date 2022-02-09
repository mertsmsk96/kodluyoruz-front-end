// *** template literals kullanımı ***

let userName = "mert"
const DOMAIN = "kodluyoruz.org"
let email = userName + "@" + DOMAIN
//console.log("Merhaba",userName,"sitemize hoşgeldin.","Mail adresin:",email) // bu yazımın daha güzel yolu şudur:

let info = 
`Merhaba ${userName} sitemize hoşgeldin. 
Mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}`

console.log(info)