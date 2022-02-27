// çoklu koşullarla çalışmak

let username = prompt("username")
let age = prompt("yaş")

if (username && age >= 18) {
    alert("ehliyet alabilirsiniz")
} else if(!username && age){
    alert("kullanıcı bilgisi yok")
}
else if(username && !age){
    alert("yaş bilgisi yok")
}
else if(username && age<18){
    alert("ehliyet almak için yaşınız yeterli değil")
}
else{
    alert("kullanıcı ve yaş bilgisi girilmedi!")
}
