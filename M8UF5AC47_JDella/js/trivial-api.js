const enllaç = window.location.search;
const param = new URLSearchParams(enllaç);
const usuari = param.get('nom_us')

function login() {
    var nom = document.getElementById("nom").value;
    var age = document.getElementById("edat").value;
    if (nom != "" && nom == localStorage.getItem("n_al")) {
        window.open("./web/trivial-api_test.htm")
    }
    else if (nom != "" && age >= 18) {
        localStorage.setItem("n_al", nom)
        window.open("./web/trivial-api_test.htm?nom_us=" + nom)
    }
    else if (nom != "" && age < 18) {
        alert ("Algun dels camps son incorrectes.")
    }
}

var contingut = document.querySelector('#contingut') 
function agafar() { 
    fetch('https://randomuser.me/api/') 
    .then(res => res.json()) 
    .then(data => { 
    console.log(data.results['0']) 
    contingut.innerHTML = ` 
        <img src="${data.results['0'].picture.large}" 
        width="150px" style="border-radius: 25%; border: 5px solid black" class="img-fluid rounded-circle"> 
    ` + usuari
    })
    localStorage.setItem("resp", "correct")
}
function resposta(x) {
    if (x == localStorage.getItem("resp")) {
        alert("Resposta correcta.")
    }
    else {
        alert("Resposta incorrecta")
    }
}