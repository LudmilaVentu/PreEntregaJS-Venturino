
let nombre = prompt ("Cómo te llamas?")
let confirmar = confirm("Confirmas que aceptas los terminos y condiciones?")
alert("Bienvenido "+nombre+" a Entre Hilos")


const carrito = [];

console.log(carrito);

const ingresarDatos = () => prompt('Ingrese el nombre del producto.');


const agregarProducto = () => {
	let confirmacion = confirm('Quieres agregar un producto?'),
		producto;

	while (confirmacion) {
		producto = ingresarDatos();

		console.log(producto);

		if (!carrito.includes(producto) && producto !== null && producto !== '') {
			carrito.push(producto);
			alert("Se agrego un producto '", producto);
			console.log(carrito);
		} else {
			alert("El producto ya se encuentra en el carrito '", producto, true);

			console.log(carrito);
		}


		confirmacion = confirm('¿Quieres agregar un nuevo producto?');
	}
};

agregarProducto();

console.log(carrito.join(', '))
alert(("Le agradecemos su compra. Usted va a comprar los siguientes productos: "+carrito.join(", ")))

