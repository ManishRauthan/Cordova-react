import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import Activites from "./Component/Activities";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
