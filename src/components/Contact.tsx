
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#F7FBFF] py-16 border-t border-gray-200" id="ContactSection">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT: Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[#009CFF]">Touch</span>
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#009CFF] mt-1" />
                <span>
                  Royal Hospital, Whitechapel Rd, London 1FR, United Kingdom
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009CFF]" />
                <span>+44 350 838 1099</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009CFF]" />
                <a
                  href="mailto:dr.marcomed.uk@gmail.com"
                  className="hover:text-[#009CFF] transition-colors"
                >
                  dr.marcomed.uk@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#009CFF]" />
                <span>Mon–Fri: 9AM – 5PM</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Social Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Follow <span className="text-[#009CFF]">Dr. Mar Co</span>
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#009CFF] transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="#"
                  className="font-semibold hover:text-[#009CFF] transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-[#009CFF] transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="#"
                  className="font-semibold hover:text-[#009CFF] transition-colors"
                >
                  Facebook
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#009CFF] transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="#"
                  className="font-semibold hover:text-[#009CFF] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
