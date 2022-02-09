let fullname = prompt("Lütfen Adınızı Giriniz:")
// let olan = document.getElementById("pro").innerHTML
// document.getElementById("pro").style.display="none"
// document.write(olan+" "+fullname)

// ya da başka bir yolla yapabiliriz

let pro = document.querySelector("#pro")
pro.innerHTML = `${pro.innerHTML} <small style="color:red">${fullname}</small>`
