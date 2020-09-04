class Default {
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: Array<any>;
    array2: any[];
    
    constructor() {
        this.metodo();
        this.array = [
            "teste"
        ];
        this.array2 = [
            {
                teste: "teste"
            }
        ];
    }
    metodo() {
        this.numero = 10;
        this.texto = `Este é um alert simples em typeScript numero: ${this.numero}`;
        return alert(this.texto);
    }
}
let tuple:[string,number] []=[
    ['url',2],
    ['teste',3]
];
function funcao(){
    tuple.forEach(element => {
        console.log(element[1]);
    });
}
funcao();

enum CardSuits{Clubs, Hearts, Spades, Diamonds}
let x=0;
function funcao2(){
    if(x===CardSuits.Clubs){
        alert("True")
    }else{
        alert("False")
    }
    console.log(CardSuits.Clubs)
}
funcao2();

let obj:{name:string, age:number, active?:boolean}={
    name:'Maurício',
    age:25
}

let obj2:{[key:string]:any}={
    arroz:25,
    teste:32
}


export interface User {
    name: string;
    age: number;
    active?: boolean;
}
let usuario: User = {
    name:'jose',
    age: 25,
    active:false
}

let texto = 2;

function teste(numero:number, texto: string, active?:boolean){
}
