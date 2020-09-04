"use strict";
exports.__esModule = true;
var Default = /** @class */ (function () {
    function Default() {
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
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Este \u00E9 um alert simples em typeScript numero: " + this.numero;
        return alert(this.texto);
    };
    return Default;
}());
var tuple = [
    ['url', 2],
    ['teste', 3]
];
function funcao() {
    tuple.forEach(function (element) {
        console.log(element[1]);
    });
}
funcao();
var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
})(CardSuits || (CardSuits = {}));
var x = 0;
function funcao2() {
    if (x === CardSuits.Clubs) {
        alert("True");
    }
    else {
        alert("False");
    }
    console.log(CardSuits.Clubs);
}
funcao2();
var obj = {
    name: 'Maurício',
    age: 25
};
var obj2 = {
    arroz: 25,
    teste: 32
};
var usuario = {
    name: 'jose',
    age: 25,
    active: false
};
var texto = 2;
function teste(numero, texto, active) {
}
