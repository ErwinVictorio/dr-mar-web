
import { GraduationCap, Award, Briefcase } from "lucide-react";
import doctorImage from "../assets/avatar.png"; // ✅ Update with your image path

export default function About() {
  return (
    <section className="bg-linear-to-b from-white to-[#F0F8FF] py-20" id="About">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-[#009CFF]">Dr. Mar Co</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Board-Certified General Surgeon • Chief of Surgery – Royal Hospital, London
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* LEFT IMAGE */}
          <div className="md:w-1/5 flex justify-center">
            <img
              src={doctorImage}
              alt="Dr. Mar Co"
              className="w-[300px] h-[300px] object-cover rounded-2xl shadow-lg border-4 border-[#009CFF]/20"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-2/3 space-y-10 text-gray-700">
            {/* BIO */}
            <div>
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4">
                Biography
              </h3>
              <p className="leading-relaxed">
                Dr. Mar Co is a highly accomplished, board-certified <strong>General Surgeon</strong> with over
                <strong> 10 years of experience</strong> in diagnosing and treating a wide range of surgical conditions.
                Specializing in <strong>laparoscopic and robotic-assisted procedures</strong>, he is renowned for his precision in
                minimally invasive gastrointestinal, hernia, and endocrine surgeries.
              </p>
              <p className="leading-relaxed mt-4">
                Driven by a commitment to <strong>patient safety and rapid recovery</strong>, Dr. Co employs the latest surgical
                technologies with compassion and effective communication. As <strong>Chief of Surgery at Royal Hospital</strong>,
                he leads a team dedicated to clinical excellence and innovative surgical practices.
              </p>
            </div>

            {/* CLINICAL EXPERTISE */}
            <div>
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4">
                Clinical Expertise & Procedures
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimally Invasive Surgery – advanced laparoscopic and robotic techniques.</li>
                <li>Gastrointestinal Surgery – procedures for stomach, intestines, colon, gallbladder, and appendix.</li>
                <li>Hernia Repair – complex abdominal and inguinal hernia repairs using advanced methods.</li>
                <li>Endocrine Surgery – thyroid and parathyroid surgery.</li>
                <li>Oncological Surgery – multidisciplinary surgical intervention for cancers.</li>
                <li>Trauma & Emergency Surgery – managing acute surgical emergencies.</li>
              </ul>
            </div>

            {/* EDUCATION & QUALIFICATIONS */}
            <div>
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#009CFF]" /> Education & Qualifications
              </h3>
              <ul className="space-y-1">
                <li><strong>Medical Degree (MD):</strong> Stanford University School of Medicine, Magna Cum Laude</li>
                <li><strong>Residency (General Surgery):</strong> Stanford Hospital, CA</li>
                <li><strong>Board Certification:</strong> American Board of Surgery (ABS), Ranked 2</li>
                <li><strong>Fellowship:</strong> Fellow of the American College of Surgeons (FACS)</li>
                <li><strong>Memberships:</strong> Royal College of Surgeons (RCS), ASGBI, UK</li>
              </ul>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#009CFF]" /> Professional Experience
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Chief of Surgery – Royal Hospital, London</strong><br />
                  Overseeing surgical operations, performing 250+ complex procedures annually, mentoring residents, and leading
                  clinical research initiatives.
                </li>
                <li>
                  <strong>Attending General Surgeon – St. George’s Hospital, London</strong><br />
                  Developed and implemented the hospital’s new robotic surgery program.
                </li>
              </ul>
            </div>

            {/* AWARDS */}
            <div>
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#009CFF]" /> Awards & Publications
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>America’s Top Surgeons (Consumers’ Research Council of America, 2022)</li>
                <li>Top Filipino Surgeon – Featured in the Journal of the American College of Surgeons, 2022</li>
              </ul>
            </div>

            {/* CONTACT */}
            {/* <div className="pt-4 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-[#009CFF] mb-4">Contact & Appointments</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#009CFF]" />
                  <span>Royal Hospital, London, United Kingdom</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#009CFF]" />
                  <span>+44 350 838 1099</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#009CFF]" />
                  <span>dr.marcomed.uk@gmail.com</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
