const jokediv = document.getElementById('joke');
const newJoke = document.getElementById('newJoke');

document.addEventListener('DOMContentLoaded', () => {
  // Diese Funktion wird ausgeführt, sobald das HTML fertig geladen ist
  getJoke();
});

newJoke.addEventListener('click', () => {
    getJoke()
})

function updateJokediv(newText) {
    jokediv.innerText = newText;
}

async function getJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {headers: {
          'Accept': 'application/json'
        }});
        if (!response.ok) {
          console.error('Antwort war nicht ok');
        }
        const data = await response.json();
        updateJokediv(data.joke)
      } catch (error) {
        console.error('Fehler beim Laden:', error)
      }
}