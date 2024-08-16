import { Footer } from '../components/Footer';
import Services from '../components/Service';
import AboutUs from '../components/Aboutus';
import Appbar from '../components/Appbar';
import { Cards } from '../cardsection/cards';
import { GetReadycard } from '../components/GetReadycard';


export const Home= ()=>{
  return <div >
        <div>
          <Appbar/>
       
      <div>
      <Cards/>
    </div>
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <GetReadycard/>
      </div>
      <div>
        <AboutUs/>
      </div>
    <Footer/>
    </div>
}