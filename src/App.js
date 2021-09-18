//utils
import { data } from 'utils/sliderItems'

// components
import Header from "components/Header";
import InfoCardListContext from "components/InfoCardListContext";
import HomeShelf from "components/HomeShelf";
import Footer from "components/Footer";

import MinicartProvider from 'contexts/Minicart';

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
        <Footer />
      </MinicartProvider>
    </div>
  );
}

export default App;
