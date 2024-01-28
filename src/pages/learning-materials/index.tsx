import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import SearchBar from "@/components/cms/dashboard-admin/SearchBar";
import AddNew from "@/components/cms/dashboard-admin/AddNew";
import Image from "next/image";
import eye from "../../../public/assets/Eye.png";
import Link from "next/link";
import * as React from "react";
import { Pagination, Modal } from "flowbite-react";
import hapus from "../../../public/assets/Delete.png";
import ToastSucces from "@/components/cms/ToastSucces";
import useAxiosPrivate from "@/utils/UseAxiosPrivate";
import useLocalStorage from "@/utils/useLocalStorage";
import { useRouter } from "next/router";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";

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

interface LessonData {
  items: any;
  meta: any;
}

const LearningMaterials = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState("");
  const axiosPrivate = useAxiosPrivate();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const router = useRouter();
  const { data, error, isLoading }: SWRResponse<LessonData, any, boolean> =
    useSWR(`/lesson/getAll?page=${currentPage}&search=${search}`, (url) =>
      axiosPrivate
        .get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data?.data)
    );
  const [target, setTarget] = React.useState("");
  const [targetFile, setTargetFile] = React.useState("");
  const onPageChange = (page: number) => setCurrentPage(page);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [showToast, setShowToast] = React.useState(false);
  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { text: "Materi Pembelajran" },
  ];

  async function deleteData() {
    setOpenModal(false);
    try {
      await axiosPrivate.delete("/lesson/deleteFile", {
        data: {
          file: targetFile,
        },
      });
      await axiosPrivate.delete("/lesson/delete", {
        data: {
          id: target,
        },
      });
    } catch (error: any) {
      if (error.response.status === 400) {
        alert(error.response.data.message[0].message);
      } else {
        alert(error.response.data.message);
      }
    }
    mutate(`/lesson/getAll?page=${currentPage}&search=${search}`);
    setShowToast(true);
  }

  // const mapel = [
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  //   {
  //     id: "1",
  //     name: "Ilmu Pengetahuan Alam",
  //     kategori: "SD",
  //   },
  // ];

  // const itemsPerPage = 5;

  // const filteredItems = mapel.filter(
  //   (item: any) =>
  //     item.name.toLowerCase().includes(search.toLowerCase()) ||
  //     item.kategori.toLowerCase().includes(search.toLowerCase())
  // );

  // const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const paginatedItems = filteredItems.slice(startIndex, endIndex);

  return (
    <CmsLayout>
      <Breadcrumbs crumbs={crumbs} />
      <div className="flex justify-between mt-6">
        <SearchBar
          type="text"
          id="search"
          placeholder="Cari Bahan Ajar"
          onChange={(e: any) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset current page when search changes
          }}
        />
        <AddNew href="/learning-materials/add-materials" />
      </div>
      <div className="overflow-x-auto rounded-md mt-4  h-full flex flex-col justify-between ">
        <table className="w-full text-[18px] text-center rtl:text-right border-4 border-[#FFC436] ">
          <thead className="bg-[#ffc43666] sticky top-0">
            <tr>
              <th scope="col" className="p-2.5 font-medium text-base">
                NO
              </th>
              <th scope="col" className="p-2.5 font-medium text-base">
                Mata Pelajaran
              </th>
              <th scope="col" className="p-2.5 font-medium text-base">
                Kategori
              </th>
              <th scope="col" className="p-2.5 font-medium text-base">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.items?.map((item: any, index: number) => (
              <tr key={index}>
                <td scope="row" className="px-6 py-4 font-medium text-base">
                  {5 * (currentPage - 1) + (index + 1)}
                </td>
                <td className="px-6 py-4 font-medium text-base">{item?.name}</td>
                <td className="px-6 py-4 font-medium text-base">
                  {item.category?.name}
                </td>
                <td className="px-6 py-4 flex space-x-3 justify-center">
                  <Link
                    href={{
                      pathname: "/learning-materials/edit-materials",
                      query: { id: item.id },
                    }}
                    className="w-[83px] h-[26px] bg-[#FFC436] rounded-md shadow-md text-sm flex justify-center items-center  font-medium"
                  >
                    {" "}
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      setOpenModal(true), setTarget(item.id);
                      setTargetFile(item.image);
                    }}
                    className="w-[83px] h-[26px] bg-[#FFC436] rounded-md shadow-md text-sm  flex justify-center items-center  font-medium"
                  >
                    Hapus
                  </button>
                  <Link
                    href={{
                      pathname: "/learning-materials/preview-materials",
                      query: { image: item.image },
                    }}
                    onClick={() =>{ 
                      router.push({pathname: "/learning-materials/preview-materials", query: { image: item.image }}, undefined, { shallow: false })
                    }}
                    className="w-[40px] h-[26px] bg-[#FFC436] rounded-md shadow-md text-sm flex justify-center items-center   font-medium"
                  >
                    <Image src={eye} width={20} height={20} alt="detail" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {data?.meta?.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={data?.meta?.totalPages}
            onPageChange={onPageChange}
            showIcons
            previousLabel=""
            nextLabel=""
            theme={{
              pages: {
                base: "xs:mt-0 mt-2 inline-flex  items-center -space-x-px border border-4 border-[#FFC436] rounded-md",
                showIcon: "inline-flex",
                previous: {
                  base: "bg-white px-3 py-2  hover:bg-white  ",
                  icon: "h-6 w-5",
                },
                next: {
                  base: "bg-white px-3 py-2  hover:bg-white  ",
                  icon: "h-6 w-5",
                },
                selector: {
                  base: "bg-white px-3 py-2  w-[35px] text-gray-500",
                  active:
                    "bg-white  hover:bg-white hover:text-[#000] dark:border-gray-700 text-[#000]",
                  disabled: "opacity-20 cursor-normal",
                },
              },
            }}
          />
        )}
        ;
      </div>

      {/* Delete Modal */}

      <Modal
        className=""
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Body className="border-4 border-[#FFC436] rounded-md py-6">
          <div className="flex flex-col justify-center items-center">
            <Image src={hapus} width={131} height={143} alt="hapus" />
            <p className="text-[#FD0000] mt-4 mb-6">
              Apakah Anda Ingin Mengapus Mata Pelajaran Ini
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpenModal(false)}
                className="border-2 border-[#F00] rounded-md w-[119px] h-[30px] text-center text-md text-[#F00] font-medium shadow-md"
              >
                No
              </button>
              <button
                onClick={deleteData}
                className="border-2 bg-[#FFC436] rounded-md w-[119px] h-[30px] text-center text-md font-medium shadow-md"
              >
                Ya
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Toast Succes Delete */}

      {showToast && (
        <ToastSucces
          text="Data Berhasil Dihapus"
          onDismiss={() => setShowToast(false)}
        ></ToastSucces>
      )}
    </CmsLayout>
  );
};

export default LearningMaterials;
