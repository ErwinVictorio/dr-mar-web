
import { Button } from "@/components/ui/button";
import { Stethoscope, HeartPulse, Award } from "lucide-react";
import doctorImage from "../assets/avatar.png"; // ✅ update with your image path

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-[#E6F4FF] to-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dr. <span className="text-[#009CFF]">Mar Co, MD</span>
          </h1>
          <p className="text-[#009CFF] text-lg font-medium mt-2">
            Chief of Surgery – Royal Hospital, London
          </p>

          <p className="text-gray-600 mt-6 text-base md:text-lg max-w-lg">
            A <strong>board-certified General Surgeon</strong> with over <strong>10 years of experience</strong> 
            in laparoscopic and robotic-assisted procedures. Renowned for his precision, 
            compassion, and leadership in <strong>minimally invasive gastrointestinal, hernia, 
            and endocrine surgeries</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Button className="bg-[#009CFF] hover:bg-[#0085d6] text-white px-6 py-3 rounded-full text-base">
             My Services
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 text-gray-700">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#009CFF]" />
              <span>Minimally Invasive Surgery Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-[#009CFF]" />
              <span>250+ Surgeries Annually</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#009CFF]" />
              <span>Top Filipino Surgeon 2022</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-[250px] md:w-[360px]">
            <img
              src={doctorImage}
              alt="Dr. Mar Co"
              className="w-full h-auto object-cover rounded-full border-[6px] border-[#009CFF]/20 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
