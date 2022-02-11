import './assets/css/app.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Section1 from "./components/Section1"
import LastProduct from "./components/LastProduct"
import Categorys from "./components/Categorys"
import ListaProductos from "./components/ListaProductos"

function App() {
  return (
    <div >
      <Header />
      <Section1  />
      <div className="categoryLastProduct">
      <LastProduct />
      <Categorys />
      </div>
      
      <ListaProductos />
      <Footer />
    </div>
  );
}

export default App;
