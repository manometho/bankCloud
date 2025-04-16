
import { Eye } from 'lucide-react';

const Vision = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestra Visión</h1>
          <p className="text-xl max-w-3xl">
            Descubre hacia dónde nos dirigimos y qué aspiramos a ser como institución financiera.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Eye className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-xl mb-8">
                "Ser la institución financiera preferida por nuestra excelencia en el servicio, innovación constante y compromiso con el desarrollo sostenible, reconocida por transformar positivamente la vida de las personas y contribuir al progreso de la sociedad."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Liderazgo en innovación</h3>
                <p className="text-gray-700">
                  Buscamos ser pioneros en la implementación de soluciones tecnológicas que mejoren la experiencia bancaria, haciendo que las finanzas sean más accesibles, seguras y convenientes para todos nuestros clientes.
                </p>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Crecimiento sostenible</h3>
                <p className="text-gray-700">
                  Aspiramos a crecer de manera sostenible, equilibrando nuestros objetivos económicos con la responsabilidad social y ambiental, creando valor a largo plazo para todos nuestros grupos de interés.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Cómo alcanzaremos nuestra visión:</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-lg">Excelencia operativa</h4>
                    <p className="text-gray-600">
                      Optimizar nuestros procesos internos para asegurar eficiencia, precisión y calidad en todos nuestros servicios.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-lg">Transformación digital</h4>
                    <p className="text-gray-600">
                      Adoptar y desarrollar tecnologías innovadoras que mejoren la experiencia del cliente y optimicen nuestras operaciones.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-lg">Enfoque en el cliente</h4>
                    <p className="text-gray-600">
                      Mantener al cliente en el centro de todas nuestras decisiones, comprendiendo sus necesidades y superando sus expectativas.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-lg">Desarrollo del talento</h4>
                    <p className="text-gray-600">
                      Invertir en el crecimiento y bienestar de nuestro equipo, fomentando una cultura de innovación, colaboración y excelencia.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">5</span>
                  <div>
                    <h4 className="font-semibold text-lg">Responsabilidad social</h4>
                    <p className="text-gray-600">
                      Contribuir activamente al desarrollo sostenible de las comunidades donde operamos, promoviendo la inclusión financiera y el cuidado del medio ambiente.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
