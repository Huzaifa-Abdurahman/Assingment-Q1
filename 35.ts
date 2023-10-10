// Create an array of animals with a common characteristic
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the name of each animal
console.log("List of animals with a common characteristic:");
for (const animal of animals) {
  console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about these animals:");
for (const animal of animals) {
  switch (animal) {
    case "Dog":
      console.log("A dog would make a great pet.");
      break;
    case "Cat":
      console.log("A cat is an independent and low-maintenance pet.");
      break;
    case "Rabbit":
      console.log("A rabbit is a cute and gentle companion.");
      break;
    default:
      console.log("This animal is not recognized.");
      break;
  }
}

// Print a concluding statement
console.log("\nAny of these animals would make a great pet!");
