import { useState } from 'react'
import Header from './Components/Header'
import SimpleSlider from './Components/Slider'
import Buyer from './Components/Buyer'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <SimpleSlider/>
    <Buyer/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default App
