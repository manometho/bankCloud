
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Mision from "./pages/nosotros/Mision";
import Vision from "./pages/nosotros/Vision";
import Valores from "./pages/nosotros/Valores";
import Organigrama from "./pages/nosotros/Organigrama";
import Productos from "./pages/Productos";
import Tarjetas from "./pages/Tarjetas";
import Politicas from "./pages/Politicas";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/nosotros/mision" element={<Mision />} />
              <Route path="/nosotros/vision" element={<Vision />} />
              <Route path="/nosotros/valores" element={<Valores />} />
              <Route path="/nosotros/organigrama" element={<Organigrama />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/tarjetas" element={<Tarjetas />} />
              <Route path="/politicas" element={<Politicas />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
