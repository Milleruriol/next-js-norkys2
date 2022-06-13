import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const Layout =({children}) =>{
    return(
        <div className="antialiased bg-gradient-to-r">
        <TopNav/>
<Navbar/>
{children}
<Footer/>
        </div>
    )
}
export default Layout