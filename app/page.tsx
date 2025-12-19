'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Zap, 
  ShieldCheck, 
  Truck,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowRight
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
}

interface Slide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  cta: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#ffc10e] selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 md:py-3' : 'py-3 md:py-6'}`}>
        <div className={`w-[92%] md:w-full max-w-[440px] md:max-w-7xl mx-auto px-3 md:px-4 relative flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl rounded-xl md:rounded-2xl py-3 md:py-4 shadow-2xl' 
            : ''
        }`}>
          {/* Actions - Left */}
          <div className={`flex items-center gap-2 md:gap-4 transition-all duration-500 z-30 ${scrolled ? '' : 'md:transform md:translate-y-4'}`}>
            <button className="relative group p-2 hover:bg-white/5 rounded-full transition-colors active:scale-95">
              <ShoppingCart size={20} className="md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ffc10e] text-black text-[10px] md:text-xs font-bold w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Desktop Menu - Left */}
          <div className={`hidden md:flex items-center gap-8 lg:gap-10 font-medium text-sm tracking-wide transition-all duration-500 md:ml-8 lg:ml-12 ${scrolled ? '' : 'transform translate-y-4'}`}>
            <a href="#home" className="hover:text-[#ffc10e] transition-colors whitespace-nowrap">Início</a>
            <a href="#products" className="hover:text-[#ffc10e] transition-colors whitespace-nowrap">Produtos</a>
          </div>

          {/* Logo - Absolute Center */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 flex items-center group cursor-pointer z-20 transition-all duration-500 ${
            scrolled 
              ? 'top-1/2 -translate-y-1/2' 
              : 'top-0 md:top-4 -translate-y-4 md:-translate-y-8'
          }`}>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={300} 
              height={100}
              className={`w-auto object-contain transition-all duration-500 max-w-[200px] md:max-w-none ${
                scrolled ? 'h-12 md:h-20' : 'h-16 md:h-32'
              }`}
              priority
            />
          </div>

          {/* Desktop Menu - Right */}
          <div className={`hidden md:flex items-center gap-8 lg:gap-10 font-medium text-sm tracking-wide transition-all duration-500 md:ml-32 lg:ml-48 ${scrolled ? '' : 'transform translate-y-4'}`}>
            <a href="#categories" className="hover:text-[#ffc10e] transition-colors whitespace-nowrap">Categorias</a>
            <a href="#about" className="hover:text-[#ffc10e] transition-colors whitespace-nowrap">Sobre</a>
          </div>

          {/* Actions - Right */}
          <div className={`flex items-center gap-2 md:gap-16 lg:gap-20 transition-all duration-500 z-30 ${scrolled ? '' : 'md:transform md:translate-y-4'}`}>
            <button 
              className="md:hidden p-2 text-white active:scale-95 transition-transform z-30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button className="hidden md:block bg-[#ffc10e] hover:bg-[#e6ae0d] text-black px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
              Área do Cliente
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[92%] max-w-[440px] bg-slate-900/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-5 rounded-xl border border-white/10">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 hover:text-[#ffc10e] hover:bg-white/5 rounded-lg border-b border-white/5 text-base font-medium transition-colors"
            >
              Início
            </a>
            <a 
              href="#products" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 hover:text-[#ffc10e] hover:bg-white/5 rounded-lg border-b border-white/5 text-base font-medium transition-colors"
            >
              Produtos
            </a>
            <a 
              href="#categories" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 hover:text-[#ffc10e] hover:bg-white/5 rounded-lg border-b border-white/5 text-base font-medium transition-colors"
            >
              Categorias
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 hover:text-[#ffc10e] hover:bg-white/5 rounded-lg text-base font-medium transition-colors"
            >
              Sobre
            </a>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#ffc10e] text-black py-4 rounded-xl font-bold mt-4 text-base active:scale-95 transition-transform shadow-lg"
            >
              Área do Cliente
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO CAROUSEL --- */}
      <HeroCarousel />

      {/* --- BENEFITS BAR --- */}
      <div className="bg-[#ffc10e] py-4 md:py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-black">
          <BenefitItem 
            icon={<Truck size={24} className="md:w-7 md:h-7" />} 
            title="Frete Grátis" 
            desc="Para compras acima de R$ 299" 
          />
          <BenefitItem 
            icon={<ShieldCheck size={24} className="md:w-7 md:h-7" />} 
            title="Produto Original" 
            desc="Garantia de autenticidade 100%" 
          />
          <BenefitItem 
            icon={<Zap size={24} className="md:w-7 md:h-7" />} 
            title="Entrega Flash" 
            desc="Receba em até 24h nas capitais" 
          />
        </div>
      </div>

      {/* --- CATEGORIES --- */}
      <section id="categories" className="py-12 md:py-20 container mx-auto px-4">
        <SectionHeader title="Nossas Categorias" subtitle="O que você precisa para evoluir hoje?" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          <CategoryCard 
            title="Proteínas" 
            image="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=600"
            count="12 Produtos"
          />
          <CategoryCard 
            title="Creatina" 
            image="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600"
            count="5 Produtos"
          />
          <CategoryCard 
            title="Pré-Treino" 
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
            count="8 Produtos"
          />
          <CategoryCard 
            title="Vitaminas" 
            image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
            count="15 Produtos"
          />
        </div>
      </section>

      {/* --- FEATURED PRODUCTS --- */}
      <section id="products" className="py-12 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mais Vendidos" subtitle="Os preferidos dos atletas de alta performance" />

          <ProductsCarousel products={products} onAddToCart={addToCart} />
          
          <div className="mt-10 md:mt-16 text-center">
            <button className="inline-flex items-center gap-2 border border-white/20 hover:border-[#ffc10e] text-white hover:text-[#ffc10e] px-6 md:px-8 py-3 md:py-4 rounded-full transition-all uppercase tracking-widest text-[10px] md:text-xs font-bold active:scale-95">
              Ver Toda a Loja <ArrowRight size={14} className="md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- PROMO BANNER --- */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600" 
            alt="Background" 
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <span className="text-[#ffc10e] font-bold tracking-wider md:tracking-widest uppercase mb-3 md:mb-4 animate-pulse text-xs md:text-sm">Oferta Relâmpago</span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white mb-4 md:mb-6 uppercase italic px-2">
            Combo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc10e] to-[#e6ae0d]">Hipertrofia</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mb-6 md:mb-8 px-2">
            Whey Isolado + Creatina Pura + Coqueteleira Exclusiva. A combinação perfeita para maximizar seus ganhos neste mês.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mb-6 md:mb-0">
            <div className="text-2xl md:text-3xl font-bold text-white line-through opacity-50">R$ 499,90</div>
            <div className="text-4xl md:text-5xl font-black text-[#ffc10e]">R$ 299,90</div>
          </div>
          <button onClick={addToCart} className="mt-4 md:mt-10 bg-[#ffc10e] text-black px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-sm md:text-lg hover:bg-[#e6ae0d] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,193,14,0.5)] w-full max-w-sm md:w-auto">
            GARANTIR COMBO AGORA
          </button>
          <div className="mt-6 flex gap-2 text-xs md:text-sm text-gray-400 justify-center flex-wrap">
            <div className="bg-white/10 px-3 py-1.5 md:py-1 rounded">04 Horas</div>
            <div className="bg-white/10 px-3 py-1.5 md:py-1 rounded">32 Minutos</div>
            <div className="bg-white/10 px-3 py-1.5 md:py-1 rounded">15 Segundos</div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <SectionHeader title="Resultados Reais" subtitle="O que nossos atletas dizem" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          <TestimonialCard 
            name="Carlos Silva" 
            role="Bodybuilder" 
            text="A qualidade da Iron & Whey é incomparável. A entrega foi super rápida e o Whey dissolve perfeitamente."
            stars={5}
          />
          <TestimonialCard 
            name="Ana Souza" 
            role="Crossfit Athlete" 
            text="O pré-treino mudou meu jogo. Energia limpa sem aquele crash depois. Recomendo demais!"
            stars={5}
          />
          <TestimonialCard 
            name="Pedro Santos" 
            role="Personal Trainer" 
            text="Indico para todos os meus alunos. Preço justo e qualidade de importado. O suporte é excelente."
            stars={4}
          />
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="py-12 md:py-20 bg-[#ffc10e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-3 md:mb-4 uppercase px-2">
            Entre para o Clube
          </h2>
          <p className="text-slate-900 font-medium mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base px-2">
            Receba dicas de treino, dietas e ofertas exclusivas diretamente no seu e-mail. Ganhe 10% na primeira compra.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 md:gap-2 px-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full border-none focus:ring-4 focus:ring-black/20 text-slate-900 placeholder:text-slate-500 outline-none text-sm md:text-base"
            />
            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-slate-900 active:scale-95 transition-all text-sm md:text-base w-full sm:w-auto">
              INSCREVER
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
            
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={140} 
                  height={47}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Suplementação de elite para quem busca o máximo desempenho. Qualidade garantida e resultados comprovados.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Facebook size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6">Navegação</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Loja</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6">Suporte</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Rastrear Pedido</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Política de Trocas</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">Envio e Entregas</a></li>
                <li><a href="#" className="hover:text-[#ffc10e] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6">Fale Conosco</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <p className="flex items-center gap-3">
                  <Mail size={16} className="text-[#ffc10e]" />
                  contato@ironwhey.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#ffc10e] flex items-center justify-center text-black text-xs font-bold">W</span>
                  (11) 99999-9999
                </p>
                <p className="opacity-60">
                  Seg - Sex: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2024 Iron & Whey Supplements. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 grayscale opacity-50">
              {/* Placeholders for payment icons */}
              <div className="h-6 w-10 bg-white/20 rounded"></div>
              <div className="h-6 w-10 bg-white/20 rounded"></div>
              <div className="h-6 w-10 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroCarousel() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920",
      subtitle: "Performance Máxima",
      title: "Domine Seu Treino",
      description: "A nova linha de pré-treinos explosivos chegou para quebrar seus recordes.",
      cta: "Conhecer Linha Pro"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1920",
      subtitle: "Recuperação Pura",
      title: "100% Whey Isolate",
      description: "A mais alta pureza para a construção muscular sem gorduras indesejadas.",
      cta: "Comprar Agora"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1920",
      subtitle: "Energia Vital",
      title: "Multivitamínicos",
      description: "Tudo o que seu corpo precisa para manter a imunidade blindada.",
      cta: "Ver Vitaminas"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section id="home" className="relative h-[90vh] md:h-[85vh] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Imagem de Fundo com Overlay */}
          <div className="absolute inset-0">
            <Image 
              src={slide.image} 
              alt={slide.title} 
              fill
              className="object-cover transform scale-105" 
              priority={index === 0}
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent"></div>
          </div>

          {/* Conteúdo */}
          <div className="absolute inset-0 flex items-center md:items-center pt-20 md:pt-0">
            <div className="container mx-auto px-4 md:px-4">
              <div className={`max-w-2xl transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block py-1.5 px-3 md:px-3 border border-[#ffc10e] text-[#ffc10e] text-[10px] md:text-xs font-bold tracking-wider md:tracking-[0.2em] uppercase rounded-lg md:rounded mb-3 md:mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 uppercase leading-tight italic">
                  {slide.title}
                </h1>
                <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button className="bg-[#ffc10e] hover:bg-[#e6ae0d] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                    {slide.cta} <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-white/30 hover:bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all active:scale-95">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controles do Carrossel */}
      <div className="absolute bottom-6 md:bottom-10 right-3 md:right-10 z-20 flex gap-2 md:gap-4">
        <button onClick={prevSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#ffc10e] hover:text-black hover:border-[#ffc10e] transition-all active:scale-95 bg-black/30 backdrop-blur-sm">
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button onClick={nextSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#ffc10e] hover:text-black hover:border-[#ffc10e] transition-all active:scale-95 bg-black/30 backdrop-blur-sm">
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 md:h-1 transition-all duration-300 ${idx === current ? 'w-6 md:w-8 bg-[#ffc10e]' : 'w-3 md:w-4 bg-white/30'}`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <div className="group relative bg-slate-900 border border-white/5 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#ffc10e]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,14,0.15)] flex flex-col h-full active:scale-95 md:active:scale-100">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-[#ffc10e] text-black text-[9px] md:text-[10px] font-black uppercase px-1.5 md:px-2 py-0.5 md:py-1 rounded">
          {product.badge}
        </span>
      )}
      
      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-white/5 p-3 md:p-4 flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
           <button className="bg-white text-black p-2 md:p-3 rounded-full hover:bg-[#ffc10e] transition-colors active:scale-95" title="Visualização Rápida">
              <Zap size={18} className="md:w-5 md:h-5" />
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex gap-0.5 md:gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={`md:w-3 md:h-3 ${i < product.rating ? "text-[#ffc10e] fill-[#ffc10e]" : "text-gray-700"}`} />
          ))}
          <span className="text-[10px] md:text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-[#ffc10e] transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-3 md:mb-4">{product.category}</p>
        
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs md:text-sm line-through">R$ {product.oldPrice}</span>
            <span className="text-xl md:text-2xl font-black text-white">R$ {product.price}</span>
          </div>
          <button 
            onClick={onAdd}
            className="bg-white/10 hover:bg-[#ffc10e] hover:text-black text-white p-2.5 md:p-3 rounded-lg transition-all active:scale-95 flex-shrink-0"
          >
            <ShoppingCart size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-8 md:mb-10 px-2">
      <span className="text-[#ffc10e] font-bold uppercase tracking-wider md:tracking-widest text-[10px] md:text-xs mb-2 block">
        Iron & Whey Store
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white uppercase italic mb-3 md:mb-4">
        {title}
      </h2>
      <div className="h-1 w-16 md:w-20 bg-[#ffc10e] mx-auto rounded-full mb-4 md:mb-6"></div>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
        {subtitle}
      </p>
    </div>
  );
}

function BenefitItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 py-2 px-2 md:px-4">
      <div className="bg-black/10 p-2 md:p-3 rounded-full text-black flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-base md:text-lg leading-tight uppercase">{title}</h4>
        <p className="text-xs md:text-sm opacity-80 font-medium">{desc}</p>
      </div>
    </div>
  );
}

function CategoryCard({ title, image, count }: { title: string; image: string; count: string }) {
  return (
    <a href="#" className="group relative h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform">
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
        <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
          {title}
        </h3>
        <p className="text-[#ffc10e] font-bold text-xs md:text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {count} &rarr;
        </p>
      </div>
    </a>
  );
}

function TestimonialCard({ name, role, text, stars }: { name: string; role: string; text: string; stars: number }) {
  return (
    <div className="bg-slate-900 p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/5 relative">
      <div className="absolute -top-3 md:-top-4 left-5 md:left-8 bg-[#ffc10e] text-black p-1.5 md:p-2 rounded-lg">
        <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>
      <p className="text-gray-300 italic mb-4 md:mb-6 mt-3 md:mt-4 leading-relaxed text-sm md:text-base">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-gray-400 flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white text-sm md:text-base truncate">{name}</h4>
          <p className="text-[#ffc10e] text-[10px] md:text-xs uppercase tracking-wide">{role}</p>
        </div>
        <div className="flex flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={`md:w-3.5 md:h-3.5 ${i < stars ? "text-[#ffc10e] fill-[#ffc10e]" : "text-gray-700"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ffc10e] hover:text-black transition-all">
      {icon}
    </a>
  );
}

function ProductsCarousel({ products, onAddToCart }: { products: Product[]; onAddToCart: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicar produtos para criar loop infinito suave
  const duplicatedProducts = [...products, ...products];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Se chegou ao final dos produtos originais, volta para o início
        if (nextIndex >= products.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div className="relative mt-8 md:mt-12 overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          gap: '1rem',
          transform: `translateX(calc(-${currentIndex} * (100% + 1rem)))`,
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
          >
            <ProductCard product={product} onAdd={onAddToCart} />
          </div>
        ))}
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {products.map((_, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 md:h-1 transition-all duration-300 ${
                isActive ? 'w-6 md:w-8 bg-[#ffc10e]' : 'w-3 md:w-4 bg-white/30'
              }`}
              aria-label={`Ir para produto ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: "Whey Protein Isolate Gold",
    category: "Proteínas",
    price: "189,90",
    oldPrice: "249,90",
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=400",
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Creatina Monohidratada Pura",
    category: "Força",
    price: "89,90",
    oldPrice: "119,90",
    rating: 5,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400",
    badge: "Top Rated"
  },
  {
    id: 3,
    name: "Pre-Workout Venom X",
    category: "Pré-Treino",
    price: "149,90",
    oldPrice: "189,90",
    rating: 4,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
    badge: "Lançamento"
  },
  {
    id: 4,
    name: "BCAA Energy 2:1:1",
    category: "Recuperação",
    price: "69,90",
    oldPrice: "99,90",
    rating: 4,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1626968361222-dc3e7b1c313a?auto=format&fit=crop&q=80&w=400",
    badge: null
  }
];
