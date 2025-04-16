
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

const InfoBanner = () => {
  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start mb-4 md:mb-0">
            <div className="mr-4 bg-primary/10 rounded-full p-2">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Necesitas ayuda con tu economía?</h3>
              <p className="text-gray-600">Nuestros asesores financieros están listos para ayudarte.</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
            Obtener asesoría
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
