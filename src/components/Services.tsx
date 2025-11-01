
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  HeartPulse,
  Microscope,
  Stethoscope,
  Syringe,
  Hospital,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Minimally Invasive Surgery",
      description:
        "Advanced laparoscopic and robotic-assisted procedures designed to reduce recovery time, scarring, and complications.",
      icon: Microscope,
    },
    {
      title: "Gastrointestinal Surgery",
      description:
        "Comprehensive surgical care for the stomach, intestines, colon, gallbladder, and appendix using precision techniques.",
      icon: Stethoscope,
    },
    {
      title: "Hernia Repair",
      description:
        "Expert in complex abdominal and inguinal hernia repairs, ensuring durable results with advanced mesh and robotic technology.",
      icon: Activity,
    },
    {
      title: "Endocrine Surgery",
      description:
        "Specialised in thyroid and parathyroid surgery with minimally invasive approaches for safe, effective outcomes.",
      icon: Syringe,
    },
    {
      title: "Oncological Surgery",
      description:
        "Comprehensive surgical interventions for cancers, collaborating with multidisciplinary oncology teams for optimal patient care.",
      icon: HeartPulse,
    },
    {
      title: "Trauma & Emergency Surgery",
      description:
        "Experienced in handling acute surgical emergencies with rapid decision-making and evidence-based procedures.",
      icon: Hospital,
    },
  ];

  return (
    <section className="py-20 bg-white" id="Services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Clinical <span className="text-[#009CFF]">Services</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Dr. Mar Co provides advanced surgical care with compassion and precision, 
            using cutting-edge technology to ensure the best patient outcomes.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100"
              >
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  {/* Icon container with color transition */}
                  <div className="p-4 bg-[#E6F4FF] rounded-full transition-all duration-300 group-hover:bg-[#009CFF]">
                    <Icon className="w-10 h-10 text-[#009CFF] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <CardTitle className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#009CFF]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600 px-6 pb-8">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
