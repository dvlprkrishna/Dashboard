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
          <div>Click on any cell data to edit values</div>
          <div>
            <Table data={fakeData} setData={setFakeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
