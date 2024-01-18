import StudentDescription from "@/components/landing-pages/Murid/StudentDescription";
import MerdekaProgram from "@/components/landing-pages/Murid/MerdekaProgram";
import ClassLevel from "@/components/landing-pages/Murid/ClassLevel";
import LearningMaterials from "@/components/landing-pages/Murid/LearningMaterials";
import PacketPages from "@/components/landing-pages/PacketPages";
import Footer from "@/components/landing-pages/Footer";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";
import { axiosInstance } from "@/utils/axios";
import NextIcon from "@/components/landing-pages/Icons/NextIcon";
import PrevIcon from "@/components/landing-pages/Icons/PrevIcon";
import React from "react";
import CardLearningMaterials from "@/components/landing-pages/Murid/CardLearningMaterials";
import Slider from "react-slick";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextIcon stroke="#FFB700" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon stroke="#FFB700" />
    </div>
  );
}

interface CategoryList {
  label : string
  value : string
}

interface Category {
  id: string;
  name: string;
}

interface Lesson {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
}


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
