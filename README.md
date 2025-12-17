# Sistema de Compras

Sistema de gestión de compras que permite a los usuarios agregar productos a un carrito y realizar compras.

## Descripción

Este proyecto implementa un sistema de compras simple con tres clases principales: `Producto`, `Carrito` y `Usuario`. El sistema permite crear productos, agregarlos a un carrito de compras y procesar la compra final.

## Clases

### 1. Clase Producto

Representa un producto individual con sus características y precio.

#### Propiedades

-   `nombre` (string): El nombre del producto
-   `precio` (number): El precio unitario del producto
-   `cantidad` (number): La cantidad de unidades del producto

#### Métodos

##### `constructor(nombre, precio, cantidad)`

Crea una nueva instancia de Producto.

**Parámetros:**

-   `nombre` (string): El nombre del producto
-   `precio` (number): El precio unitario
-   `cantidad` (number): La cantidad de unidades

**Ejemplo:**

```javascript
const producto = new Producto("Laptop", 1200, 1);
```

##### `calcularTotal()`

Calcula el precio total del producto multiplicando el precio unitario por la cantidad.

**Retorna:** (number) El precio total del producto

**Ejemplo:**

```javascript
const producto = new Producto("Mouse", 20, 2);
console.log(producto.calcularTotal()); // 40
```

---

### 2. Clase Carrito

Gestiona una colección de productos y calcula el total de la compra.

#### Propiedades

-   `productos` (Array): Array que contiene todos los productos agregados al carrito

#### Métodos

##### `constructor()`

Crea una nueva instancia de Carrito con un array de productos vacío.

**Ejemplo:**

```javascript
const carrito = new Carrito();
```

##### `agregarProducto(producto)`

Agrega un producto al carrito de compras.

**Parámetros:**

-   `producto` (Producto): El producto que se va a agregar

**Ejemplo:**

```javascript
const producto = new Producto("Teclado", 50, 1);
carrito.agregarProducto(producto);
```

##### `calcularTotalCarrito()`

Calcula el total de todos los productos en el carrito sumando el total de cada producto.

**Retorna:** (number) El precio total de todos los productos en el carrito

**Ejemplo:**

```javascript
const total = carrito.calcularTotalCarrito();
console.log(total); // Suma de todos los productos
```

##### `vaciarCarrito()`

Elimina todos los productos del carrito, dejándolo vacío.

**Ejemplo:**

```javascript
carrito.vaciarCarrito();
```

---

### 3. Clase Usuario

Representa un usuario del sistema con su información personal y carrito de compras.

#### Propiedades

-   `nombre` (string): El nombre del usuario
-   `correo` (string): El correo electrónico del usuario
-   `carrito` (Carrito): El carrito de compras asociado al usuario

#### Métodos

##### `constructor(nombre, correo)`

Crea una nueva instancia de Usuario e inicializa su carrito de compras.

**Parámetros:**

-   `nombre` (string): El nombre del usuario
-   `correo` (string): El correo electrónico del usuario

**Ejemplo:**

```javascript
const usuario = new Usuario("Juan", "juan@example.com");
```

##### `agregarProductoAlCarrito(producto)`

Permite al usuario agregar un producto a su carrito de compras.

**Parámetros:**

-   `producto` (Producto): El producto que se desea agregar

**Ejemplo:**

```javascript
const producto = new Producto("Monitor", 300, 1);
usuario.agregarProductoAlCarrito(producto);
```

##### `finalizarCompra()`

Procesa la compra del usuario: calcula el total, muestra un mensaje de confirmación y vacía el carrito.

**Funcionalidad:**

1. Calcula el total de todos los productos en el carrito
2. Muestra un mensaje en consola con el nombre del usuario y el total
3. Vacía el carrito después de completar la compra

**Ejemplo:**

```javascript
usuario.finalizarCompra();
// Salida: "Usuario Juan ha realizado una compra por un total de 1240€"
```

## Ejemplo de uso completo

```javascript
// 1. Crear productos
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

// 2. Crear un usuario
const usuario = new Usuario("Juan", "juan@example.com");

// 3. Agregar productos al carrito del usuario
usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

// 4. Finalizar la compra
usuario.finalizarCompra();
// Salida: "Usuario Juan ha realizado una compra por un total de 1240€"
```

## Flujo del sistema

```
Producto → Carrito → Usuario
   ↓          ↓         ↓
nombre    productos  nombre
precio       ↓       correo
cantidad     ↓       carrito
   ↓     agregarProducto  ↓
calcularTotal  ↓     agregarProductoAlCarrito
           calcularTotalCarrito
           vaciarCarrito
                ↓
           finalizarCompra
```

## Relaciones entre clases

-   **Usuario** tiene un **Carrito**
-   **Carrito** contiene múltiples **Producto**
-   **Usuario** interactúa con su **Carrito** para agregar productos y finalizar compras
