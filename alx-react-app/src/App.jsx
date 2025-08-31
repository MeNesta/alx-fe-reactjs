import './App.css'
import Header from './components/Header'
import MainContent from './components/Maincontent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'  // ← Add this import

function App() {
  return (
    <>
      <Header />
      <MainContent />
      
      {/* Add the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      <Footer />
    </>
  )
}

export default App