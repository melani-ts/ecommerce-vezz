  function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  window.addEventListener("DOMContentLoaded", () => {
    const folder = getParameterByName("folder");
    if (!folder) return;

    const basePath = `../PROUCTOS/${folder}`;
    const thumbnailsContainer = document.getElementById("thumbnails");
    const mainImage = document.getElementById("img_producto");

    for (let i = 1; i <= 6; i++) {
      const imgPath = `${basePath}-${i}.jpg`;
      const thumb = document.createElement("img");

      thumb.src = imgPath;
      thumb.alt = `Vista ${i}`;
      thumb.style.cursor = "pointer";
      thumb.onerror = () => thumb.remove(); 

      thumb.onclick = () => {
        mainImage.src = imgPath;
      };

      thumbnailsContainer.appendChild(thumb);

      if (i === 1) {
        mainImage.src = imgPath;
      }
    }
  });


  function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const folder = getParameterByName("folder");
    if (!folder) return;
  
    const basePath = `../PROUCTOS/${folder}`;
    const thumbnailsContainer = document.getElementById("thumbnails");
    const mainImage = document.getElementById("img_producto");
  
    for (let i = 1; i <= 6; i++) {
      const imgPath = `${basePath}-${i}.jpg`;
      const thumb = document.createElement("img");
      thumb.src = imgPath;
      thumb.alt = `Vista ${i}`;
      thumb.style.cursor = "pointer";
  
      // Si no existe, no se muestra
      thumb.onerror = () => thumb.remove(); 
  
      thumb.onclick = () => {
        mainImage.src = imgPath;
      };
  
      thumbnailsContainer.appendChild(thumb);
  
      if (i === 1) {
        mainImage.src = imgPath;
      }
    }
  
    // 👇 Agregar al carrito
    const botonAgregar = document.getElementById("btnAgregarCarrito");
    if (botonAgregar) {
      botonAgregar.addEventListener("click", () => {
        const imagen = mainImage.src;
        const nombre = document.querySelector("h4")?.textContent || "Producto sin nombre";
        const precio = document.getElementById("precio")?.textContent || "$0";
        const descripcion = document.getElementById("descripcion")?.textContent || "Sin descripción";
  
        const producto = {
          nombre,
          precio,
          descripcion,
          imagen
        };
  
        let carrito = JSON.parse(localStorage.getItem("productos")) || [];
        carrito.push(producto);
        localStorage.setItem("productos", JSON.stringify(carrito));
  
        alert("Producto agregado al carrito");
      });
    }
  });
  
