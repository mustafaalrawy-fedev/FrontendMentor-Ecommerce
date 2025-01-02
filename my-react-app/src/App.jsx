import LandingPage from './layouts/landing/LandingPage';
import MenuSidebar from './layouts/navBar/MenuSidebar';
import NavBar from './layouts/navBar/NavBar';

const App = () => {
  return (
    <>
      <MenuSidebar />
      <div className='container'>
        <NavBar />
        <LandingPage />
      </div>
    </>
  );
};

export default App;
