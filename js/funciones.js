/*
Varibles necesarias estimadas para el proyecto, una tienda de compra e-commerce de instrumentos musicales
  1- creacion de un carrito de compras que muestre la cantidad de productos tenemos  selecionados.
  2- A su vez ir mostrando la suma parcial de los items agregados al carrito.
  3- Poder eliminar del carrito de compras un item o varios, y actualizar el total de la compra.
  4- Filtros por marca y precio. 
*/

let costoEnvio = 200;

let producto = prompt("que producto desea comprar?");
  
let precioProducto = parseInt(prompt("Valor del producto:"));

/*valor que tiene que incrementarse o decrementar a medida que vamos agregado items al carrito de compras*/
let totalCompra = null;

/*variable para ir acumulando la cantidad de productos agregados*/
let cantidadProductos;

/*en el caso que el usuario quiera seguir haciendo compras, pondria dentro de un condicional  
prompt("desea realizar alguna compras más? ");*/

function calcularPrecio(producto,precio,costoEnvio){
   /*variable para calcular el precio del prod mas el iva*/
   let iva = 0.21;

  /*calculamos el valor del precio con el 21 de iva*/
  let precioConIva = (precioProducto * iva);
  
  //mostramos el valor total de la compra con el iva y el costo de envio
   totalCompra = (totalCompra + precioProducto) + costoEnvio + precioConIva;

   let compra = `El valor de tu compra es de: ${totalCompra}`;
   return compra;
}

let precioFinal = (calcularPrecio(producto,precioProducto,costoEnvio));
alert(precioFinal);


