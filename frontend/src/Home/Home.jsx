import Header from "../component/Headers/Header";
import FooterPage from "../component/Footers/FooterPage";
import PageDesing from "../MainPageDesing/PageDesing";
import { Outlet } from "react-router";


export default function Home() {

  return (
    <>
    <Header/>

    <Outlet/>

    <FooterPage/>
    </>
  );
}