
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main" className="flex-grow" role="main">
        {children}
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Layout;
