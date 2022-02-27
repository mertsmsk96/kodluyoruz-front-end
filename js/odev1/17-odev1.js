let isim = prompt("isminizi giriniz:")
let text = document.querySelector("h2#name")
text.innerHTML = `Merhaba, ${isim}! Hoş Geldiniz!`

function time() {
    let now = new Date()

    let day = now.getDay()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    switch (day) {
        case 0:
            day = "Pazar"
            break;
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
    }

    let zaman = document.querySelector("h2#date")
    zaman.innerHTML = `${hours} : ${minutes} : ${seconds}  ${day}`
}

setInterval(time, 1000)





