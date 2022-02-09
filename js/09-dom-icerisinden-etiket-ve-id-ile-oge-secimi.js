// let h2 = document.getElementsByTagName('h2')
// console.log(h2.title.innerHTML)

// let title = document.getElementById("title")
// title.innerHTML = "değişen bilgi"
// console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a") //queryselector sadece bir tane alır
console.log(link.innerHTML) // html içeriği konsola yazdırıldı
link.innerHTML += " değişti" //görünen ekranda içerik değiştirildi
link.style.color = "red" //yazı rengi kırmızı yapıldı
link.classList.add("btn") // btn class ı eklendi
