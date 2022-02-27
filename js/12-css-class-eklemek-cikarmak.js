// doma css class eklemek veya çıkarmak

let pro = document.querySelector("#pro")

pro.classList.add("text-primary")
pro.classList.add("title")
// çoklu sınıf eklemek içinde aralara virgül koyarak yazabiliriz
// pro.classList.add("title","btn") gibi

// silmek içinse remove kullanırız
pro.classList.remove("title")
console.log(pro.classList)