import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            margin: '0',
            padding: '0',
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            lineHeight: '1.6'
        }}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;