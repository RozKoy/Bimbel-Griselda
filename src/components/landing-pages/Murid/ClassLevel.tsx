import WALink from "./WALink";
export default function ClassLevel() {
  return (
    <div className="bg-[url('../../public/assets/latarJenjang.png')] w-full h-[400px]  sm:min-h-screen">
      <div className="w-full h-full  gradasi1 flex flex-col space-y-14 items-center justify-center px-4 sm:px-0 sm:space-y-28   sm:min-h-screen ">
        <div className="flex flex-col space-y-2 w-[334px] sm:space-y-4 sm:w-[601px]">
          <p className="font-extrabold text-center text-[26px] text-[#000] sm:text-5xl">
            Jenjang Kelas
          </p>
          <p className="text-center text-[#7C7C7C] text-[12px] sm:text-lg">
            This clean and ever contemporary waterproof rucksack features an
            internal laptop pocket, on the back panel.
          </p>
        </div>

        <div className="flex flex-col space-y-3 items-center sm:space-y-14 ">
          <div className="flex space-x-2 sm:space-x-12">
            <WALink
              title="TK"
              href=" https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+bimbel+griselda+jenjang+TK+kelas+...+%28TK+kelas+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
            <WALink
              title="SD"
              href=" https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+bimbel+griselda+jenjang+SD+kelas+...+%28SD+kelas+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
            <WALink
              title="SMP"
              href=" https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+Bimbel+griselda+jenjang+SMP+kelas+...+%28SMP+kelas+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
            <WALink
              title="SMA"
              href=" https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+Bimbel+griselda+jenjang+SMA+kelas+...+%28SMA+kelas+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
          </div>
          <div className="flex space-x-2 sm:space-x-12">
            <WALink
              title="KULIAH"
              href="https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+Bimbel+griselda+jenjang+Kuliah+semester+...+%28Semester+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
            <WALink
              title="UMUM"
              href="https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+Bimbel+griselda+jenjang+UMUM+untuk+bidang+studi+...+%28Bidang+studi+apa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
            <WALink
              title="DLL"
              href="https://wa.me/6282233216825?text=Halo+kak+saya+ingin+daftar+bimbel+griselda+jenjang+DLL+kelas+...+%28DLL+kelas+berapa%29++Tolong+beri+pricelist+dan+info+selengkapnya"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
