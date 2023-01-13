//model for defining ingredient:

export class Ingredient {
    /*
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }*/

    //++++++++++ SAME AS ABOVE :) (so 2 public properties are auto created and assigned vals from constructor params)++++++
    constructor(public name:string, public amount:number){}



}