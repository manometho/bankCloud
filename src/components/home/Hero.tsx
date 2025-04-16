
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Tu futuro financiero empieza con nosotros
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Descubre cómo ZBank puede ayudarte a alcanzar tus metas financieras con soluciones personalizadas para ti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-6 py-6">
                Conoce nuestros productos
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 font-medium px-6 py-6">
                Abrir una cuenta
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <img 
              src="/lovable-uploads/aca0301b-25c5-4d40-bb08-946137a8c9fb.png" 
              alt="Mujer sonriente usando banca móvil con tarjeta de crédito" 
              className="w-auto h-auto max-w-full max-h-[500px] object-contain"
              style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
