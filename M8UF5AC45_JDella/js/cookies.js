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
}

function copy() {
    var nom=document.getElementById("nom");
    var cognom=document.getElementById("cognom");
    nom.value=sessionStorage.getItem("nom")
    cognom.value=sessionStorage.getItem("cognom")
}

function remove() {
    sessionStorage.clear()
}
 