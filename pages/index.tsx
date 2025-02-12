import "../styles/App.css";
import Container from "../components/Container";
import MainSection from "../components/MainSection";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <MainSection />
    </Container>
  );
};

export default Home; 