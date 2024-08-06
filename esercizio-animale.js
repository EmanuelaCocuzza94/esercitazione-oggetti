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

//   Dobbiamo ciclare come prima cosa l'array con il ciclo for

for(let i=0; i < animali.length; i ++ ){

    const animaleScelto = animali [i];
    console.log(animaleScelto)

    if (animaleScelto.classe === 'mammiferi') {
        mammiferi.push(animaleScelto)
    }

};

// animali.forEach(function(classe){
//     const animali = capitalize(classe)
//     mammiferi = push(animali)
// })


console.log(mammiferi)



