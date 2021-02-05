// import logo from './logo.svg';
import './App.css';

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
      <ul style={{textAlign: "left" }}>
      {  props.dishes.map((dish) => (<li>{dish}</li>))}
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

const dishes = [ "Macaroni and Cheese", "Salmon", "Tofu with Vegetables" ];

// dishes.map((dish) => console.log(dish)); put this inside JSX expression.

function App() {
  return (
    <div className="App">
      <Header name="Sanjeev Kapoor" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
