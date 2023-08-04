//Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

//Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.


let guardarAnimais = [
    ["Bolt", "Canis familiaris", 3],
    ["Dory", "Paracanthurus hepatus", 2],
    ["Frajola", "Felis catus", 5],
];

for (let i = 0; i < guardarAnimais.length; i++) {
    const animais = guardarAnimais[i];
    const nome = animais[0];
    const especie = animais[1];
    const idade = animais[2];

    console.log (`Nome: ${nome}, espécie: ${especie}, idade: ${idade} anos;`);
}

