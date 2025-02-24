export const agregarProducto = (producto) => {
    // Recuperar los productos existentes desde el LocalStorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Agregar el nuevo producto
    productos.push(producto);

    // Guardar el nuevo array de productos en LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    console.log('Producto agregado correctamente');
};
