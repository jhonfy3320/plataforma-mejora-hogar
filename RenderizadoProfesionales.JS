const professionals = [
    { name: "Juan Pérez", specialty: "Diseño de Interiores", experience: 5 },
    { name: "Ana Gómez", specialty: "Jardinería", experience: 3 },
    { name: "Carlos Díaz", specialty: "Reformas", experience: 10 },
  ];
  
  function renderProfessionals() {
    const listContainer = document.getElementById("professionalList");
    listContainer.innerHTML = "";
  
    professionals.forEach((pro) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${pro.name}</h3>
        <p>Especialidad: ${pro.specialty}</p>
        <p>Experiencia: ${pro.experience} años</p>
      `;
      listContainer.appendChild(card);
    });
  }
  
  renderProfessionals();
  