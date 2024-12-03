let asignarEventos = ()=>{
    let btnIzquierda = document.getElementById('elBotonIzquierda');
    btnIzquierda.addEventListener('click', crearObjeto1);
    let btnDerecha = document.getElementById('elBotonDerecha');
    btnDerecha.addEventListener('click', crearObjeto2);
    let elBtnCalcular = document.getElementById('btnCalcular');
    elBtnCalcular.addEventListener('click', integracion);
}

function ProductoFnConstructora(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

let crearObjeto1= ()=>{
    let bebidaAlcoholica = new ProductoFnConstructora('vino de chile', 20000);
    console.log(` El precio de ${bebidaAlcoholica.nombre}  es de ${ bebidaAlcoholica.precio}`);
}




class Producto{
    constructor(nombre , precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    verPrecioProducto(){
        console.log(` El precio de ${this.nombre} es de ${ this.precio}`);
    }
}


let crearObjeto2 = ()=>{
    let bebidaAlcoholica2 = new Producto ( 'vino de chile ', 20000);
    bebidaAlcoholica2.verPrecioProducto();
}


class Carrito{
    constructor(productos, valorFinalAPagar){
        this.productos = productos;
        this.valorFinalAPagar = valorFinalAPagar;
    }
    // ENTRADA
    agregarProductos(unProducto){
        this.productos.push(unProducto);
    }
    // PROCESO
    calcularTotalCompra(){
        let precioParcial = 0;
        for(const producto of this.productos){ // this para hacer referencia al arreglo que se construya dentro de este objeto
            // console.log(producto);
            precioParcial = producto.precio * producto.cantidad;
            this.valorFinalAPagar = this.valorFinalAPagar + precioParcial; //acumulador
            // console.log(this.valorFinalAPagar);
        }
    }
    //SALIDA
    finalizarCompra(){
        let elTxtValorFinalAPagar = document.getElementById('txtValorFinalAPagar');
        elTxtValorFinalAPagar.innerText = this.valorFinalAPagar;
    }

    mostrarDetallesCompra(){
        let mensaje = '';
        let elPrfDetallesCompra = document.getElementById('prfDetallesCompra');
        for (const producto of this.productos){
            if(producto.cantidad > 0){
                mensaje = mensaje + `Producto: ${producto.nombre}, Precio: ${producto.precio} , Cantidad: ${producto.cantidad} <br>`;
            }
        }// fin for
        elPrfDetallesCompra.innerHTML = mensaje;
    }

}


//ENTRADA 
let atraparDatos = ()=>{
    let objCarrito = new Carrito([],0); // creamos un objeto carrito, con arreglo de productos vacio y valor final a pagar 0
    //ENTRADA
    let valorLeche = 1000;
    let cantidadLeche = Number(document.getElementById('txtLeche').value); 
    let objLeche = new Producto('Leche', valorLeche, cantidadLeche);
    objCarrito.agregarProductos(objLeche);
    
    let valorPan = 2000;
    let cantidadPan = Number(document.getElementById('txtPan').value);
    let objPan = new Producto('Pan de Molde', valorPan, cantidadPan);
    objCarrito.agregarProductos(objPan);

    let valorQueso = 1200;
    let cantidadQueso = Number(document.getElementById('txtQueso').value);
    let objQueso = new Producto('Queso', valorQueso, cantidadQueso);
    objCarrito.agregarProductos(objQueso);

    let valorMermelada = 890;
    let cantidadMermelada = Number(document.getElementById('txtMermelada').value);
    let objMermelada = new Producto('Mermelada', valorMermelada, cantidadMermelada);
    objCarrito.agregarProductos(objMermelada);

    let valorAzucar = 1300;
    let cantidadAzucar = Number(document.getElementById('txtAzucar').value);
    let objAzucar = new Producto('Azucar', valorAzucar, cantidadAzucar);
    objCarrito.agregarProductos(objAzucar);
    //PROCESO
    objCarrito.calcularTotalCompra();
    //SALIDA
    objCarrito.finalizarCompra();
    return objCarrito;
}


let integracion = ()=>{
    let elCarritoDeCompras = atraparDatos();
    console.log(elCarritoDeCompras);
    elCarritoDeCompras.mostrarDetallesCompra();
}