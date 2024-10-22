import PatnerDescription from "@/components/landing-pages/Mitra/ParnerDescription";
import GoalsAndBenefits from "@/components/landing-pages/Mitra/GoalsAndBenefits";
import RegistrationSteps from "@/components/landing-pages/Mitra/RegistrationSteps";
import PacketPages from "@/components/landing-pages/PacketPages";
import ListMitra from "@/components/landing-pages/Mitra/ListMitra";
import MitraPacketPages from "@/components/landing-pages/Mitra/MitraPacketPages";
import Footer from "@/components/landing-pages/Footer";

export default function Patner() {
  return (
    <>
      <PatnerDescription />
      <GoalsAndBenefits />
      <RegistrationSteps />
      <MitraPacketPages />
      <ListMitra />
      <Footer />
    </>
  );
}
