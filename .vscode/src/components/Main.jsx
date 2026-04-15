const Main = () => {
  return (
    <main className="main" id="inicio">
      <h2>Frutas con Mucho Sabor</h2>
      <p>
        Bienvenido a la pagina donde las frutas entran frescas, dulces y con
        bastante juguito. Aqui la manzana siempre roba miradas y el banano no
        pasa desapercibido.
      </p>
      <div className="image-row">
        <div className="image-card">
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80"
            alt="Manzana"
          />
        </div>
        <div className="image-card">
          <img
            src="https://fruittoday.com/wp-content/uploads/2022/08/beneficios-salud-manzana.jpg"
            alt="Manzana 2"
          />
        </div>
      </div>
      <p>
        Dicen que una buena fruta entra por los ojos, pero estas tambien
        provocan una segunda mirada.
      </p>
    </main>
  );
};

export default Main;
