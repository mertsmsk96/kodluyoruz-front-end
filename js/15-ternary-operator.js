// ternary operatörler ile short if kullanımı

// eğer kullanıcı adın varsa yazdır yoksa kulanıcı bulunamadı yazdır

let username = prompt("kullanıcı adı")

// ternary kullanımı:
// koşul ? doğruysa : yanlışsa

alert(username ? username : "kullanıcı bilgisi bulunamadı")

// çoklu halde de kullanabiliriz

var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."