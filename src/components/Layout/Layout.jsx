import { Outlet } from 'react-router-dom';
import HeaderApp from '../Header/HeaderApp';
import FooterApp from '../Footer/FooterApp';
import CustomSwiper from '../CustomSwiper/CustomSwiper';

function Layout() {
  return (
    <>
      <HeaderApp />
      <main>
        <CustomSwiper/>
        <Outlet />
      </main>
      <FooterApp />
    </>
  );
}

export default Layout;