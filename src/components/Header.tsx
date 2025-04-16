
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, Phone, CreditCard, LogIn } from 'lucide-react';
import ZBankLogo from '../assets/ZBankLogo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Historia', path: '/historia' },
    { name: 'Nosotros', path: '/nosotros', submenu: [
      { name: 'Misión', path: '/nosotros/mision' },
      { name: 'Visión', path: '/nosotros/vision' },
      { name: 'Valores', path: '/nosotros/valores' },
      { name: 'Organigrama', path: '/nosotros/organigrama' },
    ]},
    { name: 'Productos', path: '/productos' },
    { name: 'Tarjetas', path: '/tarjetas' },
    { name: 'Políticas', path: '/politicas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold tracking-tighter">
              <ZBankLogo />
            </div>
          </Link>
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Buscar"
              className="pl-8 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">Ubicaciones</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm">Servicio al Cliente</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4 text-primary" />
            <span className="text-sm">Banca por Internet</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center space-x-1">
            <LogIn className="h-4 w-4 mr-1" />
            <span>Iniciar Sesión</span>
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block container mx-auto px-4">
        <ul className="flex space-x-6 py-4">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item relative group">
              <Link
                to={item.path}
                className={`font-medium text-sm ${isActive(item.path) ? 'text-primary' : 'text-gray-700'}`}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 top-full mt-1 hidden w-48 rounded-md bg-white py-2 shadow-lg group-hover:block z-10">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden container mx-auto px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`block font-medium ${isActive(item.path) ? 'text-primary' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block py-1 text-sm text-gray-600 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2 flex flex-col space-y-3">
              <Button variant="outline" className="justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ubicaciones</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Phone className="h-4 w-4 mr-2" />
                <span>Servicio al Cliente</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                <span>Banca por Internet</span>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <LogIn className="h-4 w-4 mr-2" />
                <span>Iniciar Sesión</span>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
