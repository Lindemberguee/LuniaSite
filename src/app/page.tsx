import BadgeLinks from "@/components/Badges/Badges";
import { Dashboard } from "@/components/Dashboard/dash";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu";
import BoxCharacters from "@/components/OverView/Box";
import SectionImages from "@/components/Section/SectionImages";
import Section from "@/components/Section/SectionTable";

export default function Home() {
  return (
    <div className="">
      <div className="relative bg-cover bg-center  h-screen text-white " style={{backgroundImage: "url('https://i.ytimg.com/vi/02mC8BOOaZM/maxresdefault.jpg')", backgroundAttachment: "fixed"}}>
        <Menu/>
        <Header/>
        <Dashboard/>
        <Section/>
        <SectionImages/>
        <BadgeLinks/>
        <BoxCharacters/>
      </div>
    </div>
  );
}
