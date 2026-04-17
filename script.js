// Banco de dados fictício (Usuários e Funcionários)
const usuarios = [
    { nome: "João", email: "joao@example.com", senha: "123456", tipo: "usuario" },
    { nome: "Maria", email: "maria@example.com", senha: "abcdef", tipo: "usuario" }
];

const funcionarios = [
    { nome: "Carlos", email: "carlos@padaria.com", senha: "admin123", tipo: "funcionario" }
];

document.getElementById('formCadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Recupera os usuários salvos no localStorage ou inicializa como um array vazio
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificando se o e-mail já está cadastrado
    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert('E-mail já cadastrado!');
    } else {
        // Adiciona o novo usuário ao array
        usuarios.push({ nome, email, senha, tipo: "usuario" });

        // Salva o array atualizado no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso!');
        window.location.href = "login.html"; // Redireciona para a página de login
    }
});

// Função de login
document.getElementById('formLogin')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailLogin = document.getElementById('emailLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    // Recupera os usuários e funcionários salvos no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

    const usuario = usuarios.find(user => user.email === emailLogin && user.senha === senhaLogin);
    const funcionario = funcionarios.find(func => func.email === emailLogin && func.senha === senhaLogin);

    if (usuario) {
        alert('Login realizado com sucesso!');
        window.location.href = "index.html"; // Redireciona para a home do usuário
    } else if (funcionario) {
        alert('Login realizado com sucesso!');
        window.location.href = "admin.html"; // Redireciona para a página de administração
    } else {
        alert('E-mail ou senha inválidos!');
    }
});

// Simulação de gerenciamento de clientes para o funcionário
document.getElementById('gerenciarClientes')?.addEventListener('click', function() {
    // Recupera os usuários salvos no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let listaClientes = '';
    usuarios.forEach((usuario, index) => {
        listaClientes += `<p>${usuario.nome} (${usuario.email})</p>`;
    });
    document.getElementById('clientesList').innerHTML = listaClientes;
});

// Simulação de gerenciamento de estoque para o funcionário
document.getElementById('gerenciarEstoque')?.addEventListener('click', function() {
    let estoque = 'Pão Francês: 100 unidades <br>Croissant: 50 unidades <br>Bolo de Chocolate: 30 unidades';
    document.getElementById('estoque').innerHTML = estoque;
});