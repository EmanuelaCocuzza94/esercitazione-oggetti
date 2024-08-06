console.log('Inizio esercizio');



   
const macchine = [

    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Disel',
    },
    {
        marca: 'Audi',
        modello: 'a4',
        alimentazione: 'DISEL',
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'GPL',
    },
    {
        marca: 'citroen',
        modello: 'c3',
        alimentazione: 'benzina',
    },
    {
        marca: 'toyota',
        modello: 'yaris',
        alimentazione: 'BENZINA',
    },
    {
        marca: 'tesla',
        modello: 'x',
        alimentazione: 'elettrica',
    },


];

console.log(macchine);

const macchineBenzina = [];
const macchineDisel = [];
const macchineAltre = [];


for(let i = 0; i < macchine.length; i++){
    
    // macchine[i].alimentazione
    
    if(macchine[i].alimentazione === 'benzina'){
        macchineBenzina.push(macchine[i]);
    } else if (macchine[i].alimentazione === 'disel'){
        macchineDisel.push(macchine[i]);
    } else {
        macchineAltre.push(macchine[i]);
    }

}

console.log(macchineBenzina);
console.log(macchineDisel);
console.log(macchineAltre);