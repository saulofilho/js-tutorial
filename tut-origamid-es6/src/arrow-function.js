/*
A principal diferença é o contexto do this. A arrow function não cria o próprio this

O this faz referência ao objeto criado pela função. A arrow function consegue ignorar isso, 
e manter como referência o objeto pai
*/

function upperName(name) {
    return name.toUpperCase();
}
upperName("Saulo");

const lowerCase = name => {
    return name.toLowerCase();
};
lowerCase("Saulo");

const countLetters = word => word.length;
countLetters("Saulo");
console.log(countLetters("Filho"));

//class
class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";
    }

    addActiveEvent() {
        //sem o arrow function não iria funcionar
        this.menuElement.addActiveEvent("click", event => event.targe.classList.add(this.activeClass)
        );
    }
}
const menu = new Menu(".principal");
menu.addActiveEvent();