document.getElementById("filterSpecialty").addEventListener("change", (e) => {
    const specialty = e.target.value;
  
    const filtered = specialty
      ? professionals.filter((pro) => pro.specialty === specialty)
      : professionals;
  
    const listContainer = document.getElementById("professionalList");
    listContainer.innerHTML = "";
  
    filtered.forEach((pro) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${pro.name}</h3>
        <p>Especialidad: ${pro.specialty}</p>
        <p>Experiencia: ${pro.experience} años</p>
      `;
      listContainer.appendChild(card);
    });
  });
  