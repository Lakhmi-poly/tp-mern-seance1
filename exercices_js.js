const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 }
];

// Déstructuration
const { nom, prix } = produits[0];

console.log(nom, prix);


//find
const souris = produits.find(produit => produit.nom === 'Souris');

console.log(souris.prix);


//filter
const produitsMoinsDe100 = produits.filter(produit => produit.prix < 100);

console.log(produitsMoinsDe100);


//Fonction fléchée avec remise
const avecRemise = prix => prix * 0.9;

console.log(avecRemise(320));