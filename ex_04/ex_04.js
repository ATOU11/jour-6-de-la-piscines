// on definie une fonction qui prend deux paramètres 
function updateLicensePlates(agent, plates) {
// on verifie si agent n'a pas de propriété car 
  if (!agent.car) {
  // Si la condition précédente est vraie, affiche un message d'erreur dans la console du navigateu indiquant que l'agent n'a pas de propriété
    console.error('The agent does not have a car property');
    //  Termine l'exécution de la fonction et retourne null
    return null;
  }
  agent.car.licensePlates = plates;
  return agent;
}

function showLicensePlates(agent) {
  if (!agent.car || !agent.car.licensePlates) {
    console.error('The agent does not have any license plates');
    return;
  }
  const ul = document.createElement('ul');
  agent.car.licensePlates.forEach(plate => {
    const li = document.createElement('li');
    li.textContent = plate;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
