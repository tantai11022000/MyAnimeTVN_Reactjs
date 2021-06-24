import ContentMainWeb from "../MainContent/ContentMainWeb";
import Header  from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrap-main-website">
      <Header></Header>
      <ContentMainWeb></ContentMainWeb>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
