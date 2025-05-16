import './App.css'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Product from '../Pages/Product/Product';
import Layout from '../Layout/Layout';
import Category from '../Pages/Category/Category';

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path='/category/:id' element={<Category/>}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
    </>
  )
}

export default App