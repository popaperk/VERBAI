// login.js

// Funzione per gestire il login
function login(event) {
    event.preventDefault(); // Evita il comportamento di default del form

    // Ottieni i valori inseriti dall'utente
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica le credenziali
    if (username === 'admin' && password === '123') {
        // Login riuscito
        localStorage.setItem('loggedIn', 'true'); // Salva lo stato di login in localStorage
        window.location.href = 'index.html'; // Reindirizza alla pagina principale (index.html)
    } else {
        // Login fallito, mostra un messaggio di errore
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = 'Username o password errati. Riprova.';
        loginMessage.classList.add('error');
    }
}

// Funzione per il logout
function logout() {
    localStorage.removeItem('loggedIn'); // Rimuove lo stato di login da localStorage
    window.location.href = 'login.html'; // Reindirizza alla pagina di login
}

// Controlla se l'utente è già loggato al caricamento della pagina
document.addEventListener('DOMContentLoaded', (event) => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
        window.location.href = 'login.html'; // Reindirizza alla pagina di login se l'utente non è loggato
        setTimeout(10) ; 
    }
});
