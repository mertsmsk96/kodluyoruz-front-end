function myFunction(){
    document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
}

    document.getElementById("btnClick").addEventListener("click", clicked);
    function clicked(){
       alert("Butona Tıklandı");
       document.getElementById("domain").style.color="red";
}