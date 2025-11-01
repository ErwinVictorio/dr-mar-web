
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Archie Landers",
            message:
                "I am so grateful for Dr. Mar Co's excellent surgical skills. My results are amazing, and I am so happy with the outcome. He was also kind and professional throughout the process.",
        },
        {
            name: "Alexander S.",
            message:
                "From the initial consultation to the follow-up, Dr. Co was patient and took the time to explain everything, answering all my questions. He made me feel safe and well-informed, and his reassuring manner put all my fears at ease.",
        },
        {
            name: "Benjamin Smith",
            message:
                "I had an incredible experience with Dr. Mar Co and the entire staff. They provided outstanding care and support, making a stressful time a positive and empowering journey. I highly recommend them.",
        },
        {
            name: "William Jones",
            message:
                "Dr. Mar Co is an excellent surgeon and a very kind man—a very simple personality. He addressed all my concerns, and I am extremely satisfied with the final result. I wouldn't hesitate to recommend him.",
        },

        {
            name: "Elizabeth Campbell",
            message:
                "Dr. Mar Co was fantastic. Explained everything clearly, put me at ease, and the surgery was a complete success. Highly recommend!",
        },

        {
            name: "Eduard Thompson",
            message:
                "Excellent care from start to finish. Dr. CO is a skilled surgeon with a wonderful bedside manner. Very grateful for the results.",
        },

        {
            name: "Ruben Delos Santos",
            message:
                "Mabuhay! Maraming Salamat Dr.Co,One of the best Filipino doctor here in London.Napaka simple and approachable.",
        },

        {
            name: "Martin Hughes",
            message:
                "Very professional and kind staff. Dr. Mar Co listened to all my concerns and I felt confident in their abilities. The recovery was smooth, and I am very happy.",
        },

        {
            name: "James Gray",
            message:
                "I cannot thank Dr. Mar Co  enough. His expertise and attention to detail were outstanding. A very positive experience.",
        },
    ];

    return (
    <section id="TestimonialsSection" className="bg-[#E6F4FF] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What <span className="text-[#009CFF]">Patients Say</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Heartfelt experiences from patients who entrusted their health to{" "}
          <span className="font-semibold text-[#009CFF]">Dr. Mar Co, MD</span>.
        </p>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-2xl mx-2">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#009CFF]/10 rounded-full p-3 mb-4">
                      <Quote className="w-6 h-6 text-[#009CFF]" />
                    </div>
                    <p className="text-gray-700 text-base italic leading-relaxed mb-5">
                      “{item.message}”
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-[#009CFF] font-semibold text-lg">
                        — {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Patient of <span className="text-[#009CFF] font-medium">Dr. Mar Co, MD</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-[#009CFF] hover:bg-[#009CFF] hover:text-white transition-colors" />
          <CarouselNext className="text-[#009CFF] hover:bg-[#009CFF] hover:text-white transition-colors" />
        </Carousel>
      </div>
    </section>
  );
}
