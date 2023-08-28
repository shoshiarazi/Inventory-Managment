import logo from './logo.svg';
import './App.css';
import data from './dataForProject.js';
import Site_header from './components/site_header';
import Filter_line from './components/filter_line';
import Footer from './components/footer';
import Product_details from './components/product_details';
import { useState } from 'react';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BodyComp from './components/bodyComp';
// function a()
// {
//   const b=3;
//   console.log(data);
//   console.log(b);

// }
function App() {
  let [currentComponent, setCurrentComponent] = useState(0);
  // let bodyComponents = [
  //   <Filter_line sendDataToParent={handleChildData} />,
  //   <Form sendDataToParent={handleChildData} />,
  //   <Product_details sendDataToParent={handleChildData} />
  // ]
  let [propsData, setPropsData] = useState();


  // const getBodyContent = () => {
  //   // if (addNewProductSelected) {
  //   //   return (
  //   //     <Form sendDataToParent={handleChildData} />
  //   //   )
  //   // }
  //   return (
  //     <Filter_line sendDataToParent={handleChildData} />
  //   )
  // }

  // const handleChildData = (data) => {
  //   setPropsData(data);
  // };
  const Title="Inventory Managment "


  //  a();
  return (
    
    <Router>
      <title>{Title}</title>
      {/* <Link to="/">Filter_line</Link> */}
      <Site_header />
      <Routes>
        <Route path="/" element={<BodyComp/>} />
        <Route path="/update_product" element={<Form />} />
        <Route path="/new_product" element={<Form />} />
        <Route path="/product_details" element={<Product_details />} />
      </Routes>
      <Footer />
    </Router>   //   <BrowserRouter>

    //   <Routes>
    //     <Route path="/"  component={Filter_line} />
    //     {/* <Route path="/about" component={About} />
    //     <Route path="/contact" component={Contact} /> */}
    //   </Routes>
    // </BrowserRouter>
    // <div>
    //   <Site_header />
    //   {getBodyContent()}
    //   {/* {bodyComponents[currentComponent]} */}
    //   {/* <Filter_line/> */}
    //   {/* <Product_details></Product_details> */}

    //   
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
