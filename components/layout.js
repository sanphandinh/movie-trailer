import Header from './header';
import Footer from './footer';

const Layout = ({ children, homeSlider }) => (
  <div className="wrapper">
    <Header />
    {homeSlider}
    <main className="content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
