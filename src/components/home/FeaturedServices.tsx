
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Wallet, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Tarjetas de Crédito',
    description: 'Beneficios exclusivos y tasas preferenciales. Encuentra la tarjeta ideal para ti.',
    link: '/tarjetas'
  },
  {
    id: 2,
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: 'Cuentas de Ahorro',
    description: 'Empieza a construir tu futuro financiero con nuestras cuentas de ahorro.',
    link: '/productos'
  },
  {
    id: 3,
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Inversiones',
    description: 'Multiplica tu capital con nuestras opciones de inversión personalizadas.',
    link: '/productos'
  },
  {
    id: 4,
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Seguros',
    description: 'Protege lo que más te importa con nuestros planes de seguro comprehensivos.',
    link: '/productos'
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ofrecemos soluciones financieras diseñadas para satisfacer tus necesidades personales y empresariales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-primary font-medium hover:underline">
                Ver más <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
