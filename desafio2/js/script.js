function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function login(){
    let logado = 0;
    let usuario = document.getElementById('username').value.toLowerCase();
    let senha = document.getElementById('password').value;

    if (usuario === 'admin' && senha === '@dmin') {
        window.location = 'index.html';
        logado = 1;
    }

    if (logado === 0) {
        alert('Usuário ou Senha incorretos. Tente novamente.');
    }
}

function cadastro(){
    alert('Cadastrado com sucesso.');
    window.location.href = 'index.html';
}
