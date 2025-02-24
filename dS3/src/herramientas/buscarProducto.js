
//la informacion es el conjunto de objetos que se pasan ,los producos normales 

export function buscarProducto(nombre, informacion) {
    return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
  }

export function incrementarCantidad(informacion,nombre){ 
  return informacion.map(producto => {
    if(producto.nombre === nombre){   
      return { "nombre": producto.nombre, "cantidad":producto.cantidad+=1}
    }   
   
    return producto
  })  
}

export function obtenerCantidadTotal(informacion){
  let total = 0
  informacion.forEach(producto => total +=producto.cantidad );
  return total
}
  