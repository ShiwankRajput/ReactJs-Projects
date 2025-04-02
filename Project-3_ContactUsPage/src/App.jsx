import './App.css'
import Navigation from './components/Navbar/Navigation'
import Header from './components/ContactHeader/Header'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  
  return(
    <>
    
      <div>
        <Navigation></Navigation>
        <div className="mainContainer">
          <Header></Header>
          <ContactForm></ContactForm>
        </div>
      </div>
    
    </>
  )

}

export default App
