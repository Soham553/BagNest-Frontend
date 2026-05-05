import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="bg-page min-h-screen text-fg font-sans selection:bg-act selection:text-white">
            <Navbar />
            <Hero />
            <div id="shop-section">
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default App;