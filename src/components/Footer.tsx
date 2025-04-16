
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ZBankLogo from '../assets/ZBankLogo';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <ZBankLogo color="white" />
            </div>
            <p className="text-sm opacity-80">
              ZBank es un banco ficticio comprometido con ofrecer los mejores productos financieros y servicios bancarios a nuestros clientes.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="social-icon" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="social-icon" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary">Inicio</Link></li>
              <li><Link to="/historia" className="opacity-80 hover:opacity-100 hover:text-primary">Historia</Link></li>
              <li><Link to="/nosotros/mision" className="opacity-80 hover:opacity-100 hover:text-primary">Misión</Link></li>
              <li><Link to="/nosotros/vision" className="opacity-80 hover:opacity-100 hover:text-primary">Visión</Link></li>
              <li><Link to="/nosotros/valores" className="opacity-80 hover:opacity-100 hover:text-primary">Valores</Link></li>
              <li><Link to="/nosotros/organigrama" className="opacity-80 hover:opacity-100 hover:text-primary">Organigrama</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Productos y servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/productos" className="opacity-80 hover:opacity-100 hover:text-primary">Productos financieros</Link></li>
              <li><Link to="/tarjetas" className="opacity-80 hover:opacity-100 hover:text-primary">Tarjetas de crédito</Link></li>
              <li><Link to="/tarjetas" className="opacity-80 hover:opacity-100 hover:text-primary">Tarjetas de débito</Link></li>
              <li><Link to="/productos" className="opacity-80 hover:opacity-100 hover:text-primary">Libretas de ahorro</Link></li>
              <li><Link to="/productos" className="opacity-80 hover:opacity-100 hover:text-primary">Cajeros automáticos</Link></li>
              <li><Link to="/contacto" className="opacity-80 hover:opacity-100 hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="opacity-80">Av. Principal 123, Ciudad Ficticia, País</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="opacity-80">(+123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="opacity-80">info@zbank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} ZBank. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm opacity-80">
            <Link to="/politicas" className="hover:text-primary">Políticas de privacidad</Link>
            <Link to="/politicas" className="hover:text-primary">Términos y condiciones</Link>
            <Link to="/politicas" className="hover:text-primary">Políticas de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
