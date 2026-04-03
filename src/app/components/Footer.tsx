import { motion } from "motion/react";
import { Instagram, Facebook } from "lucide-react";

import logo1 from "../../imports/MJD_Denturologiste.svg";
import logo2 from "../../imports/MJD_Logo_(1).svg";
import logo3 from "../../imports/MJD_Dent.svg";

export function Footer({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  return (
    <footer className="w-full bg-[#1C1C1A] text-white pt-24 md:pt-32 pb-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section - 4 Columns */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-24 md:mb-32">
          
          {/* Column 1: Logo */}
          <div className="flex-1 md:max-w-xs">
            <div className="flex flex-col items-start gap-4">
               {/* Display logo variations elegantly */}
              <div className="flex items-center gap-3">
                <img src={logo3} alt="Logo Dent" className="h-[52px] w-auto filter invert opacity-90" />
                <img src={logo1} alt="MJD Denturologiste" className="h-[36px] w-auto filter invert" />
              </div>
            </div>
          </div>

          {/* Columns 2, 3, 4 wrapper */}
          <div className="flex-1 flex flex-col md:flex-row justify-end gap-12 md:gap-24">
            {/* Column 2: Services */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-[14px] font-medium text-white/50 mb-2">{lang === 'fr' ? 'Services' : 'Services'}</h4>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Prothèses sur implants' : 'Implants Based Dental!'}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Prothèses complètes' : 'Complete Dentures  '}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Prothèses partielles' : 'Partial Prosthesis  '}
              </a>
            </div>

            {/* Column 3: More */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-[14px] font-medium text-white/50 mb-2">{lang === 'fr' ? 'Découvrir' : 'Discover!'}</h4>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Notre équipe' : 'Our team now'}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Témoignages' : 'Experiences'}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Carrières' : 'Careers  '}
              </a>
            </div>

            {/* Column 4: Clinic */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-[14px] font-medium text-white/50 mb-2">{lang === 'fr' ? 'Clinique' : 'The Team'}</h4>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'À propos' : 'About us'}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'Contact' : 'Contact'}
              </a>
              <a href="#" className="text-[16px] text-white/90 hover:text-white transition-colors font-light whitespace-pre">
                {lang === 'fr' ? 'FAQ' : 'FAQ'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[13px] text-white/50 font-light">
            <span className="flex items-center gap-2">{lang === 'fr' ? '© 2026 MJD Denturologiste' : '© 2026 MJD Denturologists'}</span>
            <span className="hidden md:inline">{lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved.'}</span>
            <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? 'Politique de confidentialité' : 'Our privacy policies overall'}</a>
            <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? "Conditions d'utilisation" : 'Terms and conditions now'}</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            {/* Custom Logo mark icon just for flair based on the 3rd logo */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all">
               <img src={logo3} alt="Logo Dent" className="h-4 w-4 filter invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}