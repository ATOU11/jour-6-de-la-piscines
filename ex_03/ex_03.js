
// on definie la fonction addcaCardToAgeent  a laquelle j'affecte 5 paramètre 
function addCarToAgent(agent, brand, model, color, power) {
  // si l'un des paramètres sont fausse alors on applique la règle général qui est vrai 
  if (!brand || !model || !color || !power) {
  // Affiche un message d'erreur dans la console du navigateur 
    console.error('Missing or incorrect car information');
    //termine l'exécution  de la fonction 
    return null;
  }
  agent.car = {
    brand,
    model,
    color,
    power
  };
  //termine l'exécution de la fonction 
  return agent;
}
