
import { Heart, Shield, Users, Lightbulb, BarChart4, GlobeIcon } from 'lucide-react';

const valores = [
  {
    icon: <Heart className="h-12 w-12 text-primary mb-4" />,
    title: 'Integridad',
    description: 'Actuamos con honestidad, transparencia y ética en todas nuestras interacciones, generando confianza en nuestros clientes y la sociedad.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary mb-4" />,
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en la confianza mutua, cumpliendo nuestras promesas y protegiendo los intereses de nuestros clientes.'
  },
  {
    icon: <Users className="h-12 w-12 text-primary mb-4" />,
    title: 'Respeto',
    description: 'Valoramos la diversidad y tratamos a todas las personas con dignidad y consideración, fomentando un ambiente inclusivo y colaborativo.'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary mb-4" />,
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas y mejores formas de servir a nuestros clientes, adaptándonos a los cambios y liderando la transformación digital.'
  },
  {
    icon: <BarChart4 className="h-12 w-12 text-primary mb-4" />,
    title: 'Excelencia',
    description: 'Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos, superando expectativas y mejorando continuamente.'
  },
  {
    icon: <GlobeIcon className="h-12 w-12 text-primary mb-4" />,
    title: 'Sostenibilidad',
    description: 'Operamos con responsabilidad hacia el futuro, considerando el impacto económico, social y ambiental de nuestras decisiones.'
  }
];

const Valores = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestros Valores</h1>
          <p className="text-xl max-w-3xl">
            Estos principios fundamentales definen nuestra cultura organizacional y guían nuestras acciones diarias.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg">
              En ZBank, nuestros valores corporativos son los pilares que sostienen todas nuestras operaciones y decisiones. Representan lo que somos, lo que defendemos y lo que aspiramos a ser como organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {valor.icon}
                <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto p-8 bg-secondary rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Nuestro compromiso con los valores</h2>
            <p className="mb-4">
              Estos valores no son simplemente palabras en una página, sino compromisos tangibles que asumimos con nuestros clientes, colaboradores y comunidades.
            </p>
            <p className="mb-4">
              Todos los miembros de ZBank, desde la alta dirección hasta cada uno de nuestros colaboradores, están comprometidos a vivir y demostrar estos valores en su trabajo diario.
            </p>
            <p>
              Evaluamos regularmente nuestro desempeño en relación con estos valores y buscamos oportunidades para fortalecerlos y mejorar nuestra adherencia a ellos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Valores;
