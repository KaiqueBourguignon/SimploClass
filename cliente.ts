class cliente1 {
    
    constructor(i : Number, n : String, nf : Number){
        this.nome = n;
        this.idade = i;
        this.nFilhos = nf;
    }
    nome : String;  
    idade : Number;
    nFilhos : Number;
}

let cliente  = new cliente1 (29 , "Kaique" , 2 )

console.log(`1`, cliente)





