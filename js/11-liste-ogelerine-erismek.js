// listenin son elemanına ulaşmak veya eleman eklemek

let lastChild = document.querySelector("ul#liste>li:last-child")
lastChild.innerHTML = "son öğe değişti..."

let firstChild = document.querySelector("ul#liste>li:first-child")
firstChild.innerHTML = "ilk öğe değişti"

// yeni öğe eklemek için

let ulDOM = document.querySelector("ul#liste")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Eklenen öge"
ulDOM.append(liDOM) //en sona ekler

ulDOM.prepend(liDOM) //en başa ekler

// input ile girilen metni listeye ekleme fonksiyonu

let veri = document.getElementById("veri")
let ekle = document.getElementById("ekle")
ekle.addEventListener("click",function(){
    let yeni = document.createElement("li")
    yeni.innerHTML=veri.value
    ulDOM.append(yeni)
    veri.value=""
})