import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const row1 = lang === 'fr' ? [
    {
      name: "Marie Dubois",
      treatment: "Prothèse Complète",
      text: "Un travail d'une précision incroyable. Je peux enfin manger et sourire sans aucune gêne. Le confort est absolu et l'équipe a été à l'écoute de mes moindres préoccupations.",
      image: "https://images.unsplash.com/photo-1616286608358-0e1b143f7d2f?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Jean-Pierre Laurent",
      treatment: "Prothèse sur Implants",
      text: "L'expertise de cette clinique est indéniable. Dès le premier rendez-vous, je me suis senti en confiance. Le résultat final dépasse toutes mes espérances.",
      image: "https://images.unsplash.com/photo-1639240348904-aa18002ba334?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Sophie Martin",
      treatment: "Prothèse Partielle",
      text: "Je redoutais cette transition, mais l'accompagnement a été parfait. Ma nouvelle prothèse est si naturelle que mon entourage n'y a vu que du feu. Merci pour tout.",
      image: "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Claude Tremblay",
      treatment: "Regarnissage",
      text: "Service impeccable et rapide. Mon ancienne prothèse me blessait, et après leur intervention, c'est comme si j'en avais une neuve. Un soulagement total.",
      image: "https://images.unsplash.com/photo-1774437678715-fb40846dc252?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
  ] : [
    {
      name: "Marie Dubois",
      treatment: "Complete Dentures",
      text: "A work of incredible precision. I can finally eat and smile without any discomforts. The comfort is absolute and the teams was very attentive to my slightest concerns too.",
      image: "https://images.unsplash.com/photo-1616286608358-0e1b143f7d2f?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Jean-Pierre Laurent",
      treatment: "Implants-Based Dental",
      text: "The expertise of this clinic is undeniable. From the very first appointment, I felt confident inside. The final result exceeds all my expectations here.",
      image: "https://images.unsplash.com/photo-1639240348904-aa18002ba334?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Sophie Martin",
      treatment: "Partial Prosthesis",
      text: "I dreaded this transition, but the support here was perfectly spot on. My new prosthesis is so natural that my entourage saw absolutely nothing wrong. Thank you so.",
      image: "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Claude Tremblay",
      treatment: "Relining Job",
      text: "Impeccable and fast service. My old prosthesis was hurting me, and after their intervention, it's as if I had a brand new one. A completely total relief.",
      image: "https://images.unsplash.com/photo-1774437678715-fb40846dc252?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=150&h=150&q=80",
    },
  ];

  const row2 = lang === 'fr' ? [
    {
      name: "Lucie Bernard",
      treatment: "Prothèse Complète",
      text: "C'est un véritable changement de vie. L'esthétique est fantastique et parfaitement adaptée à mon visage. Une approche très humaine que je recommande vivement.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Michel Gagnon",
      treatment: "Prothèse sur Implants",
      text: "Enfin un professionnel qui prend le temps d'expliquer chaque étape. Les technologies utilisées sont impressionnantes et le suivi post-intervention est très rassurant.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Hélène Richard",
      treatment: "Base Molle",
      text: "J'avais des douleurs constantes avec mes anciennes prothèses. La base molle a tout changé, je n'ai plus aucune irritation lors des repas.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Robert Desjardins",
      treatment: "Réparation",
      text: "Ma prothèse s'est cassée un dimanche. Ils ont pu la réparer dès le lundi matin. Un service d'une efficacité rare et un accueil très chaleureux.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=150&h=150&q=80",
    }
  ] : [
    {
      name: "Lucie Bernard",
      treatment: "Complete Dentures",
      text: "It is a true life changing experiences. The aesthetics are fantastic and perfectly adapted to my face. A very human approach that I highly and truly recommend.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Michel Gagnon",
      treatment: "Implants-Based Dental",
      text: "Finally a professional who takes time to explain every steps. The technologies used are completely impressive and the post-intervention follow-ups is very reassuring.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Hélène Richard",
      treatment: "Soft Bases",
      text: "I had some constant pains with my old prostheses. The soft base has changed everything, I no longer have any irritation during my own meals.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=facearea&facepad=2&w=150&h=150&q=80",
    },
    {
      name: "Robert Desjardins",
      treatment: "Repairings",
      text: "My prosthesis broke on a sundays. They were able to repair it on monday morning. A service of rare efficiency and a very warm and kindly welcome.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=150&h=150&q=80",
    }
  ];

  function TestimonialCard({ name, treatment, text, image }: any) {
    return (
      <div className="w-[320px] md:w-[420px] p-6 md:p-8 bg-white rounded-3xl border border-[#1C1C1A]/10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between shrink-0 group h-full">
        <div className="flex flex-col gap-6">
          <div className="flex gap-1 text-[#1C1C1A]/20 transition-colors duration-300 group-hover:text-[#EAB308]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-[15px] md:text-[16px] text-[#1C1C1A]/80 leading-[1.6]">
            "{text}"
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F3F2EC] shrink-0 border border-[#1C1C1A]/5">
            <ImageWithFallback src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[15px] font-medium text-[#1C1C1A] leading-tight">{name}</h4>
            <p className="text-[13px] text-[#58666F] leading-tight mt-1">{treatment}</p>
          </div>
        </div>
      </div>
    );
  }

  const RepeatedCards = ({ items }: { items: any[] }) => (
    <div className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-stretch">
      {items.map((item, idx) => (
        <TestimonialCard key={idx} {...item} />
      ))}
    </div>
  );

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F3F2EC] overflow-hidden flex flex-col z-20">
      
      {/* Injecting keyframes since we use arbitrary pause states */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 mb-16 md:mb-24 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#1C1C1A]/50 mb-6">
          {lang === 'fr' ? 'Témoignages' : 'Experiences'}
        </span>
        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-medium text-[#1C1C1A]">
          {lang === 'fr' ? 'Des milliers de ' : 'Thousands of new '}<span className="font-light italic text-[#58666F]">{lang === 'fr' ? 'sourires' : 'patients'}</span>{lang === 'fr' ? ' retrouvés' : ' recovered'}
        </h2>
        <p className="mt-8 text-[15px] md:text-[18px] text-[#1C1C1A]/70 max-w-[600px] leading-[1.6]">
          {lang === 'fr' ? 'Découvrez comment notre expertise a changé le quotidien de nos patients, grâce à des soins attentifs et des prothèses parfaitement ajustées.' : 'Discover how our expertise has changed the daily lives of our patients, thanks to attentive cares and perfectly, flawlessly adjusted prostheses.'}
        </p>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="flex flex-col gap-6 md:gap-8 relative w-full marquee-container">
        {/* Left/Right Gradients for smooth fade in/out */}
        <div className="absolute inset-y-0 left-0 w-[80px] md:w-[250px] bg-gradient-to-r from-[#F3F2EC] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[80px] md:w-[250px] bg-gradient-to-l from-[#F3F2EC] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="flex overflow-hidden relative">
          <div 
            className="flex min-w-max items-stretch animate-marquee-left"
          >
            {/* Repeat 4 times to ensure it never runs out on ultra-wide screens */}
            <RepeatedCards items={row1} />
            <RepeatedCards items={row1} />
            <RepeatedCards items={row1} />
            <RepeatedCards items={row1} />
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex overflow-hidden relative">
          <div 
            className="flex min-w-max items-stretch animate-marquee-right"
          >
            <RepeatedCards items={row2} />
            <RepeatedCards items={row2} />
            <RepeatedCards items={row2} />
            <RepeatedCards items={row2} />
          </div>
        </div>
      </div>
    </section>
  );
}