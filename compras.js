/**
 * Clase Producto
 * Representa un artículo individual con sus propiedades de venta
 * 
 * @class
 * @classdesc Almacena la información de un producto incluyendo nombre, precio unitario y cantidad
 */
class Producto {
  /**
   * Crea una instancia de la clase Producto
   * 
   * @constructor
   * @param {string} nombre - El nombre del producto
   * @param {number} precio - El precio unitario del producto en euros
   * @param {number} cantidad - La cantidad de unidades del producto
   * 
   * @example
   * const producto = new Producto("Laptop", 1200, 1);
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /**
   * Calcula el costo total del producto multiplicando precio por cantidad
   * 
   * @returns {number} El total del producto (precio × cantidad)
   * 
   * @example
   * const producto = new Producto("Mouse", 20, 2);
   * const total = producto.calcularTotal(); // Retorna 40
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Clase Carrito
 * Gestiona la colección de productos que un usuario desea comprar
 * 
 * @class
 * @classdesc Proporciona funcionalidades para agregar productos, calcular totales y vaciar el carrito
 */
class Carrito {
  /**
   * Crea una instancia vacía de la clase Carrito
   * 
   * @constructor
   * 
   * @example
   * const carrito = new Carrito();
   */
  constructor() {
    this.productos = [];
  }

  /**
   * Añade un producto al carrito
   * 
   * @param {Producto} producto - La instancia del producto a agregar
   * @returns {void}
   * 
   * @example
   * const producto = new Producto("Laptop", 1200, 1);
   * carrito.agregarProducto(producto);
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el costo total de todos los productos en el carrito
   * 
   * @returns {number} La suma del costo total de todos los productos
   * 
   * @example
   * const total = carrito.calcularTotalCarrito(); // Retorna la suma total
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Elimina todos los productos del carrito dejándolo vacío
   * 
   * @returns {void}
   * 
   * @example
   * carrito.vaciarCarrito();
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
