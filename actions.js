// src/redux/actions.js
export const agregarAlCarrito = (producto) => {
    return {
      type: 'AGREGAR_AL_CARRITO',
      payload: producto,
    };
  };
  
  export const eliminarDelCarrito = (producto) => {
    return {
      type: 'ELIMINAR_DEL_CARRITO',
      payload: producto,
    };
  };
  