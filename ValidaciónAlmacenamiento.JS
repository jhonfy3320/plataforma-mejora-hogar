const professionals = [
    { name: "Juan Pérez", specialty: "Diseño de Interiores", experience: 5, image: "images/juan.jpg" },
    { name: "Ana Gómez", specialty: "Jardinería", experience: 3, image: "images/ana.jpg" },
    { name: "Carlos Díaz", specialty: "Reformas", experience: 10, image: "images/carlos.jpg" },
  ];
  
  function renderProfessionals(pros = professionals) {
    const listContainer = document.getElementById("professionalList");
    listContainer.innerHTML = "";
  
    pros.forEach((pro) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <img src="${pro.image}" alt="${pro.name}" style="width: 100%; border-radius: 5px;">
        <h3>${pro.name}</h3>
        <p><strong>Especialidad:</strong> ${pro.specialty}</p>
        <p><strong>Experiencia:</strong> ${pro.experience} años</p>
      `;
      listContainer.appendChild(card);
    });
  }
  
  renderProfessionals();
  