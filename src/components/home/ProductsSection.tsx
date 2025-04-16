
import { Link } from 'react-router-dom';
import { CreditCard, PiggyBank, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'Tarjetas exclusivas',
    description: 'Descubre nuestras tarjetas de crédito y débito con beneficios únicos y recompensas por tus compras.',
    link: '/tarjetas',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
    title: 'Ahorros e inversiones',
    description: 'Libretas de ahorro con altos rendimientos e instrumentos de inversión para hacer crecer tu capital.',
    link: '/productos',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Cajeros automáticos',
    description: 'Red de cajeros automáticos en todo el país para que puedas realizar transacciones sin comisiones.',
    link: '/productos',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80',
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos financieros</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Descubre nuestra gama de productos diseñados para satisfacer todas tus necesidades financieras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {product.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0">
                  <Link to={product.link} className="flex items-center">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
