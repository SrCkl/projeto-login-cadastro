document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Usuários predefinidos
    const users = [
        { name: "User1", email: "user1@example.com", password: "password1" },
        { name: "User2", email: "user2@example.com", password: "password2" },
        { name: "User3", email: "user3@example.com", password: "password3" }
    ];

    // Função para simular login
    function loginUser(email, password) {
        const user = users.find(u => u.email === email && u.password === password);
        return user ? `Bem-vindo, ${user.name}!` : "Email ou senha incorretos.";
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const message = loginUser(email, password);
            alert(message);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Cadastro realizado com sucesso!");
        });
    }
});