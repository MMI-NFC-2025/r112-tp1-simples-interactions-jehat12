const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"

const bouton = document.querySelector("#en-rouge-suite-a-click");

bouton.addEventListener("click", () => {
  bouton.style.color = "red"; // Le texte devient rouge au clic
});

const titres = document.querySelectorAll("h2");

titres.forEach((titre) => {
  titre.addEventListener("click", (event) => {
    event.target.style.color = "red"; // l'élément cliqué devient rouge
  });
});
