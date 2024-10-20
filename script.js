let selectedValue = null;

// Fonction pour gérer le clic sur les boutons
function handleButtonClick(value, button) {
  selectedValue = value; // Enregistre la valeur du bouton choisi

  // Supprime la sélection de tous les boutons
  const buttons = document.querySelectorAll(".myButton");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Ajoute la classe "selected" au bouton cliqué
  button.classList.add("selected");
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
  event.preventDefault(); // Empêche l'envoi réel du formulaire

  if (selectedValue) {
    localStorage.setItem("note", selectedValue);
    // Remplace le formulaire par un message de confirmation
    window.location.href = "result.html";
  } else {
    alert("Veuillez choisir une note avant de soumettre.");
  }
}

window.onload = function () {
  const note = localStorage.getItem("note");
  if (note) {
    document.getElementById(
      "result-message"
    ).textContent = `You selected ${note} out of 5 !`;
  }
};
