import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import Header from "../../../Common/Header/Header";
import Footer from "../../../Common/Footer/Footer";
export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
