//utils
import { data } from 'utils/sliderItems'

// components
import Header from "components/Header";
import InfoCardListContext from "components/InfoCardListContext";
import HomeShelf from "components/HomeShelf";
import Footer from "components/Footer";
import Newsletter from "components/Newsletter";
import MinicartProvider from 'contexts/Minicart';
import MinicartModal from 'components/MinicartModal';


function App() {
  return (
    <div className="App">
      <MinicartProvider>
        <Header />
        <div className="AppContent">
          <InfoCardListContext
            infoCards={data.infoCards}
            sliderSettings={data.sliderSettings}
          />
          <HomeShelf />
        </div>
        <Newsletter />
        <Footer />
        <MinicartModal />
      </MinicartProvider>
    </div>
  );
}

export default App;
