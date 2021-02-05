// import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header> 
      <h1> The Biryani Mahal</h1>
    </header>
  )
}

function Main() {
  return (
    <section> 
      <p>We serve the most delicious biryani in varanasi city.</p>
      <p> </p>
    </section>
  )
}

function Footer() {
  return (
    <footer> 
      <p> Working Hours: 9:00 AM to 8:00 PM </p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
