//Classe
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //Método
    atacar() {
        let ataque;

        //Estrutura de decisão e operadores
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

//Objetos
const herois = [
    new Heroi('Gandalf', 200, 'mago'),
    new Heroi('Aragorn', 87, 'guerreiro'),
    new Heroi('Li Mu Bai', 30, 'monge'),
    new Heroi('Naruto', 16, 'ninja')
];

//Laço de repetição
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}
