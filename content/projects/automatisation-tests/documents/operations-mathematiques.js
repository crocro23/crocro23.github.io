// Ajout de deux nombres
function addition(a, b) {
  return a + b;
}

// Soustraction de deux nombres
function soustraction(a, b) {
  return a - b;
}

// Multiplication de deux nombres
function multiplication(a, b) {
  return a * b;
}

// Division de deux nombres
function division(a, b) {
  if (b === 0) {
    return "Erreur : division par zéro";
  }
  return a / b;
}

// Exemples d'utilisation
console.log("Addition:", addition(10, 5));           // 15
console.log("Soustraction:", soustraction(10, 5));   // 5
console.log("Multiplication:", multiplication(10, 5)); // 50
console.log("Division:", division(10, 5));           // 2
console.log("Division par zéro:", division(10, 0));  // Erreur : division par zéro

// Exportation pour utilisation dans d'autres modules
module.exports = { addition, soustraction, multiplication, division };