class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento; 
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const precioFinal = this.precio - (this.precio * (this.descuento / 100));
        return precioFinal.toFixed(2);
    }
}

const producto1 = new Producto(
    "Laptop Gamer", 
    3500.00, 
    10, 
    "https://via.placeholder.com/250x180?text=Laptop+Gamer"
);

const producto2 = new Producto(
    "Smartphone 5G", 
    1800.00, 
    15, 
    "https://via.placeholder.com/250x180?text=Smartphone+5G"
);

const producto3 = new Producto(
    "Audífonos Bluetooth", 
    250.00, 
    20, 
    "https://via.placeholder.com/250x180?text=Audifonos"
);


const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
   
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: S/ <span id="precio-${index}">${producto.precio.toFixed(2)}</span></p>
        <button id="btn-descuento-${index}">Aplicar Descuento</button>
    `;

    contenedor.appendChild(tarjeta);
});

catalogo.forEach((producto, index) => {
    const boton = document.getElementById(`btn-descuento-${index}`);
    const elementoPrecio = document.getElementById(`precio-${index}`);

   
    boton.addEventListener("click", () => {
       
        const nuevoPrecio = producto.calcularPrecioFinal();

       
        elementoPrecio.textContent = `${nuevoPrecio} (¡Descuento de ${producto.descuento}% aplicado!)`;
        elementoPrecio.style.color = "#d9534f";
        elementoPrecio.style.fontWeight = "bold";

       
        boton.disabled = true;
        boton.textContent = "Descuento Aplicado";
    });
});