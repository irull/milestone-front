import React from "react";

export default function Catalog() {
  return (
    <>
      {/*Hero*/}
      <div className="container mx-auto flex flex-col md:flex-row items-center my-5 md:my-10">
        {/*Left Col*/}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 text-white">
          <p className="uppercase tracking-loose">Smiletone</p>
          <h1 className="font-bold text-3xl my-4">Catalog</h1>
          <p className="leading-normal mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            vitae! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Natus, reiciendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti, corporis.
          </p>
          <button className="bg-transparent hover:bg-green-500 text-gray-200 hover:text-white rounded-lg shadow hover:shadow-lg py-2 px-4 border border-gray-200 hover:border-transparent">
            More Info 👋
          </button>
        </div>
        {/*Right Col*/}
        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          {/*Add your product image here*/}
          <img
            className="rounded-lg hover:opacity-70 duration-300"
            src="https://images.unsplash.com/photo-1625550105110-64e5390f4636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hero"
          />
        </div>
      </div>

      {/* card */}
      <div>
        <section className="py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-white hover:text-gray-300 duration-200 text-xl ">
                  Catalog A
                </p>
              </div>
            </nav>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-105 hover:shadow-lg duration-300 transition">
                  <span className="bg-blue-500 px-4 py-1.5 rounded-l-md text-white text-sm font-normal relative top-10 right-2 hover:-order-none shadow-md z-10">
                    New Product
                  </span>
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300 relative"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-105 hover:shadow-lg duration-300 transition">
                  <span className="bg-red-500 px-4 py-1.5 rounded-l-md text-white text-sm font-semibold relative top-10 right-2 hover:-order-none z-10">
                    New Product
                  </span>
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300 relative"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-105 hover:shadow-lg duration-300 transition">
                  <span className="bg-red-500/70 px-4 py-1.5 rounded-l-md text-white text-sm font-semibold relative top-10 right-2 hover:-order-none z-10">
                    New Product
                  </span>
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300 relative"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-105 hover:shadow-lg duration-300 transition">
                  <span className="bg-red-500/70 px-4 py-1.5 rounded-l-md text-white text-sm font-semibold relative top-10 right-2 hover:-order-none z-10">
                    New Product
                  </span>
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300 relative"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
          </div>
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-white hover:text-gray-300 duration-200 text-xl ">
                  Catalog B
                </p>
              </div>
            </nav>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
          </div>
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-white hover:text-gray-300 duration-200 text-xl ">
                  Catalog C
                </p>
              </div>
            </nav>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <React.Fragment>
                <div className="hover:scale-110 hover:shadow-lg duration-300 transition">
                  <img
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 duration-300"
                    src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="product-catalog"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-gray-200">Product Name</p>
                  <p className="text-gray-200">Stock : 99</p>
                </div>
                <p className="pt-1 text-gray-200 font-medium text-lg">
                  Rp. 99.999
                </p>
              </React.Fragment>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
