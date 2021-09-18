import { useDevice } from "react-use-device";

// Components
import HeaderDesktop from "components/HeaderDesktop/index";
import HeaderMobile from "components/HeaderMobile";
import Footer from "components/Footer";

function App() {
  const { isTABLET, isMOBILE } = useDevice();

  return (
    <div className="App">
      {(isTABLET || isMOBILE)
        ?
        <HeaderMobile /> :
        <HeaderDesktop />
      }
      <Footer />
    </div>
  );
}

export default App;
