import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PreviewMaterials = () => {
  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/learning-materials", text: "Mata Pelajaran" },
    { text: "Preview" },
  ];
  const router = useRouter(); 

  return (
    <CmsLayout>
      <Breadcrumbs crumbs={crumbs} />
      <div className=" rounded  mt-2 flex space-x-56 ">
        <div className="flex justify-end items-end">
          <Link
            href="/learning-materials"
            className="flex justify-center items-center mt-4 bg-[#FFC436] text-black font-medium rounded-md py-1 text-sm shadow-md cursor-pointer w-[90px] h-[25px] border border-black text-center "
          >
            kembali
          </Link>
        </div>
        <div className=" flex items-end">
          {router.isReady && router.query.image && (
            <Image
            src={
              ("http://localhost:3001/api/lesson/getFile?name=" +
              router.query.image) as string
            }
            width={360}
            height={242}
            alt="preview"
            />
          )}
        </div>
      </div>
    </CmsLayout>
  );
};

export default PreviewMaterials;
