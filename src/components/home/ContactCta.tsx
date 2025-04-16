
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCta = () => {
  return (
    <section className="py-16 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda con tus finanzas?</h2>
            <p className="mb-8">
              Nuestro equipo de profesionales está listo para asesorarte y ofrecerte las mejores soluciones financieras adaptadas a tus necesidades.
            </p>
            
            <div className="grid gap-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="opacity-80">Av. Principal 123, Ciudad Ficticia, País</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="opacity-80">(+123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Correo electrónico</h3>
                  <p className="opacity-80">info@zbank.com</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDUnNTUuNCJOIDczwrA1OSczOC4yIlc!5e0!3m2!1ses!2s!4v1617283299513!5m2!1ses!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Ubicación de ZBank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
