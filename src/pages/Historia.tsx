
import { Clock, Award, Users } from 'lucide-react';

const historiaEvents = [
  {
    year: '2005',
    title: 'Fundación de ZBank',
    description: 'ZBank fue fundado con la misión de ofrecer servicios financieros innovadores y accesibles para todos.',
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    year: '2010',
    title: 'Expansión Nacional',
    description: 'Alcanzamos presencia en las principales ciudades del país, ampliando nuestra red de sucursales y cajeros automáticos.',
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    year: '2015',
    title: 'Innovación Digital',
    description: 'Lanzamos nuestra plataforma de banca digital, permitiendo a nuestros clientes realizar transacciones desde cualquier lugar y en cualquier momento.',
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    year: '2020',
    title: 'Premio a la Excelencia',
    description: 'Recibimos el premio nacional a la excelencia en servicios financieros por nuestra dedicación a la satisfacción del cliente.',
    icon: <Award className="h-8 w-8 text-primary" />
  }
];

const Historia = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl max-w-3xl">
            Conoce cómo ZBank se ha convertido en una de las instituciones financieras más confiables del país, con una historia marcada por la innovación y el compromiso con nuestros clientes.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Desde su fundación en 2005, ZBank ha mantenido un firme compromiso con la excelencia en los servicios financieros. Nuestra trayectoria está marcada por importantes hitos que han contribuido a construir la institución que somos hoy.
            </p>
            
            <div className="space-y-12">
              {historiaEvents.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start border-l-4 border-primary pl-6 pb-8 relative">
                  <div className="absolute -left-3 top-0 bg-white p-1">
                    <div className="bg-primary text-white p-1 rounded-full">
                      {event.icon}
                    </div>
                  </div>
                  <div className="md:w-1/5 mb-4 md:mb-0">
                    <span className="inline-block bg-primary/10 text-primary text-lg font-bold px-4 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <div className="md:w-4/5">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
              <p className="mb-4">
                A lo largo de nuestra historia, hemos trabajado incansablemente para ofrecer soluciones financieras innovadoras y accesibles que satisfagan las necesidades cambiantes de nuestros clientes.
              </p>
              <p>
                Hoy, ZBank es reconocido por su solidez, confiabilidad y compromiso con la excelencia en el servicio. Seguimos mirando hacia el futuro, adaptándonos a las nuevas tecnologías y tendencias del mercado para ofrecer siempre la mejor experiencia bancaria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Historia;
