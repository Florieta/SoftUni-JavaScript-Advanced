class Circle {
    constructor(radius){
        this._radius = radius
    };
    get radius(){
        return this._radius
    };
    set radius(value){
        this._radius = value
    };
    get diameter(){
        return this.radius * 2
    };
    set diameter(value){
        this.radius = value / 2
    };
    get area(){
        return Math.PI * (this.radius)**2

    };
}