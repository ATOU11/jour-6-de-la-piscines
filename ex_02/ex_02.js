// definie une fonction addcar dans cette fonction j'entre deux paramètre 
function addCar(agentString, car) {
// ici je déclare une constante nommée agent qui va contenir l'objet après le parsing
  const agent = JSON.parse(agentString);
  //
  agent.car = car;
  // on retourne la constante agent qui contient maintenent car 
  return agent;
}
