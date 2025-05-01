window.addEventListener("load", () => {

   // Cargar productos en localStorag
  cargarProductosEnLocalStorage();
});

function irATienda() {
  window.location.href = 'pages/tienda.html';
}

function irAOfertas() {
  window.location.href = '#ofertas';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn11').addEventListener('click', irATienda);
  document.getElementById('btn21').addEventListener('click', irAOfertas);
});

function cargarProductosEnLocalStorage() {
  const productos_tienda = [
    { nombre: "Zapatilla Hi-Tech Flex", precio: "$165.800", descripcion: "Zapatilla de alto rendimiento para actividades urbanas.", img: "/PRODUCTOS/HOMBRES/Z1/runner-casual-1.jpg", sexo: "hombre" }, 
    { nombre: "Tenis Dynamic Step", precio: "$112.400", descripcion: "Tenis dinámicos para entrenamiento diario.", img: "/PRODUCTOS/HOMBRES/Z1/runner-casual-2.jpg", sexo: "hombre" },
    { nombre: "Botín Rock Solid", precio: "$145.750", descripcion: "Botines resistentes para terrenos difíciles.", img: "/PRODUCTOS/HOMBRES/Z1/runner-casual-3.jpg", sexo: "hombre" },
    { nombre: "Sandalia Tropic Air", precio: "$42.500", descripcion: "Sandalias ligeras para climas cálidos.", img: "/PRODUCTOS/HOMBRES/Z1/runner-casual-4.jpg", sexo: "hombre" },
    { nombre: "Zapato Ejecutivo Light", precio: "$135.990", descripcion: "Zapatos elegantes y cómodos para oficina.", img: "/PRODUCTOS/HOMBRES/Z3/white-comfort-1.jpg", sexo: "hombre" },
    { nombre: "Tenis Skater Crew", precio: "$98.300", descripcion: "Tenis ideales para practicar skateboarding.", img: "/PRODUCTOS/HOMBRES/Z3/white-comfort-2.jpg", sexo: "hombre" },
    { nombre: "Zapatilla Foam Control", precio: "$125.000", descripcion: "Zapatillas con amortiguación avanzada.", img: "/PRODUCTOS/HOMBRES/Z3/white-comfort-3.jpg", sexo: "hombre" },
    { nombre: "Botín Winter Guard", precio: "$175.900", descripcion: "Botines diseñados para climas fríos.", img: "/PRODUCTOS/HOMBRES/Z3/white-comfort-4.jpg", sexo: "hombre" },   
    { nombre: "Mocasín Ejecutivo Plus", precio: "$108.800", descripcion: "Mocasines clásicos para reuniones formales.", img: "/PRODUCTOS/HOMBRES/Z4/hiking-soft-1.jpg", sexo: "hombre" },
    { nombre: "Zapatilla Sporty Edge", precio: "$115.700", descripcion: "Zapatillas deportivas con diseño moderno.", img: "/PRODUCTOS/HOMBRES/Z4/hiking-soft-2.jpg", sexo: "hombre" },
    { nombre: "Zapato Casual Breeze", precio: "$87.400", descripcion: "Zapatos casuales para uso diario.", img: "/PRODUCTOS/HOMBRES/Z4/hiking-soft-3.jpg", sexo: "hombre" },
    { nombre: "Tenis Ultra Grip", precio: "$140.000", descripcion: "Tenis con agarre superior para actividades al aire libre.", img: "/PRODUCTOS/HOMBRES/Z4/hiking-soft-4.jpg", sexo: "hombre" },
    { nombre: "Sandalia Aqua Move", precio: "$52.990", descripcion: "Sandalias resistentes al agua para verano.", img: "/PRODUCTOS/HOMBRES/Z5/white-classic-1.jpg", sexo: "hombre" },
    { nombre: "Zapatilla Fusion Tech", precio: "$152.300", descripcion: "Zapatillas tecnológicas para entrenamiento avanzado.", img: "/PRODUCTOS/HOMBRES/Z5/white-classic-2.jpg", sexo: "hombre" },
    { nombre: "Zapato Clásico Roy", precio: "$129.950", descripcion: "Zapatos clásicos con diseño atemporal.", img: "/PRODUCTOS/HOMBRES/Z5/white-classic-3.jpg", sexo: "hombre" },
    { nombre: "Tenis Urban Jump", precio: "$118.000", descripcion: "Tenis urbanos con estilo moderno.", img: "/PRODUCTOS/HOMBRES/Z5/white-classic-4.jpg", sexo: "hombre" },
    { nombre: "Botín DryWalker", precio: "$167.750", descripcion: "Botines impermeables para caminatas largas.", img: "/PRODUCTOS/HOMBRES/Z6/denin-drive-casual-1.jpg", sexo: "hombre" },
    { nombre: "Zapatilla Comfort Run", precio: "$135.200", descripcion: "Zapatillas cómodas para correr largas distancias.", img: "/PRODUCTOS/HOMBRES/Z6/denin-drive-casual-2.jpg", sexo: "hombre" },
    { nombre: "Tenis WindRunner", precio: "$146.400", descripcion: "Tenis aerodinámicos para corredores profesionales.", img: "/PRODUCTOS/HOMBRES/Z6/denin-drive-casual-3.jpg", sexo: "hombre" },
    { nombre: "Mocasín Daily Walk", precio: "$105.000", descripcion: "Mocasines cómodos para caminatas diarias.", img: "/PRODUCTOS/HOMBRES/Z6/denin-drive-casual-4.jpg", sexo: "hombre" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM1/types-mocasines-1.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM1/types-mocasines-2.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM1/types-mocasines-3.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM1/types-mocasines-4.webp", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM2/runner-pro-1.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM2/runner-pro-2.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM2/runner-pro-3.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM2/runner-pro-4.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM3/tenis-fly-up-1.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM3/tenis-fly-up-2.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM3/tenis-fly-up-3.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM3/tenis-fly-up-4.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM4/mocasines-casual-1.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM4/mocasines-casual-2.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM4/mocasines-casual-3.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM4/mocasines-casual-4.webp", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM5/adapt-bb-1.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM5/adapt-bb-2.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM5/adapt-bb-3.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM5/adapt-bb-4.jpg", sexo: "mujer" },
    { nombre: "Bersalle Fushion", precio: "$155.000", descripcion: "Chavas piel tranquila", img: "/PRODUCTOS/MUJERES/ZM5/adapt-bb-5.jpg", sexo: "mujer" },
  ];


  // Guardar o actualizar en localStorage
  localStorage.setItem("productos_tienda", JSON.stringify(productos_tienda));
}

