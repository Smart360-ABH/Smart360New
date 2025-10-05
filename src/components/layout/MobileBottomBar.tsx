
import { Link } from 'react-router-dom';

const MobileBottomBar = () => {
  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white shadow-lg rounded-full px-3 py-2 flex justify-between items-center">
        <Link to="/portfolio" className="flex-1 text-center px-3 py-2 text-sm font-medium">Туры</Link>
        <Link to="/contact" className="flex-1 text-center px-3 py-2 text-sm font-medium border-l border-r">Контакты</Link>
        <Link to="/" className="flex-1 text-center px-3 py-2 text-sm font-medium">Меню</Link>
      </div>
    </div>
  );
};

export default MobileBottomBar;
