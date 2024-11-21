// src/redux/reducer.js
const carritoReducer = (state = [], action) => {
    switch (action.type) {
      case 'AGREGAR_AL_CARRITO':
        return [...state, action.payload];
      case 'ELIMINAR_DEL_CARRITO':
        return state.filter((item) => item.nombre !== action.payload.nombre);
      default:
        return state;
    }
  };
  
  export default carritoReducer;
  