// import logo from './logo.svg';
import './App.css';
import restaurant from "./tasty_biryani.png";
import egg from "./egg_biryani.jpeg";
import chicken from "./chicken_biryani.jpeg";

function Header(props) {
  return (
    <header> 
      <h1>{props.name}'s Kitchen </h1>
    </header>
  )
}

function Main(props) {
  return (
    <section> 
      <p>We serve the most {props.adjective} biryani in varanasi city.</p>
      <img src={restaurant} height={200} alt="tasty handi chicken biryani at a restaurant table" />
      <img src={egg} height={200} alt="egg and lamb biryani with roasted lamb and half baked rice" />
      <img src={chicken} height={200} alt="chicken hot and spicy biryani" />
      <ul style={{textAlign: "left" }}>
      {  props.dishes.map((dish) => (<li key={dish.id}>{dish.title}</li>))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer> 
      <p> Working Hours: 9:00 AM to 8:00 PM </p>
      <p>Copyright {props.year} </p>
    </footer>
  )
}

const dishes = [ "Spicy Chicken Biryani", "Muslim Style Mutton Biryani", "Lamb-Egg Roasted Biryani", "Minced Meat Keema Biryani", "Kolkata Style Dum Chicken Biryani"];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

// dishes.map((dish) => console.log(dish)); put this inside JSX expression.

function App() {
  return (
    <div className="App">
      <Header name="Sanjeev Kapoor" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
