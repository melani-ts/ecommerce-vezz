  document.addEventListener("DOMContentLoaded", () => {
    const btnHombre = document.querySelector(".btn-category.hombre");
    const btnMujer = document.querySelector(".btn-category.mujer");
    const productos = document.querySelectorAll(".div_cart");

    btnHombre.addEventListener("click", () => {
      productos.forEach(producto => {
        if (producto.classList.contains("men")) {
          producto.style.display = "flex";
        } else {
          producto.style.display = "none";
        }
      });
    });

    btnMujer.addEventListener("click", () => {
      productos.forEach(producto => {
        if (producto.classList.contains("women")) {
          producto.style.display = "flex";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });
