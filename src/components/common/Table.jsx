/* eslint-disable react/prop-types */
const Table = ({ data }) => {
  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-auto w-full text-left">
        <thead className=" bg-slate-500 text-[#e5e7eb]">
          <tr>
            <th className="py-2 border text-center font-bold p-4">Id</th>
            <th className="py-2 border text-center font-bold p-4">Symbol</th>
            <th className="py-2 border text-center font-bold p-4">
              Company Name
            </th>
            <th className="py-2 border text-center font-bold p-4">Sector</th>
            <th className="py-2 border text-center font-bold p-4">
              Market Cap
            </th>
            <th className="py-2 border text-center font-bold p-4">
              Share Price
            </th>
            <th className="py-2 border text-center font-bold p-4">
              Investment
            </th>
            <th className="py-2 border text-center font-bold p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {data.map((item, index) => (
            <tr key={index} className="py-0">
              <td className="py-2 border text-center p-4">{index + 1}</td>
              <td className="py-2 border text-center p-4">{item.symbol}</td>
              <td className="py-2 border text-center p-4">
                {item.companyName}
              </td>
              <td className="py-2 border text-center p-4">{item.sector}</td>
              <td className="py-2 border text-center p-4">{item.marketCap}</td>
              <td className="py-2 border text-center p-4">
                ${item.sharePrice.toFixed(2)}
              </td>

              <td className="py-2 border text-center p-4">0</td>
              <td className="py-2 border text-center p-4">
                <button className="font-bold rounded-lg text-base  w-24 h-8 bg-[#15171a] text-[#ffffff] justify-center">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
