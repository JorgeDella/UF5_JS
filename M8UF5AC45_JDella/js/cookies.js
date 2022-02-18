function login() {
    var usuario = document.getElementById("usuari1").value;
    var passwd1 = document.getElementById("passwd1").value;
    var passwd2 = document.getElementById("passwd2").value;
    if (usuario == "Ibai") {
        if (passwd1 == 1234) {
            if (passwd2 == passwd1) {
                alert ("Usuari identificat, es pot accedir a la web.");
            }
            else {
                alert ("Les dades no coincideixen amb la base de dades");
            }
        }
        else {
            alert ("Les dades no coincideixen amb la base de dades");
        }
    }
    else {
        alert ("Les dades no coincideixen amb la base de dades");
    }
}
function save() {
    var nom_s=document.getElementById("nom").value;
    var cognom_s=document.getElementById("cognom").value;
    sessionStorage.setItem("nom",nom_s)
    sessionStorage.setItem("cognom",cognom_s)
    console.log(sessionStorage.getItem("nom"))
    console.log(sessionStorage.getItem("cognom"))
    alert ("S'han emmagatzemat les dades")
}

function copy() {
    var nom=document.getElementById("nom").value;
    var cognom=document.getElementById("cognom").value;
    nom=sessionStorage.getItem("nom")
    cognom=sessionStorage.getItem("cognom")
    alert ("S'han copiat les dades")
}

function remove() {
    sessionStorage.clear
    alert ("S'han eliminat les dades")
}
 