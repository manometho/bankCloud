
import { Target } from 'lucide-react';

const Mision = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestra Misión</h1>
          <p className="text-xl max-w-3xl">
            Conoce el propósito fundamental que guía todas nuestras acciones y decisiones en ZBank.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-xl mb-8">
                "Ofrecer soluciones financieras innovadoras y accesibles que impulsen el crecimiento y bienestar de nuestros clientes, colaboradores y comunidades, generando valor sostenible para todos nuestros grupos de interés."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para nuestros clientes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Proporcionar servicios financieros de alta calidad, confiables y transparentes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Desarrollar productos que atiendan sus necesidades reales y cambiantes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Ofrecer una experiencia excepcional en cada interacción.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para nuestros colaboradores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Fomentar un ambiente de trabajo inclusivo y estimulante.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Promover el desarrollo profesional y personal.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Reconocer y valorar su contribución al éxito de la institución.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para la comunidad</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Contribuir al desarrollo económico y social de las comunidades donde operamos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Operar con responsabilidad medioambiental y social.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Promover la inclusión financiera y la educación económica.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para nuestros accionistas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Generar resultados financieros sólidos y sostenibles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Operar con altos estándares éticos y de gobierno corporativo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Crear valor a largo plazo a través de una gestión responsable y visionaria.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mision;
