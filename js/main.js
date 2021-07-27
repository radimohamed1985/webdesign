

function login(){
    document.querySelector('.g-3').classList.remove('hidden');
    document.getElementById('form').classList.add('hidden');
}

var x = document.getElementById("signup");
x.onclick = login;

