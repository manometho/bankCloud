
import { Wallet, CreditCard, Building, Landmark, BarChart4, PiggyBank, Shield, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productos = {
  cuentas: [
    {
      id: 1,
      icon: <Wallet className="h-8 w-8 text-primary mb-4" />,
      title: 'Cuenta Corriente',
      description: 'Accede a tu dinero cuando lo necesites, con múltiples servicios asociados y sin comisiones de mantenimiento.',
      features: ['Sin comisión de mantenimiento', 'Tarjeta de débito sin costo', 'Banca en línea 24/7']
    },
    {
      id: 2,
      icon: <PiggyBank className="h-8 w-8 text-primary mb-4" />,
      title: 'Cuenta de Ahorro',
      description: 'Haz crecer tu dinero con nuestras atractivas tasas de interés y sin requisitos mínimos de apertura.',
      features: ['Tasas de interés competitivas', 'Sin monto mínimo de apertura', 'Retiros ilimitados']
    },
    {
      id: 3,
      icon: <BarChart4 className="h-8 w-8 text-primary mb-4" />,
      title: 'Cuenta de Inversión',
      description: 'Maximiza tus rendimientos con nuestras opciones de inversión personalizadas según tu perfil de riesgo.',
      features: ['Asesoramiento personalizado', 'Diversificación de portafolios', 'Rendimientos superiores']
    }
  ],
  creditos: [
    {
      id: 1,
      icon: <Home className="h-8 w-8 text-primary mb-4" />,
      title: 'Crédito Hipotecario',
      description: 'Haz realidad el sueño de tu casa propia con nuestras opciones de financiamiento a largo plazo.',
      features: ['Plazos hasta 30 años', 'Tasas competitivas', 'Financiamiento hasta el 90%']
    },
    {
      id: 2,
      icon: <CreditCard className="h-8 w-8 text-primary mb-4" />,
      title: 'Crédito Personal',
      description: 'Obtén el dinero que necesitas para tus proyectos personales con aprobación rápida y mínimos requisitos.',
      features: ['Aprobación en 24 horas', 'Sin garantías', 'Cuotas fijas mensuales']
    },
    {
      id: 3,
      icon: <Landmark className="h-8 w-8 text-primary mb-4" />,
      title: 'Crédito Empresarial',
      description: 'Impulsa el crecimiento de tu negocio con nuestras soluciones de financiamiento a medida.',
      features: ['Líneas de crédito flexible', 'Asesoría especializada', 'Plazos adaptados a tu flujo de caja']
    }
  ],
  servicios: [
    {
      id: 1,
      icon: <Building className="h-8 w-8 text-primary mb-4" />,
      title: 'Cajeros Automáticos',
      description: 'Red extensa de cajeros automáticos en todo el país para que puedas acceder a tu dinero cuando lo necesites.',
      features: ['Disponibles 24/7', 'Sin comisiones en nuestra red', 'Depósitos en efectivo y cheques']
    },
    {
      id: 2,
      icon: <Shield className="h-8 w-8 text-primary mb-4" />,
      title: 'Seguros',
      description: 'Protege lo que más valoras con nuestras coberturas diseñadas para tus necesidades específicas.',
      features: ['Seguros de vida', 'Seguros de hogar', 'Seguros de automóvil']
    },
    {
      id: 3,
      icon: <CreditCard className="h-8 w-8 text-primary mb-4" />,
      title: 'Banca Digital',
      description: 'Gestiona tus finanzas desde cualquier lugar y en cualquier momento con nuestra plataforma digital segura.',
      features: ['App móvil intuitiva', 'Transferencias sin costo', 'Notificaciones en tiempo real']
    }
  ]
};

const Productos = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Productos y Servicios</h1>
          <p className="text-xl max-w-3xl">
            Descubre la amplia gama de soluciones financieras que ZBank tiene para ofrecerte, diseñadas para satisfacer todas tus necesidades.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cuentas" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-lg">
                <TabsTrigger value="cuentas">Cuentas</TabsTrigger>
                <TabsTrigger value="creditos">Créditos</TabsTrigger>
                <TabsTrigger value="servicios">Servicios</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cuentas">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {productos.cuentas.map((producto) => (
                  <Card key={producto.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-center">
                        {producto.icon}
                      </div>
                      <CardTitle className="text-center">{producto.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {producto.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {producto.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="inline-block bg-primary h-2 w-2 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90 text-white">Saber más</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="creditos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {productos.creditos.map((producto) => (
                  <Card key={producto.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-center">
                        {producto.icon}
                      </div>
                      <CardTitle className="text-center">{producto.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {producto.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {producto.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="inline-block bg-primary h-2 w-2 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90 text-white">Saber más</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="servicios">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {productos.servicios.map((producto) => (
                  <Card key={producto.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-center">
                        {producto.icon}
                      </div>
                      <CardTitle className="text-center">{producto.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {producto.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {producto.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="inline-block bg-primary h-2 w-2 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90 text-white">Saber más</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">¿No estás seguro de qué producto necesitas?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestros asesores financieros están listos para ayudarte a encontrar las soluciones que mejor se adapten a tus necesidades y objetivos.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contacto">Hablar con un asesor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;
