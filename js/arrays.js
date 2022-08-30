class CarritoCompras{
  constructor(id,prod,precio){
    this.id = id;
    this.prod = prod;
    this.precio = precio;
  }
  vender()
}

const instrumentos = [];

let id = parseInt(prompt("ID:"));
let nombreInstrumento = prompt("Ingresar el instrumento: ");
let precioInstrumento = parseInt(prompt("Precio del instrumeto:"));

instrumentos.push(new CarritoCompras(1,"Guitarra electrica",3500));
instrumentos.push(new CarritoCompras(2,"Guitarra acustica",2400));
instrumentos.push(new CarritoCompras(3,"Piano",6500));
instrumentos.push(new CarritoCompras(4,"Violin",4200));
instrumentos.push(new CarritoCompras(id,nombreInstrumento,precioInstrumento));

for(const items of instrumentos){
  console.log(`ID: ${items.id} producto: ${items.prod} precio: ${items.precio}`)
}