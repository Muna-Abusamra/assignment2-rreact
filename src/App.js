import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import RecentCourses from "./components/RecentCourses";
import CardsBeauty from "./components/CardsBeauty";
import TrackRecord from "./components/TrackRecord";
import SuccessStories from "./components/SuccessStories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Search />
            <RecentCourses />
            <CardsBeauty />
            <TrackRecord />
            <SuccessStories />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
