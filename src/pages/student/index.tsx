import StudentDescription from "@/components/landing-pages/Murid/StudentDescription";
import MerdekaProgram from "@/components/landing-pages/Murid/MerdekaProgram";
import ClassLevel from "@/components/landing-pages/Murid/ClassLevel";
import LearningMaterials from "@/components/landing-pages/Murid/LearningMaterials";

export default function Student() {
  return (
    <>
      <StudentDescription />
      <MerdekaProgram />
      <ClassLevel />
      <LearningMaterials />
    </>
  );
}
