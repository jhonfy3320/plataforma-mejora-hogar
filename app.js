// Registro de Usuarios
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        const user = { username, email };
        localStorage.setItem(email, JSON.stringify(user));

        document.getElementById("registerMessage").textContent = "¡Registro exitoso!";
        document.getElementById("registerForm").reset();

        // Actualiza la lista de usuarios registrados
        addUserToList(user);
    } else {
        document.getElementById("registerMessage").textContent =
            "Por favor, complete todos los campos.";
    }
});

// Mostrar Usuarios Registrados
function addUserToList(user) {
    const userList = document.getElementById("userList");
    const listItem = document.createElement("li");
    listItem.textContent = `${user.username} - ${user.email}`;
    userList.appendChild(listItem);
}

// Cargar Usuarios desde el Almacenamiento Local al Iniciar
window.onload = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        if (user && user.username) {
            addUserToList(user);
        }
    }
};

  