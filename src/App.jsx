import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName:
      "https://imgs.search.brave.com/th49053RqEwWKHxe2IH-HxvrpgqRixIqdvj1CQQko7I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mbGF2/b3J0aGVtb21lbnRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy9mb2Nh/Y2NpYS1waXp6YS0x/LTY4MHgxMDE5Lmpw/Zw",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName:
      "https://imgs.search.brave.com/2BohU06X_pqNhamJnZv4OV3XDJS8PSlU2I1LZYRkwO4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NzQxNTM5L3Bob3Rv/L3BpenphLW1hcmdo/ZXJpdGEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTF4anJP/U0lQMjNERFgyR3hn/dHZxeHhoZ29JWDlK/SUxrcVdPRW1mLUxT/OHM9",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName:
      "https://imgs.search.brave.com/7ijaA5kPp7fuiWRnRpc8FylREBFDBGL04TV23xjz1XE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnBp/Y2NvbGVyaWNldHRl/Lm5ldC9waWNjb2xl/cmljZXR0ZS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8xMS8z/MjM1X1BpenphLmpw/Zz9yZXNpemU9ODk1/LDYxNiZzc2w9MQ",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName:
      "https://imgs.search.brave.com/0SrX81CYlcXGZRLTKHYyRK1jIt7fsnyMcKrRNmvwhqY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0YmV0dGVyLmRl/L3NpdGVzL2VhdGJl/dHRlci5kZS9maWxl/cy9zdHlsZXMvZnVs/bF93aWR0aF90YWJs/ZXRfNF8zL3B1Ymxp/Yy8yMDIzLTA0L3Bp/enphX2Z1bmdoaV84/ODIzLmpwZz9oPTQ1/MjFmZmYwJml0b2s9/dThwQnBpX2s",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName:
      "https://imgs.search.brave.com/mPAfkPzMUHE_XgkIeRJ4HtuY-FaoKyODZ8RJSR4RRQk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGIvNTIvZWQvMDYv/cGl6emEtc2FsYW1p/bm8uanBn",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    photoName:
      "https://imgs.search.brave.com/IMFF_llUQhMScd2IIqB3kTgW9pTcSwRX8KK0Gsf1xDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9h/emFraDl4d0RWZzly/dWd5Y1ZDV0lTYVhf/WUk9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9Qcm9zdWl0dG9Q/aXp6YV9LUl9UZXN0/ZXItN2JhZTA2ZTdi/MDJhNGFjZDlkNWEx/MDA4M2NiOTRjNWUu/anBn",
    price: 18,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Rohan Pizza Menu</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  return (
    <div>
      <main className="menu">
        <h2>our menu </h2>
      </main>
      <br />
      {pizzas && (
        <> 
          <h3 className="menu">Best pizza you have never ate before</h3>
          <br />
          <div className="pizzas">
            {pizzas.map((pizza) => {
              return (
                <li className="pizza" key={pizza.name}>
                  <img src={pizza.photoName} alt={name} />
                  <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <p>{pizza.soldOut?"SOLD OUT":pizza.price}</p>
                  </div>
                </li>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

const Order = ({closeHour}) => {
  return (
    <div className="order">
          <p>
            we are open until until {closeHour}:00.come visit or order online 
          </p>
          <button className="btn">order </button>
        </div>
  )
}

export default App;
