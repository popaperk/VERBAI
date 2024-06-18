// verbali.js

document.addEventListener('DOMContentLoaded', (event) => {
    const verbaliList = document.getElementById('verbaliList');
    const verbali = JSON.parse(localStorage.getItem('verbali')) || [];

    verbali.forEach((verbale, index) => {
        const verbaleText = `
            Verbale di Infrazione
            ---------------------
            Nome: ${verbale.nome}
            Cognome: ${verbale.cognome}
            Data di Nascita: ${verbale.dataNascita}
            Indirizzo: ${verbale.indirizzo}
            Tipo di Infrazione: ${verbale.infrazione}
            Data dell'Infrazione: ${verbale.dataInfrazione}
            Ora dell'Infrazione: ${verbale.oraInfrazione}
            Note Aggiuntive: ${verbale.note}
        `;

        const verbaleItem = document.createElement('div');
        verbaleItem.classList.add('verbale-item');
        verbaleItem.innerHTML = `
            <pre>${verbaleText}</pre>
            <button onclick="downloadVerbale(${index})">Scarica Verbale</button>
            <button onclick="eliminaVerbale(${index})">Elimina Verbale</button> <!-- Aggiunto il pulsante Elimina -->
        `;
        verbaliList.appendChild(verbaleItem);
    });
});

function downloadVerbale(index) {
    const verbali = JSON.parse(localStorage.getItem('verbali')) || [];
    const verbale = verbali[index];

    const verbaleText = `
        Verbale di Infrazione
        ---------------------
        Nome: ${verbale.nome}
        Cognome: ${verbale.cognome}
        Data di Nascita: ${verbale.dataNascita}
        Indirizzo: ${verbale.indirizzo}
        Tipo di Infrazione: ${verbale.infrazione}
        Data dell'Infrazione: ${verbale.dataInfrazione}
        Ora dell'Infrazione: ${verbale.oraInfrazione}
        Note Aggiuntive: ${verbale.note}
    `;

    const blob = new Blob([verbaleText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `verbale_${index + 1}.txt`;
    a.textContent = `Scarica Verbale ${index + 1}`;
    a.classList.add('btn-download');
    a.click(); 
}

function eliminaVerbale(index) {
    let verbali = JSON.parse(localStorage.getItem('verbali')) || [];
    verbali.splice(index, 1); 
    localStorage.setItem('verbali', JSON.stringify(verbali));

    
    const verbaliList = document.getElementById('verbaliList');
    verbaliList.innerHTML = ''; 
    verbali.forEach((verbale, idx) => {
        const verbaleText = `
            Verbale di Infrazione
            ---------------------
            Nome: ${verbale.nome}
            Cognome: ${verbale.cognome}
            Data di Nascita: ${verbale.dataNascita}
            Indirizzo: ${verbale.indirizzo}
            Tipo di Infrazione: ${verbale.infrazione}
            Data dell'Infrazione: ${verbale.dataInfrazione}
            Ora dell'Infrazione: ${verbale.oraInfrazione}
            Note Aggiuntive: ${verbale.note}
        `;

        const verbaleItem = document.createElement('div');
        verbaleItem.classList.add('verbale-item');
        verbaleItem.innerHTML = `
            <pre>${verbaleText}</pre>
            <button onclick="downloadVerbale(${idx})">Scarica Verbale</button>
            <button onclick="eliminaVerbale(${idx})">Elimina Verbale</button>
        `;
        verbaliList.appendChild(verbaleItem);
    });
}
