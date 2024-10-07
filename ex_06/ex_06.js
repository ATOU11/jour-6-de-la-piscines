function searchCars(agents, key, value) {
  return agents.filter(agent => agent.isMatching(key, value)).map(agent => agent.car);
}

agent.isMatching = function(key, value) {
  return this.car && this.car[key] === value;
};
document.addEventListener('load', () => {
  agent.logInfo();
});
