// Fetch characters from the API
function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => displayCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }
  
  // Display characters on the page
  function displayCharacters(characters) {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = '';
  
    characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('characterCard');
      characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Location: ${character.location.name}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <!-- Add more details as needed -->
      `;
      characterCard.addEventListener('click', () => showCharacterDetails(character));
      characterGrid.appendChild(characterCard);
    });
  }
  
  // Show individual character details
  function showCharacterDetails(character) {
    const characterDetails = document.getElementById('characterDetails');
    characterDetails.innerHTML = `
      <div>
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Location: ${character.location.name}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <!-- Add more details as needed -->
      </div>
    `;
    // Fetch and display episodes and location details, if needed
    // Implement filtering based on status, location, episode, etc.
  }
  
  // Filter characters based on search input
  document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const characters = document.querySelectorAll('.characterCard');
  
    characters.forEach(character => {
      const name = character.querySelector('h2').textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        character.style.display = 'block';
      } else {
        character.style.display = 'none';
      }
    });
  });
  
  // Fetch and display characters when the page loads
  fetchCharacters();
  