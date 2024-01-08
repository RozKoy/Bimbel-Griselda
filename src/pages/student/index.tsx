import StudentDescription from "@/components/landing-pages/Murid/StudentDescription";
import MerdekaProgram from "@/components/landing-pages/Murid/MerdekaProgram";
import ClassLevel from "@/components/landing-pages/Murid/ClassLevel";
import LearningMaterials from "@/components/landing-pages/Murid/LearningMaterials";
import PacketPages from "@/components/landing-pages/PacketPages";
import Footer from "@/components/landing-pages/Footer";

export default function Student() {
  return (
    <>
      <StudentDescription />
      <MerdekaProgram />
      <ClassLevel />
      <LearningMaterials />
      <PacketPages />
      <Footer />
    </>
  );
}
