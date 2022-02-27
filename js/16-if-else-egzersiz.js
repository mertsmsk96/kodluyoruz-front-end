// koşul ifadeleri bölüm sonu egzersizi

/*

1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanrak not bilgisini #infoya yazdır
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3- ff bilgisinde üzgün surat ikonu çıkart, diğerlerinde ise gülücük olsun
4- ff class bilgisi text-danger, diğerlerinin ise text-primary olsun
 */

let note = prompt("notunuzu giriniz:")
let noteText;
const smile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const sad = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
let p= document.getElementById("info")

if(note >= 0 && note <= 100){
    noteText=smile
    document.getElementById("info").classList.add("text-primary")

    if(note >= 90 && note<=100){
        noteText += " AA"
    }
    else if(note>=85){
        noteText += " BA"
    }
    else if(note>=80){
        noteText += " BB"
    }
    else if(note>=75){
        noteText += " CB"
    }
    else if(note>=70){
        noteText += " CC"
    }
    else if(note>=65){
        noteText += " DC"
    }
    else if(note>=60){
        noteText += " DD"
    }
    else if(note>=50){
        noteText += " FD"
    }
    else{
        p.classList.add("text-danger")  
        noteText=`${sad} FF` 
    }

    p.innerHTML=`${noteText}`
}
else{
    noteText="hatalı giriş yaptınız!"
}
