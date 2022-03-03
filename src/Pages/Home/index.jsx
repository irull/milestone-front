import React from "react";
import Carousel from "../../Components/Carousel";
import CarouselMobile from "../../Components/CarouselMobile";
import Footer from "../../Components/Footer";
import { FaCreativeCommonsZero } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="z-0 mt-14 mb-28 hidden md:block">
        <Carousel />
      </div>
      <div className="z-0 mb-10 md:hidden">
        <CarouselMobile />
      </div>
      <div className="container">
        <div className="flex flex-col mb-20">
          <h1 className="text-center text-4xl font-semibold mb-10 tracking-wider text-white">
            Cetak kaos ga pake ribet 🎆
          </h1>
          <p className="lg:mx-64 mx-0 text-center tracking-wider mb-2 leading-relaxed  text-white">
            Sekarang cetak kaos kesukaanmu, ga perlu pusing mikirin harus pesan
            banyak, di kita bisa kok pesan satuan. Dengan kualitas yang sudah
            terjamin ya pastinya.
          </p>
          <p className="lg:mx-64 mx-0 text-center tracking-wider mb-5 leading-relaxed  text-white">
            Atau kamu mau pesan kuantiti buat Komunitasmu, buat Kantormu, atau
            buat kegiatanmu? bisa banget loh... tenang, untuk harga bisa
            langsung kontak kita ya, kita kasi diskon deh
          </p>
          <button className="bg-transparent hover:bg-green-500 text-gray-200 hover:text-white rounded-lg shadow hover:shadow-lg py-2 px-4 border border-gray-200 hover:border-transparent w-40 mx-auto">
            More Info 👋
          </button>
        </div>
        <div className="flex text-white lg:mx-52 bg-slate-800 rounded-md h-96 mb-10">
          <div className="m-4 flex flex-col justify-center w-[70rem]">
            <h1 className="text-3xl font-semibold mb-5">
              Apa perbedaan Sablon digital dan Sablon manual?
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum pariatur sed consectetur delectus aspernatur molestias
              animi amet illum, quos reprehenderit.
            </p>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              delectus minima ullam cupiditate enim rerum aperiam omnis. Fuga,
              quaerat iste?
            </p>
          </div>
          <div className="w-[50rem] m-4 flex">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="baner"
              className="m-auto align-middle rounded-md"
            />
          </div>
        </div>
        <div className="flex text-white lg:mx-52 bg-slate-800 rounded-md h-96 mb-10">
          <div className="m-4 flex flex-col justify-center w-[70rem]">
            <h1 className="text-3xl font-semibold mb-5">
              Mengenal lebih dekat metode Sablon DTF pada kaos
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum pariatur sed consectetur delectus aspernatur molestias
              animi amet illum, quos reprehenderit.
            </p>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              delectus minima ullam cupiditate enim rerum aperiam omnis. Fuga,
              quaerat iste?
            </p>
          </div>
          <div className="w-[50rem] m-4 flex">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="baner"
              className="m-auto align-middle rounded-md"
            />
          </div>
        </div>
        <div className="flex text-white lg:mx-52 bg-slate-800 rounded-md h-96 mb-20">
          <div className="m-4 flex flex-col justify-center w-[70rem]">
            <h1 className="text-3xl font-semibold mb-5">
              Mengenal metode PVC pada kaos, dan apa itu PVC?
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum pariatur sed consectetur delectus aspernatur molestias
              animi amet illum, quos reprehenderit.
            </p>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              delectus minima ullam cupiditate enim rerum aperiam omnis. Fuga,
              quaerat iste?
            </p>
          </div>
          <div className="w-[50rem] m-4 flex">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="baner"
              className="m-auto align-middle rounded-md"
            />
          </div>
        </div>
        <div>
          <h2 className="text-center text-4xl font-semibold mb-10 tracking-wider text-white">
            Mengapa cetak di kami?
          </h2>
          <div className="flex justify-center gap-x-4">
            <div>
              <div className="h-72 w-72 bg-gray-800 rounded-md">
                <FaCreativeCommonsZero className="text-white text-8xl mx-auto py-3" />
                <h3 className="text-white text-center text-xl font-bold tracking-wider mb-4">
                  Tanpa Minimum Order
                </h3>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eos. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <div className="h-72 w-72 bg-gray-800 rounded-md">
                <FaCreativeCommonsZero className="text-white text-8xl mx-auto py-3" />
                <h3 className="text-white text-center text-xl font-bold tracking-wider mb-4">
                  Tanpa Minimum Order
                </h3>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eos. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <div className="h-72 w-72 bg-gray-800 rounded-md">
                <FaCreativeCommonsZero className="text-white text-8xl mx-auto py-3" />
                <h3 className="text-white text-center text-xl font-bold tracking-wider mb-4">
                  Tanpa Minimum Order
                </h3>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eos. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <div className="h-72 w-72 bg-gray-800 rounded-md">
                <FaCreativeCommonsZero className="text-white text-8xl mx-auto py-3" />
                <h3 className="text-white text-center text-xl font-bold tracking-wider mb-4">
                  Tanpa Minimum Order
                </h3>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, eos. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
