import Header from "../components/common/Header";

import { fakeData } from "../api/fakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Basic = () => {
  return (
    <>
      <div className="relative z-10 flex-1 overflow-auto p-4">
        <Header title={"Basic"} />
        <div className="flex flex-col flex-wrap gap-4">
          <div>Random Fake stock index data</div>

          <div className="hidden sm:flex flex-wrap gap-5">
            {fakeData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl w-64 bg-[#ffffff] border shadow-md"
              >
                <div className="flex flex-col p-8">
                  <div>{item.label}</div>
                  <div className="text-xl font-bold   text-[#374151] pb-6">
                    {item.name}
                  </div>
                  <div className=" text-lg font-semibold   text-[#374151]">
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
          <div className="sm:hidden overflow-hidden swiper-container flex flex-row">
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
                  <div className="bg-white shadow-md w-full rounded-lg p-4">
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
      </div>
    </>
  );
};

export default Basic;
