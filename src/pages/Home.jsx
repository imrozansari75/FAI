import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Career from '../components/Career';
import CTA from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Career />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;
