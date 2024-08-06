import Header from "../components/common/Header";
import Table from "../components/common/Table";
import { fakeStocks } from "../api/fakeStocks";
import { useState } from "react";

const Premium = () => {
  const [fakeData, setFakeData] = useState(fakeStocks);
  return (
    <>
      <div className="relative z-10 flex-1 overflow-auto p-4">
        <Header title={"Premium"} />
        <div className="flex flex-row flex-wrap gap-4">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            minus omnis dignissimos, hic architecto labore rerum delectus
            eligendi iusto! Sunt eos porro tempore fugit ducimus consectetur
            dicta distinctio ab quae!
          </div>
          <div>
            <Table data={fakeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
