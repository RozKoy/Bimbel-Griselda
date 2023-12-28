import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import BigModulIcon from "@/components/cms/dashboard-admin/BigModulIcon";
import BigCountIcon from "@/components/cms/dashboard-admin/BigCountIcon";
import Link from "next/link";
const Dashboard = () => {
  const crumbs = [{ text: "Dashboard" }];
  return (
    <CmsLayout>
      <Breadcrumbs crumbs={crumbs} />
      <div className="flex justify-center items-center space-x-4 mt-[11%]">
        <Link
          href="/learning-materials"
          className="flex flex-col justify-center items-center w-[273px] h-[218px] bg-[#FFC436] rounded-sm"
        >
          <BigModulIcon />
          <p className="text-xl font-medium">Materi</p>
          <p className="text-xl font-medium">Pembelajaran</p>
        </Link>
        <Link
          href="/count-member"
          className="flex flex-col justify-center items-center w-[273px] h-[218px] bg-[#FFC436] rounded-sm"
        >
          <BigCountIcon />
          <p className="text-xl font-medium">Jumlah</p>
          <p className="text-xl font-medium">Event & Member</p>
        </Link>
      </div>
    </CmsLayout>
  );
};

export default Dashboard;
