
// Déclaration de l'objet agent avec les informations nécessaires
const agent = {
    age: 57,
    code: '007',
    firstName: 'James', 
    lastName: 'Bond'
};

// Fonction qui affiche les informations de l'agent dans la page HTML
function displayAgentInfo(agent){
    // Sélectionne le conteneur  dans l'id "container"
    const container = document.getElementById('container');

    //   on Vérifie si le conteneur existe
    if (!container) {
        console.error('Le conteneur avec l\'id "container" n\'a pas été trouvé.');
        return;
    }

    //  on Sélectionne le premier élément <p> à l'intérieur du conteneur
    const p = container.querySelector('p');

    //  on Vérifie si l'élément <p> existe
    if (!p) {
        console.error('Aucun élément <p> trouvé à l\'intérieur du conteneur.');
        return;
    }

    
    const message = `My name is ${agent.lastName}, ${agent.firstName} ${agent.lastName}! I'm the agent ${agent.code} and I'm ${agent.age} years old.`;

    // Insère le message dans l'élément <p>
    p.textContent = message;
};

// on  Appelle la fonction pour afficher les informations de l'agent
displayAgentInfo(agent);
