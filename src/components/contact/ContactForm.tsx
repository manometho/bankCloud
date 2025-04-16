
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here would be the logic to send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos. Pronto nos pondremos en contacto contigo.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario a continuación o utiliza la información de contacto para comunicarte con nosotros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input resize-none"
                    required
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-accent text-white rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Dirección</h4>
                        <p className="opacity-80">Av. Principal 123, Ciudad Ficticia, País</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Teléfono</h4>
                        <p className="opacity-80">(+123) 456-7890</p>
                        <p className="opacity-80">Lunes a Viernes: 9am - 5pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Correo electrónico</h4>
                        <p className="opacity-80">info@zbank.com</p>
                        <p className="opacity-80">soporte@zbank.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Horario de atención</h4>
                  <ul className="opacity-80 space-y-1">
                    <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                    <li>Sábados: 9:00 AM - 1:00 PM</li>
                    <li>Domingos y feriados: Cerrado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDUnNTUuNCJOIDczwrA1OSczOC4yIlc!5e0!3m2!1ses!2s!4v1617283299513!5m2!1ses!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
          title="Ubicación de ZBank"
        />
      </div>
    </section>
  );
};

export default ContactForm;
