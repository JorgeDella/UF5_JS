function login() {
    var passwd1 = document.getElementById("passwd1").value;
    var passwd2 = document.getElementById("passwd2").value;
    var usuario = document.getElementById("usuari1").value;
    if (passwd1 == passwd2 && usuario == "Ibai") {
        if (passwd1 == 1234) {
            alert ("Usuari identificat, es pot accedir.");
        } 
    }
    else {
        alert ("Les dades no coincideixen");
    }
}