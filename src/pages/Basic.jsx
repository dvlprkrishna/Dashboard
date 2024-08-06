import Header from "../components/common/Header";

import { fakeData } from "../api/fakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Table from "../components/common/Table";
import { useState } from "react";
import { fakeStocks } from "../api/fakeStocks";

const Basic = () => {
  const [fakeStockData, setFakeStockData] = useState(fakeStocks);

  return (
    <>
      <div className="relative z-10 flex-1 overflow-auto p-4">
        <Header title={"Basic"} />
        <div className="mb-4 flex flex-col flex-wrap gap-4">
          <div>Random Fake stock index data</div>

          <div className="hidden flex-wrap gap-5 sm:flex">
            {fakeData.map((item, i) => (
              <div
                key={i}
                className="flex w-64 flex-col rounded-2xl border bg-[#ffffff] shadow-md"
              >
                <div className="flex flex-col p-8">
                  <div>{item.label}</div>
                  <div className="pb-6 text-xl font-bold text-[#374151]">
                    {item.name}
                  </div>
                  <div className="text-lg font-semibold text-[#374151]">
                    {item.value}
                  </div>
                  <p
                    className={`text-lg font-normal ${
                      item.changeValue > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.changeValue > 0 ? "▲" : "▼"} {item.changeValue} (
                    {item.changePercent}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-container flex flex-row overflow-hidden sm:hidden">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              className="flex"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {fakeData.map((item, i) => (
                <SwiperSlide key={i} className="max-w-fit">
                  <div className="w-full rounded-lg bg-white p-4 shadow-md">
                    <h3 className="text-sm font-medium text-gray-500">
                      {item.label}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Header title={"Holdings"} />
        <div className="flex flex-col flex-wrap gap-4">
          <Table data={fakeStockData} setData={setFakeStockData} />
        </div>
      </div>
    </>
  );
};

export default Basic;
