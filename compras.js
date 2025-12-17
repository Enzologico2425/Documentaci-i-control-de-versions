class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal() {
        return this.precio * this.cantidad;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotalCarrito() {
        return this.productos.reduce(
            (total, producto) => total + producto.calcularTotal(),
            0
        );
    }

    vaciarCarrito() {
        this.productos = [];
    }
}

/**
 * Clase que representa un usuario del sistema de compras.
 * Cada usuario tiene un nombre, correo electrónico y un carrito de compras asociado.
 */
class Usuario {
    /**
     * Constructor de la clase Usuario.
     * @param {string} nombre - El nombre del usuario.
     * @param {string} correo - El correo electrónico del usuario.
     */
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.carrito = new Carrito();
    }

    /**
     * Agrega un producto al carrito de compras del usuario.
     * @param {Producto} producto - El producto que se va a agregar al carrito.
     */
    agregarProductoAlCarrito(producto) {
        this.carrito.agregarProducto(producto);
    }

    /**
     * Finaliza la compra del usuario.
     * Calcula el total del carrito, muestra un mensaje con el total de la compra
     * y vacía el carrito después de finalizar.
     */
    finalizarCompra() {
        const total = this.carrito.calcularTotalCarrito();
        console.log(
            `Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`
        );
        this.carrito.vaciarCarrito();
    }
}

const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
