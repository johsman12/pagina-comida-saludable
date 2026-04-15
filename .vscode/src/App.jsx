import React from 'react';
import './App.css';

function App() {
  // Lista de productos dinámica
  const productos = [
    { id: 1, nombre: 'Ensalada Fresh', precio: '$10.000', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
    { id: 2, nombre: 'Mix de Frutas', precio: '$9.000', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300' },
    { id: 3, nombre: 'Jugo Detox', precio: '$8.000', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300' },
    { id: 4, nombre: 'Bowl Saludable', precio: '$12.000', img: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=300' },
  ];

  // Función simple para manejar clics (luego puedes usar React Router)
  const irALogin = () => {
    console.log("Redirigiendo a Login...");
    // window.location.href = '/login.html'; // Solo si usas archivos HTML separados
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header className="encabezado">
        <div className="navbar">
          <h1>Nutrick</h1>
          <p>TU SALUD EMPIEZA AQUÍ</p>
        </div>
        
        <input className="buscador" type="text" placeholder="Buscar producto" />

        <div className="iconos-container">
          <div className="iconos1" onClick={irALogin} style={{ cursor: 'pointer' }}>
            <img className="user" src="/Imagenes/avatar.png" alt="usuario" />
            <p className="puser">Iniciar Sesión</p>
          </div>
          <div className="iconos2">
            <img className="carrito" src="/Imagenes/carrito-de-compras.png" alt="carrito" />
          </div>
        </div>
      </header>

      {/* NAVEGACIÓN */}
      <nav className="menu-nav">
        <button onClick={() => window.scrollTo(0, 0)}>Inicio</button>
        <button>Comprar</button>
        <button onClick={irALogin}>Iniciar Sesión</button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="contenedor">
        <div className="titulo">Productos Saludables</div>
        
        <div className="productos-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="producto-card">
              <img src={prod.img} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p>{prod.precio}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="pie-pagina">
        <h2>NUTRICK</h2>
        <p>© 2026 Comida Saludable</p>
        <p>Página creada por NUTRICK S.A</p>
      </footer>
    </div>
  );
}

export default App;