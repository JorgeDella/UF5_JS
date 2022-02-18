function login() {
    var passwd1 = document.getElementById("passwd1").value
    var passwd2 = document.getElementById("passwd2").value
    if (passwd1 == passwd2) {
        alert ("Les contrasenyes son correctes!")
    }
    else {
        alert ("Les contrasenyes no coincideixen.")
    }
}