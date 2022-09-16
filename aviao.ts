class aviao {
constructor (nome1:string){
this.gasolina = 200
this.nome = nome1
}

    velocidade: number = 0;
    gasolina: Number = 0;
    soldados: Number = 0;
    nome: string = "";
}

let Veloz: aviao;
Veloz = new aviao("veloz");
Veloz.velocidade = 500;
Veloz.soldados = 30;



let drumon: aviao;
drumon = new aviao("Drumon Flutuante");
drumon.velocidade = 800;
drumon.soldados = 200;


    console.log(` 1 `,drumon);
    console.log(` 2 `,Veloz);

