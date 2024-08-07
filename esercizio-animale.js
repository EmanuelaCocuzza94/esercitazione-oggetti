console.log('ciao')
// Array di oggetti 

 const animali = [

    { 
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },

    {   nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi' 
    },

    { 
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli' 
    },
  ];

  console.log(animali)

  const mammiferi = []

//   VERSIONE CON FOR: Dobbiamo ciclare come prima cosa l'array con il ciclo for


// for(let i=0; i < animali.length; i ++ ){

//     const animaleScelto = animali [i];
//     console.log(animaleScelto)

//     if (animaleScelto.classe === 'mammiferi') {
//         mammiferi.push(animaleScelto)
//     }

// };

//  VERSIONE CON FOREACH: per ogni animale invoca questa funzione

animali.forEach(function(animaleScelto){
    console.log(animaleScelto)
    if(animaleScelto.classe ==='mammiferi') {
        mammiferi.push(animaleScelto)
    }
    
});


console.log(mammiferi)



