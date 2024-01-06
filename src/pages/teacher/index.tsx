import Navbar from "@/components/landing-pages/Navbar";
import TeacherDescription from "@/components/landing-pages/Guru/TeacherDescription";
import ModuleLearning from "@/components/landing-pages/Guru/ModuleLearning";
import Footer from "@/components/landing-pages/Footer";
import Offering from "@/components/landing-pages/Guru/Oferring";

export default function Teacher() {
  return (
    <>
      <TeacherDescription />
      <ModuleLearning />
      <Offering />
      <Footer />
    </>
  );
}
