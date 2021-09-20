import style from './App.module.css'
import Categories from './components/NavBar/Categories/Categories';
import { NavBar} from './components/NavBar/NavBar';
import  CardList from './components/card/CardList';
import Footer from './components/Footer/Footer';
import NeedHelp from './components/Need Help/NeedHelp';
//import { CarouselComponent } from './components/Carousel.jsx/Carousel';

const App=()=> {

return (
  <div className={style['app']}>
    <NavBar />
    <Categories />
    {/* <CarouselComponent /> */}
  
    <CardList />
    <NeedHelp />
    <Footer />
  </div> 
)   
}

export default App;
