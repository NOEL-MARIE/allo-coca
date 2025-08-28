// main.ts

// Définir un type pour une personne
type Person = {
  name: string
  age: number
}

// Créer une fonction qui affiche un message de bienvenue
function greet(person: Person): string {
  return `Bonjour, ${person.name}! Tu as ${person.age} ans.`
}

// Exemple d’utilisation
const user: Person = {
  name: "Noël-Marie",
  age: 25,
}

console.log(greet(user))
