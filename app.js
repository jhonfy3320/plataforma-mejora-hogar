document.addEventListener("DOMContentLoaded", () => {
    console.log("Plataforma cargada");
    // Registro de Usuarios
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        const user = { username, email, password };
        localStorage.setItem(email, JSON.stringify(user));
        document.getElementById("registerMessage").textContent = "¡Registro exitoso!";
    } else {
        document.getElementById("registerMessage").textContent =
            "Por favor, complete todos los campos.";
    }
});

// Directorio de Profesionales
const professionals = [
    { name: "Juan Pérez", specialty: "Diseño de Interiores", experience: 5 },
    { name: "Ana Gómez", specialty: "Jardinería", experience: 3 },
    { name: "Carlos Díaz", specialty: "Reformas", experience: 10 },
];

function renderProfessionals(filteredProfessionals = professionals) {
    const listContainer = document.getElementById("professionalList");
    listContainer.innerHTML = "";

    filteredProfessionals.forEach((pro) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${pro.name}</h3>
            <p>Especialidad: ${pro.specialty}</p>
            <p>Experiencia: ${pro.experience} años</p>
        `;
        listContainer.appendChild(card);
    });
}

document.getElementById("filterSpecialty").addEventListener("change", (e) => {
    const specialty = e.target.value;
    const filtered = specialty
        ? professionals.filter((pro) => pro.specialty === specialty)
        : professionals;

    renderProfessionals(filtered);
});

renderProfessionals();

  });
  