import { React, Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

export default function Pricelist() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div className="bg-gray-900 h-full">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                Temukan Prodak terbaik dikelasnya
              </h1>
              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Bahan pilihan</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Kualitas Printing terbaik</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Custom sesukamu</span>
                </p>
              </div>
            </div>
            <div className="w-full mt-8 bg-transparent">
              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-400"
              >
                Whatsapp
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-lg lg:max-w-2xl  brightness-75"
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="hero"
            />
          </div>
        </div>
        {/* TAB */}
        <div className="container px-2 py-16 sm:px-0">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl w-60 mx-auto">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "w-full py-2.5 text-lg font-bold tracking-wider leading-5 text-blue-700 bg-white/10 rounded-lg focus:outline-none "
                        : "w-full py-2.5 text-lg font-bold tracking-wider leading-5 text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                    }
                  >
                    Kaos
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "w-full py-2.5 text-lg font-bold tracking-wider leading-5 text-blue-700 bg-white/10 rounded-lg focus:outline-none "
                        : "w-full py-2.5 text-lg font-bold tracking-wider leading-5 text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                    }
                  >
                    Sablon
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              {/* panel kaos */}
              <Tab.Panel>
                <div className="container mt-10">
                  <div className="">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Cotton 20s
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 lg:1/2 rounded-lg"
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end cotton 20s */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Cotton 30s
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 lg:1/2 rounded-lg"
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end of cotton 30s */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Bamboo
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 lg:1/2 rounded-lg bg-contain bg-center"
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end off bamboo */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Cotton 30s Kids
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 w-60 lg:1/2 rounded-lg bg-contain bg-center"
                        src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              {/* break space */}
              <Tab.Panel>
                {/* panel sablon */}
                <div className="container mt-10">
                  <div className="">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Sablon DTF
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 w-60 lg:1/2 rounded-lg"
                        src="https://id-live-05.slatic.net/p/094c0071eb3df0f273f84c9991deb998.jpg_720x720q80.jpg_.webp"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end cotton 20s */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Cotton 30s
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 lg:1/2 rounded-lg"
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end of cotton 30s */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Bamboo
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 lg:1/2 rounded-lg bg-contain bg-center"
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end off bamboo */}
                  <div className="mt-10">
                    <h1 className="text-white text-center text-lg font-bold tracking-wider ">
                      Cotton 30s Kids
                    </h1>
                    <div className="flex mt-5 justify-center items-center gap-x-3">
                      <img
                        className="h-80 w-60 lg:1/2 rounded-lg bg-contain bg-center"
                        src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                        alt="size"
                      />
                      <div className="order-2">
                        <table className="border-2 text-white h-80 md:table-fixed">
                          <thead className="bg-gray-700 ">
                            <tr className="border-2 ">
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                rowSpan="3"
                              >
                                Size
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Panjang
                              </th>
                              <th
                                className="border-2 w-64 hover:bg-gray-900"
                                colSpan="2"
                              >
                                Lengan Pendek
                              </th>
                            </tr>
                            <tr className="border-2">
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Putih
                              </th>
                              <th className="border-2 hover:bg-gray-900">
                                Warna
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr className="hover:bg-gray-800">
                              <td className="border">S (45 x 64 cm)</td>
                              <td className="border">26.000</td>
                              <td className="border">29.000</td>
                              <td className="border">31.500</td>
                              <td className="border">36.500</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">M (47 x 67 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">L (50 x 70 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XL (53 x 73 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXL (56 x 76 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXL (59 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                            <tr className="hover:bg-gray-800">
                              <td className="border">XXXXL (67 x 79 cm)</td>
                              <td className="border">-</td>
                              <td className="border">-</td>
                              <td className="border">32.500</td>
                              <td className="border">34.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
