// src/components/Productos.jsx
import React, { useState } from 'react';
import './Productos.css';

const Productos = () => {
  // Estado para los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para eliminar productos del carrito
  const eliminarDelCarrito = (producto) => {
    setCarrito(carrito.filter(item => item.nombre !== producto.nombre));
  };

  return (
    <div className="productos-container">
      <h2>Nuestra Colección de Productos</h2>

      {/* Mostrar carrito */}
      <div className="carrito">
        <h3>Carrito de Compras</h3>
        <p>Productos en el carrito: {carrito.length}</p>
        {carrito.length > 0 && (
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio}
                <div className="botones">
                  <button onClick={() => eliminarDelCarrito(producto)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="product-list">
        {/* Producto 1 */}
        <div className="product-item">
          <h3>Reloj de Lujo</h3>
          <img src="https://down-co.img.susercontent.com/file/sg-11134201-7rceb-ls8le2zhimyj85" alt="Reloj de Lujo" />
          <p>Precio: $500</p>
          <div className="botones">
            <button onClick={() => agregarAlCarrito({ nombre: 'Reloj de Lujo', precio: 500 })}>Agregar al Carrito</button>
            <button onClick={() => eliminarDelCarrito({ nombre: 'Reloj de Lujo', precio: 500 })}>Eliminar</button>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="product-item">
          <h3>Anillo de Oro</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjKKCpbGi3d5apBM6U2LtJVP2XJY_hKW3lg&s" alt="Anillo de Oro" />
          <p>Precio: $300</p>
          <div className="botones">
            <button onClick={() => agregarAlCarrito({ nombre: 'Anillo de Oro', precio: 300 })}>Agregar al Carrito</button>
            <button onClick={() => eliminarDelCarrito({ nombre: 'Anillo de Oro', precio: 300 })}>Eliminar</button>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="product-item">
          <h3>Cadena de Plata</h3>
          <img src="https://kevins.com.co/img/productos/0570001273.jpg" alt="Cadena de Plata" />
          <p>Precio: $200</p>
          <div className="botones">
            <button onClick={() => agregarAlCarrito({ nombre: 'Cadena de Plata', precio: 200 })}>Agregar al Carrito</button>
            <button onClick={() => eliminarDelCarrito({ nombre: 'Cadena de Plata', precio: 200 })}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
