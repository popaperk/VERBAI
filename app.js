document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('verbaleForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // RACCOLTA DATI 
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const dataNascita = document.getElementById('dataNascita').value;
        const indirizzo = document.getElementById('indirizzo').value;
        const infrazione = document.getElementById('infrazione').value;
        const dataInfrazione = document.getElementById('dataInfrazione').value;
        const oraInfrazione = document.getElementById('oraInfrazione').value;
        const note = document.getElementById('note').value;

        const verbale = {
            nome,
            cognome,
            dataNascita,
            indirizzo,
            infrazione,
            dataInfrazione,
            oraInfrazione,
            note
        };

        console.log("Verbale generato:", verbale); 

        // QUA SALVIAMO IL VERBALE NEL LOCAL STORAGE OSSY
        let verbali = JSON.parse(localStorage.getItem('verbali')) || [];
        verbali.push(verbale);
        localStorage.setItem('verbali', JSON.stringify(verbali));

        console.log("Verbali salvati in Local Storage:", JSON.parse(localStorage.getItem('verbali'))); // Debug

        
        window.location.href = 'verbali.html';
    });
});