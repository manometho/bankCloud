
const Organigrama = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Organigrama</h1>
          <p className="text-xl max-w-3xl">
            Conoce la estructura organizacional de ZBank y los profesionales que lideran nuestra institución.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Estructura Organizacional</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                En ZBank, contamos con una estructura organizativa diseñada para maximizar la eficiencia y asegurar un servicio de excelencia a nuestros clientes.
              </p>
            </div>
            
            <div className="mb-16">
              <div className="flex flex-col items-center">
                {/* Junta Directiva */}
                <div className="bg-accent text-white p-6 rounded-lg w-64 text-center mb-6">
                  <h3 className="font-bold text-xl mb-1">Junta Directiva</h3>
                  <p className="opacity-80 text-sm">Órgano de gobierno supremo</p>
                </div>
                
                <div className="h-8 w-0.5 bg-gray-300"></div>
                
                {/* CEO */}
                <div className="bg-primary text-white p-6 rounded-lg w-64 text-center my-6">
                  <h3 className="font-bold text-xl mb-1">Director General</h3>
                  <p className="opacity-80 text-sm">Carlos Rodríguez</p>
                </div>
                
                {/* Líneas conectoras para las divisiones */}
                <div className="flex justify-center w-full mb-8">
                  <div className="w-4/5 flex flex-col items-center">
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <div className="flex justify-between w-full">
                      <div className="h-8 w-0.5 bg-gray-300"></div>
                      <div className="h-8 w-0.5 bg-gray-300"></div>
                      <div className="h-8 w-0.5 bg-gray-300"></div>
                      <div className="h-8 w-0.5 bg-gray-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Divisiones principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h3 className="font-bold text-lg mb-2">Dirección Financiera</h3>
                    <p className="text-sm text-gray-600 mb-3">Ana Martínez</p>
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      <li>• Contabilidad</li>
                      <li>• Tesorería</li>
                      <li>• Control de Gestión</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h3 className="font-bold text-lg mb-2">Dirección de Operaciones</h3>
                    <p className="text-sm text-gray-600 mb-3">Luis Gómez</p>
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      <li>• Sucursales</li>
                      <li>• Procesos</li>
                      <li>• Tecnología</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h3 className="font-bold text-lg mb-2">Dirección Comercial</h3>
                    <p className="text-sm text-gray-600 mb-3">Elena Torres</p>
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      <li>• Banca Minorista</li>
                      <li>• Banca Corporativa</li>
                      <li>• Marketing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h3 className="font-bold text-lg mb-2">Dirección de Riesgos</h3>
                    <p className="text-sm text-gray-600 mb-3">Roberto Sánchez</p>
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      <li>• Riesgo Crediticio</li>
                      <li>• Riesgo Operacional</li>
                      <li>• Cumplimiento</li>
                    </ul>
                  </div>
                </div>
                
                {/* Subdivisiones secundarias */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-base mb-2">Recursos Humanos</h3>
                    <p className="text-sm text-gray-600">María Pérez</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-base mb-2">Auditoría Interna</h3>
                    <p className="text-sm text-gray-600">Javier López</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-base mb-2">Asesoría Jurídica</h3>
                    <p className="text-sm text-gray-600">Carmen Ruiz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Información adicional</h2>
              <p className="mb-4">
                Nuestra estructura organizativa está diseñada para promover la eficiencia, la colaboración y la toma de decisiones ágil, permitiéndonos responder rápidamente a las necesidades cambiantes del mercado y de nuestros clientes.
              </p>
              <p>
                Cada área funcional está liderada por profesionales con amplia experiencia en el sector financiero, comprometidos con nuestros valores corporativos y con la visión de convertir a ZBank en la institución financiera preferida por su excelencia en el servicio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organigrama;
