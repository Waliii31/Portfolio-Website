import AbsoluteImg from "./components/Absolute-img";
import Footer from "./components/Footer";
// import { ReusableCard } from "./components/ReusableCard";
// import FirstPost from './Images/FirstPost.png';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { TabsDemo } from "./components/Tabs";

export default function Home() {
  return (
    <>
    <Navbar/>
    <AbsoluteImg/>
    <div className="container-md">
      <Header/>
      <TabsDemo/>
      <Footer/>
    </div>
    </>
  );
}
