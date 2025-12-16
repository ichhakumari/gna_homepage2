import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Lazy load all pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const Homepage2 = lazy(() => import("./pages/Homepage2"));
const DentalImplantPage = lazy(() => import("./pages/DentalImplantPage"));
const RootCanalPage = lazy(() => import("./pages/RootCanalPage"));
const DentalCrownsPage = lazy(() => import("./pages/DentalCrownsPage"));
const WisdomToothRemovalPage = lazy(() => import("./pages/WisdomToothRemovalPage"));
const OralSurgeriesPage = lazy(() => import("./pages/OralSurgeriesPage"));
const GeneralDentistryPage = lazy(() => import("./pages/GeneralDentistryPage"));
const LaserDentistryPage = lazy(() => import("./pages/LaserDentistryPage"));
const AlignersPage = lazy(() => import("./pages/AlignersPage"));
const HitechCityPage = lazy(() => import("./pages/locations/HitechCityPage"));
const GachibowliPage = lazy(() => import("./pages/locations/GachibowliPage"));
const MadhapurPage = lazy(() => import("./pages/locations/MadhapurPage"));
const KondapurPage = lazy(() => import("./pages/locations/KondapurPage"));
const BanjaraHillsPage = lazy(() => import("./pages/locations/BanjaraHillsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#089970]"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () =>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;



export default App;