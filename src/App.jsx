import './scss/app.scss';
import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MobileMenu from './Components/MobileMenu/MobileMenu';

import Home from './pages/home';

function App() {
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const herosInfo = [
    {
      title: 'Hungry for your growth',
      subtitle: 'Performance digital marketing and customer acquisition in the US and Asia',
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home hero={herosInfo[0]} />
      </div>

      {/* <MobileMenu /> */}
      <Footer />
    </div>
  );
}

export default App;