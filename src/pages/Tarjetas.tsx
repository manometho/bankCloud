
import { CreditCard, Check, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const creditCards = [
  {
    id: 1,
    name: 'ZBank Gold',
    description: 'La tarjeta ideal para disfrutar de beneficios exclusivos y recompensas en tus compras diarias.',
    benefits: [
      'Acumulación de puntos en todas tus compras',
      'Descuentos en restaurantes seleccionados',
      'Seguro de compra protegida',
      'Sin cuota anual el primer año'
    ],
    color: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    annual_fee: '$50',
    interest_rate: '19.99%'
  },
  {
    id: 2,
    name: 'ZBank Platinum',
    description: 'Diseñada para quienes buscan los máximos beneficios y atención personalizada en todo momento.',
    benefits: [
      'Acceso a salas VIP en aeropuertos internacionales',
      'Concierge personal 24/7',
      'Seguro de viaje con cobertura internacional',
      'Acumulación acelerada de puntos'
    ],
    color: 'bg-gradient-to-r from-gray-700 to-gray-900',
    annual_fee: '$120',
    interest_rate: '18.50%'
  },
  {
    id: 3,
    name: 'ZBank Travel',
    description: 'La mejor opción para viajeros frecuentes que desean maximizar sus beneficios en cada travesía.',
    benefits: [
      'Sin comisiones por compras en el extranjero',
      'Millas por cada compra realizada',
      'Seguro de cancelación de viaje',
      'Descuentos en hoteles asociados'
    ],
    color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    annual_fee: '$75',
    interest_rate: '20.50%'
  }
];

const debitCards = [
  {
    id: 1,
    name: 'ZBank Básica',
    description: 'Tarjeta de débito estándar para tus operaciones diarias con seguridad y conveniencia.',
    benefits: [
      'Sin costo de emisión',
      'Retiros sin comisiones en nuestra red de cajeros',
      'Notificaciones de transacciones en tiempo real',
      'Compatibilidad con pagos contactless'
    ],
    color: 'bg-gradient-to-r from-gray-400 to-gray-600',
    monthly_fee: '$0',
    daily_limit: '$500'
  },
  {
    id: 2,
    name: 'ZBank Premium',
    description: 'Una tarjeta de débito con beneficios adicionales para clientes con cuentas preferenciales.',
    benefits: [
      'Retiros sin comisiones en cualquier cajero',
      'Seguro contra fraudes y robos',
      'Descuentos en establecimientos asociados',
      'Atención prioritaria en sucursales'
    ],
    color: 'bg-gradient-to-r from-emerald-500 to-teal-700',
    monthly_fee: '$3',
    daily_limit: '$1,000'
  },
  {
    id: 3,
    name: 'ZBank Joven',
    description: 'Diseñada especialmente para jóvenes que comienzan a gestionar sus finanzas personales.',
    benefits: [
      'Sin comisiones de mantenimiento',
      'Descuentos en entretenimiento y educación',
      'Control parental para menores de edad',
      'Herramientas de educación financiera'
    ],
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    monthly_fee: '$0',
    daily_limit: '$300'
  }
];

const Tarjetas = () => {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tarjetas ZBank</h1>
          <p className="text-xl max-w-3xl">
            Descubre nuestras tarjetas de crédito y débito diseñadas para ofrecerte los mejores beneficios y recompensas.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="credito" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="credito">Tarjetas de Crédito</TabsTrigger>
                <TabsTrigger value="debito">Tarjetas de Débito</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="credito">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {creditCards.map((card) => (
                  <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                    <div className={`${card.color} p-6 h-48 flex items-center justify-center`}>
                      <div className="text-white">
                        <CreditCard className="h-12 w-12 mb-2 mx-auto" />
                        <h3 className="text-xl font-bold text-center">{card.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{card.description}</p>
                      
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Star className="h-5 w-5 text-primary mr-2" />
                        Beneficios principales
                      </h4>
                      
                      <ul className="space-y-2 mb-6">
                        {card.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <p className="text-gray-500">Cuota anual</p>
                          <p className="font-semibold">{card.annual_fee}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Tasa de interés</p>
                          <p className="font-semibold">{card.interest_rate}</p>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Solicitar ahora</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="debito">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {debitCards.map((card) => (
                  <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                    <div className={`${card.color} p-6 h-48 flex items-center justify-center`}>
                      <div className="text-white">
                        <CreditCard className="h-12 w-12 mb-2 mx-auto" />
                        <h3 className="text-xl font-bold text-center">{card.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{card.description}</p>
                      
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Star className="h-5 w-5 text-primary mr-2" />
                        Beneficios principales
                      </h4>
                      
                      <ul className="space-y-2 mb-6">
                        {card.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <p className="text-gray-500">Comisión mensual</p>
                          <p className="font-semibold">{card.monthly_fee}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Límite diario</p>
                          <p className="font-semibold">{card.daily_limit}</p>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Solicitar ahora</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/4 flex justify-center">
                <TrendingUp className="h-16 w-16 text-primary" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Comparador de tarjetas</h2>
                <p className="mb-4">¿No estás seguro de qué tarjeta es la mejor para ti? Usa nuestro comparador de tarjetas para encontrar la opción que mejor se adapte a tus necesidades y estilo de vida.</p>
                <Button className="bg-primary hover:bg-primary/90 text-white">Comparar tarjetas</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarjetas;
