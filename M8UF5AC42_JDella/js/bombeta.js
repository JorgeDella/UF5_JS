function encendrellum(bombeta) {
    bombeta.src="img/llumon.gif";
}
function apagarllum(bombeta) {
    bombeta.src="img/llumoff.gif";
}
function trencarllum(bombeta) {
    bombeta.src="img/llumbreak.gif";
}

document.addEventListener("keypress", teclallum);
function teclallum(tecla) {
    if (tecla.keyCode == 49) {
        document.getElementById("bombeta1").src="img/llumon.gif";
        document.getElementById("cub1").innerHTML = "1"
    }
    else if (tecla.keyCode == 50) {
        document.getElementById("bombeta2").src="img/llumon.gif";
        document.getElementById("cub2").innerHTML = "2"
    }
    else if (tecla.keyCode == 51) {
        document.getElementById("bombeta3").src="img/llumon.gif";
        document.getElementById("cub3").innerHTML = "3"
    }
    else if (tecla.keyCode == 52) {
        document.getElementById("bombeta3").src="img/llumoff.gif";
        document.getElementById("bombeta2").src="img/llumoff.gif";
        document.getElementById("bombeta1").src="img/llumoff.gif";
        document.getElementById("cub1").innerHTML = ""
        document.getElementById("cub2").innerHTML = ""
        document.getElementById("cub3").innerHTML = ""
    }
}