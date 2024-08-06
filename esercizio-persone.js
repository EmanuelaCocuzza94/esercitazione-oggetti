console.log('Iniziamo')

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, 
// una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


const persone = [
    {
        nome : 'Andrea',
        cognome: 'Mineo',
        eta: 35
    },
    {
        nome : 'Alberto',
        cognome: 'Mineo',
        eta: 29
    },
    {
        nome : 'Carlo',
        cognome: 'Mineo',
        eta: 5
    },
    {
        nome : 'Ivana',
        cognome: 'Pietrabissa',
        eta: 33
    },
    {
        nome : 'Leonardo',
        cognome: 'Mineo',
        eta: 2
    },
];

console.log(persone)

const maggiorenni = [];

for(let i = 0 ; i < persone.length ; i ++ ){

    const guidatori = persone[i];

    let risultato = 'Non puoi guidare';

    if(guidatori.eta >= 18) {
        risultato = 'Puoi guidare';
        maggiorenni.push(guidatori);
    }

    const nome = persone[i].nome;
    
    const cognome = persone[i].cognome;

    const messaggio = 'Nome: ' + nome + ' Cognome: ' + cognome + ' ' + risultato;

    console.log(messaggio);

};

// console.log(maggiorenni)





