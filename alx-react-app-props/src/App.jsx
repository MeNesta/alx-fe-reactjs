import './App.css'
import Header from './components/Header'
import MainContent from './components/Maincontent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'  // ← Add this import
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
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
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    
      <Footer />
    </>
  )
}

export default App