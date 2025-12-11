import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import Homepage2 from "./pages/Homepage2";
import DentalImplantPage from "./pages/DentalImplantPage";
import RootCanalPage from "./pages/RootCanalPage";
import DentalCrownsPage from "./pages/DentalCrownsPage";
import WisdomToothRemovalPage from "./pages/WisdomToothRemovalPage";
import OralSurgeriesPage from "./pages/OralSurgeriesPage";
import GeneralDentistryPage from "./pages/GeneralDentistryPage";
import LaserDentistryPage from "./pages/LaserDentistryPage";
import AlignersPage from "./pages/AlignersPage";
import HitechCityPage from "./pages/locations/HitechCityPage";
import GachibowliPage from "./pages/locations/GachibowliPage";
import MadhapurPage from "./pages/locations/MadhapurPage";
import KondapurPage from "./pages/locations/KondapurPage";
import BanjaraHillsPage from "./pages/locations/BanjaraHillsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/homepage2" element={<Homepage2 />} />

              {/* Service Routes */}
              <Route path="/dental-implant" element={<DentalImplantPage />} />
              <Route path="/root-canal" element={<RootCanalPage />} />
              <Route path="/dental-crowns" element={<DentalCrownsPage />} />
              <Route path="/oral-surgeries" element={<OralSurgeriesPage />} />
              <Route path="/wisdom-tooth-removal" element={<WisdomToothRemovalPage />} />
              <Route path="/general-dentistry" element={<GeneralDentistryPage />} />
              <Route path="/laser-dentistry" element={<LaserDentistryPage />} />
              <Route path="/aligners" element={<AlignersPage />} />


              {/* Location Routes */}
              {/* <Route path="/locations/hitech-city" element={<HitechCityPage />} />
              <Route path="/locations/gachibowli" element={<GachibowliPage />} />
              <Route path="/locations/madhapur" element={<MadhapurPage />} />
              <Route path="/locations/kondapur" element={<KondapurPage />} />
              <Route path="/locations/banjara-hills" element={<BanjaraHillsPage />} /> */}

              {/* About Routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<AboutPage />} />
              <Route path="/technology" element={<AboutPage />} />
              <Route path="/reviews" element={<AboutPage />} />

              {/* Blog Route */}
              <Route path="/blog" element={<BlogPage />} />

              {/* Thank You Route */}
              <Route path="/thank-you" element={<ThankYouPage />} />

              {/* Contact Route */}
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;



export default App;