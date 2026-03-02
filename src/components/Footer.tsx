import { Globe, Mail, MapPin, Share2, Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">
                <Trophy />
              </span>
              <span className="text-xl font-black tracking-tight">
                CompeteNow
              </span>
            </div>
            <p className="max-w-sm text-slate-400">
              The global home for elite competition. We empower creators and
              innovators to push their limits and achieve excellence.
            </p>
            <div className="flex gap-4">
              <a
                className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  <Globe />
                </span>
              </a>
              <a
                className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  <Share2 />
                </span>
              </a>
              <a
                className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  <Mail />
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Categories
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Support Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">
                  <Mail />
                </span>
                hello@competenow.io
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">
                  <MapPin />
                </span>
                Global HQ, Innovation Drive
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © 2024 CompeteNow Platform. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
