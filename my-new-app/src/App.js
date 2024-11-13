import React from 'react';
import Layout from './components/Layout/Layout'; // 레이아웃 컴포넌트 import
import TwoGrids from './components/TwoGrids';
import MainCards from './components/Card/MainCards';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Layout>
      {/* 기존의 Header 및 Footer는 Layout에서 처리함 */}

      <Container className="my-4">
        <TwoGrids />
      </Container>

      <Container className="my-4">
        <MainCards />
      </Container>
    </Layout>
  );
}

export default App;