import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import bgImage from "../../assets/12797a4ac54742de6d52aea7742705e7b0e99e86.png";

export function ContactSection({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-32 px-4 md:px-8 bg-[#1C1C1A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Aligners Background"
          className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/50 to-transparent" />
      </div>

      {/* Main Container - Minimalist Form Layout */}
      <div className="relative z-10 w-full max-w-[560px] mx-auto flex flex-col text-white">
        
        {/* Right-aligned Title block */}
        <div className="w-full text-right mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/50 mb-6 block">
            {lang === 'fr' ? 'NOUS CONTACTER' : 'CONTACT US NOW'}
          </span>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-[-0.03em] font-light">
            {lang === 'fr' ? 'Commencez ' : 'Initiates '}<span className="font-medium">{lang === 'fr' ? 'votre' : 'these'}</span>{lang === 'fr' ? ' traitement ' : ' treatments '}<span className="font-medium">{lang === 'fr' ? 'en toute sérénité' : 'with all serenity'}</span>
            <br />
            {lang === 'fr' ? 'avec une consultation' : 'with one consultation'}
            <br />
            <span className="font-medium">{lang === 'fr' ? 'et un diagnostic' : 'and a diagnostic'}</span>
          </h2>
        </div>

        {/* Form Fields */}
        <form className="w-full flex flex-col gap-4 md:gap-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder={lang === 'fr' ? 'Prénom' : 'Name *'}
            className="w-full bg-transparent border-0 border-b border-white/30 py-4 px-0 text-[16px] md:text-[18px] text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-0 transition-colors rounded-none font-light"
          />
          <input
            type="tel"
            placeholder={lang === 'fr' ? 'Numéro de téléphone' : 'Mobile phone number'}
            className="w-full bg-transparent border-0 border-b border-white/30 py-4 px-0 text-[16px] md:text-[18px] text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-0 transition-colors rounded-none font-light"
          />
          
          <div className="relative">
            <select
              defaultValue=""
              className="w-full bg-transparent border-0 border-b border-white/30 py-4 px-0 text-[16px] md:text-[18px] text-white/50 focus:text-white focus:outline-none focus:border-white focus:ring-0 transition-colors appearance-none cursor-pointer rounded-none font-light"
            >
              <option value="" disabled hidden>{lang === 'fr' ? 'Spécialité' : 'Speciality'}</option>
              <option value="implant" className="text-[#1C1C1A]">{lang === 'fr' ? 'Prothèse sur implants' : 'Implants-Based Dental'}</option>
              <option value="complete" className="text-[#1C1C1A]">{lang === 'fr' ? 'Prothèse complète' : 'Complete Dentures'}</option>
              <option value="partielle" className="text-[#1C1C1A]">{lang === 'fr' ? 'Prothèse partielle' : 'Partial Prosthesis'}</option>
              <option value="autre" className="text-[#1C1C1A]">{lang === 'fr' ? 'Autre besoin' : 'Other issues'}</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <input
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder={lang === 'fr' ? 'Date souhaitée' : 'Preferred date'}
            className="w-full bg-transparent border-0 border-b border-white/30 py-4 px-0 text-[16px] md:text-[18px] text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-0 transition-colors rounded-none font-light [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          />

          <input
            type="text"
            placeholder={lang === 'fr' ? 'Message' : 'Message'}
            className="w-full bg-transparent border-0 border-b border-white/30 py-4 px-0 text-[16px] md:text-[18px] text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-0 transition-colors rounded-none font-light"
          />

          <div className="mt-8 md:mt-12 flex flex-col gap-8 w-full">
            <p className="text-[13px] md:text-[14px] text-white/40 font-light">
              {lang === 'fr' ? "Nous vous contacterons dans l'heure pour confirmer votre rendez-vous." : "We will contact you within the hour to confirm your new appointments."}
            </p>

            <button
              type="submit"
              className="relative overflow-hidden w-full flex items-center justify-between px-8 py-5 md:px-10 md:py-6 border border-white/30 rounded-full bg-white/5 text-[12px] md:text-[14px] uppercase tracking-[0.15em] font-medium text-white/90 transition-transform duration-300 hover:scale-[1.02] group hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] aspect-square bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-[400ms]">
                {lang === 'fr' ? 'RÉSERVER UNE CONSULTATION' : 'BOOK AN APPOINTMENT TODAY'}
              </span>
              <ArrowDownRight
                className="relative z-10 w-4 h-4 group-hover:text-black group-hover:-rotate-45 transition-all duration-[400ms]"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
