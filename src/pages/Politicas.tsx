
import { Link } from 'react-router-dom';
import { Shield, Users, Leaf, FileText, FileCode, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const politicas = [
  {
    id: 'seguridad',
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: 'Política de Seguridad',
    description: 'Conoce cómo protegemos tu información personal y financiera, así como las medidas que implementamos para garantizar la seguridad de tus transacciones.',
    snippet: 'En ZBank, la seguridad de tus datos y transacciones es nuestra máxima prioridad. Utilizamos tecnología de encriptación de última generación y sistemas de verificación multinivel para proteger tu información...'
  },
  {
    id: 'transferencia',
    icon: <FileCode className="h-12 w-12 text-primary" />,
    title: 'Política de Transferencia de Datos',
    description: 'Información sobre cómo manejamos y transferimos tus datos personales, tanto dentro como fuera de nuestra institución.',
    snippet: 'ZBank se compromete a manejar tus datos con el máximo cuidado y confidencialidad. Solo compartimos tu información con terceros cuando es estrictamente necesario para proporcionarte los servicios solicitados...'
  },
  {
    id: 'servicio',
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Política de Servicio al Cliente',
    description: 'Nuestro compromiso con la excelencia en el servicio y cómo trabajamos para asegurar tu satisfacción como cliente.',
    snippet: 'Nuestro compromiso es ofrecerte un servicio de calidad excepcional. Todos nuestros colaboradores están capacitados para brindarte la mejor atención y resolver tus consultas de manera eficiente y cordial...'
  },
  {
    id: 'sostenibilidad',
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: 'Política de Sostenibilidad',
    description: 'Conoce nuestras iniciativas y compromisos para contribuir positivamente al medio ambiente y la sociedad.',
    snippet: 'En ZBank, creemos firmemente en nuestra responsabilidad con el planeta y las comunidades donde operamos. Implementamos prácticas sostenibles en nuestras operaciones diarias y fomentamos la inversión en proyectos verdes...'
  },
  {
    id: 'credito',
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: 'Política de Crédito y Riesgo',
    description: 'Información sobre cómo evaluamos las solicitudes de crédito y gestionamos los riesgos asociados.',
    snippet: 'Nuestra política de crédito se basa en una evaluación justa y transparente de la capacidad crediticia de nuestros clientes. Utilizamos métodos modernos de análisis de riesgo para ofrecer productos financieros adecuados a cada perfil...'
  },
  {
    id: 'etica',
    icon: <Lock className="h-12 w-12 text-primary" />,
    title: 'Política de Ética y Cumplimiento',
    description: 'Nuestros principios éticos y cómo nos aseguramos de cumplir con las regulaciones financieras vigentes.',
    snippet: 'Operamos bajo los más altos estándares éticos y de cumplimiento normativo. Todos nuestros colaboradores siguen un estricto código de conducta que garantiza la integridad en todas nuestras operaciones...'
  }
];

const Politicas = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Políticas Institucionales</h1>
          <p className="text-xl max-w-3xl">
            Conoce las normas y directrices que rigen nuestro funcionamiento y garantizan la transparencia en todas nuestras operaciones.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg">
              En ZBank, nos comprometemos a mantener los más altos estándares en todas nuestras operaciones. Nuestras políticas institucionales reflejan nuestros valores y principios, asegurando que actuemos siempre con integridad, transparencia y responsabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {politicas.map((politica) => (
              <Card key={politica.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {politica.icon}
                  </div>
                  <CardTitle>{politica.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {politica.description}
                  </CardDescription>
                  <p className="text-sm italic text-gray-500">
                    "{politica.snippet}"
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    Leer más
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-secondary p-8 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Comprometidos con la transparencia</h2>
            <p className="mb-6">
              En ZBank, creemos que la transparencia es fundamental para construir relaciones de confianza con nuestros clientes y la sociedad. Por eso, todas nuestras políticas están disponibles para su consulta pública.
            </p>
            <p className="mb-6">
              Si tienes alguna pregunta o necesitas aclaraciones sobre cualquiera de nuestras políticas, no dudes en ponerte en contacto con nosotros.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Politicas;
