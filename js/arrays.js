/*Creo la clase carritoCompras*/
class CarritoCompras{
  constructor(id,prod,precio,stock){
    this.id = id;
    this.prod = prod;
    this.precio = precio;
    this.stock = stock
  }
}
const instrumentos = [];
/*
  const guitarrasAcusticas= [];
  const pianos = [];
  const bajo = [];
  const guitarrasElectricas = []
*/

let id = parseInt(prompt("ID:"));
let nombreInstrumento = prompt("Ingresar el instrumento: ");
let precioInstrumento = parseInt(prompt("Precio del instrumeto:"));
let stock = parseInt(prompt("Cantidad de stock: "));


/*Agregamos los productos al array con su metodo push*/
instrumentos.push(new CarritoCompras(1,"Guitarra electrica",3500, 10));
instrumentos.push(new CarritoCompras(2,"Guitarra acustica",2400,8));
instrumentos.push(new CarritoCompras(3,"Piano",6500,5));
instrumentos.push(new CarritoCompras(4,"Violin",4200,20));
/*cargamos el array atraves de su metodo constructor*/
instrumentos.push(new CarritoCompras(id,nombreInstrumento,precioInstrumento,stock));

function ordenarPorPrecio(a,b){
  return (b.precio - a.precio);
}

console.log(instrumentos.sort(ordenarPorPrecio));

/*recorremos el array y mostramos los datos ingresados por consola*/
for(const items of instrumentos){
  console.log(`ID: ${items.id} producto: ${items.prod} precio: ${items.precio} stock disponible ${items.stock}`)
}