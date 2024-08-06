import { Info } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Table = ({ data, setData }) => {
  const location = useLocation();

  const [editableRow, setEditableRow] = useState(null);
  const [editCell, setEditCell] = useState(null);
  const [editValue, setEditValue] = useState("");

  const isBasicPage = location.pathname === "/basic";
  const visibleData = isBasicPage ? data.slice(0, 5) : data;

  // Handle cell click and set the cell to be edited
  const handleCellClick = (item, column) => {
    if (isBasicPage) return;

    setEditCell({ item, column });
    setEditValue(item[column]);
  };

  // Update value as user types
  const handleValueChange = (e) => {
    setEditValue(e.target.value);
  };

  // Save changes to the data
  const handleSave = () => {
    if (editCell) {
      const { item, column } = editCell;
      const updatedData = data.map((dataItem) =>
        dataItem === item ? { ...dataItem, [column]: editValue } : dataItem
      );
      setData(updatedData);
      setEditCell(null);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditCell(null);
  };

  return (
    <div>
      <table className="w-full table-auto text-left">
        <thead className="bg-[#6b7280] text-[#e5e7eb]">
          <tr>
            <th className="border p-4 py-2 text-center">#</th>
            <th className="border p-4 py-2 text-center">Symbol</th>
            <th className="border p-4 py-2 text-center">Company Name</th>
            <th className="border p-4 py-2 text-center">Sector</th>
            <th className="border p-4 py-2 text-center">Market Cap</th>
            <th className="border p-4 py-2 text-center">Share Price</th>
            {isBasicPage ? (
              <th className="hidden border p-4 py-2 text-center"></th>
            ) : (
              <th className="border p-4 py-2 text-center">
                No. of Shares Held
              </th>
            )}
            <th className="border p-4 py-2 text-center">Info</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {visibleData.map((item, index) => (
            <tr
              key={index}
              className={`z-10 hover:bg-gray-300 ${
                !item.editable ? "cursor-none pointer-events-none" : ""
              }`}
              style={{
                background: !item.editable
                  ? "repeating-linear-gradient(45deg, #f8d7da, #f8d7da 10px, #f5c6cb 10px, #f5c6cb 20px)"
                  : "transparent",
              }}
            >
              <td className="border p-4 py-2 text-center">{index + 1}</td>
              <td
                className={`${
                  !isBasicPage ? "cursor-pointer" : "cursor-default"
                }    border p-4 py-2 text-center`}
                onClick={() => handleCellClick(item, "symbol")}
              >
                {item.symbol}
              </td>
              <td
                className={`${
                  !isBasicPage ? "cursor-pointer" : "cursor-default"
                } border p-4 py-2 text-center`}
                onClick={() => handleCellClick(item, "companyName")}
              >
                {item.companyName}
              </td>
              <td
                className={`${
                  !isBasicPage ? "cursor-pointer" : "cursor-default"
                } border p-4 py-2 text-center`}
                onClick={() => handleCellClick(item, "sector")}
              >
                {item.sector}
              </td>
              <td
                className={`${
                  !isBasicPage ? "cursor-pointer" : "cursor-default"
                } border p-4 py-2 text-center`}
                onClick={() => handleCellClick(item, "marketCap")}
              >
                {item.marketCap}
              </td>
              <td
                className={`${
                  !isBasicPage ? "cursor-pointer" : "cursor-default"
                } border p-4 py-2 text-center`}
                onClick={() => handleCellClick(item, "sharePrice")}
              >
                {item.sharePrice.toFixed(2)}
              </td>
              {isBasicPage ? (
                <td className="hidden border p-4 py-2 text-center"></td>
              ) : (
                <td
                  className={`${
                    !isBasicPage ? "cursor-pointer" : "cursor-default"
                  } border p-4 py-2 text-center`}
                  onClick={() => handleCellClick(item, "sharePrice")}
                >
                  {
                    // random quantity share number
                    Math.floor(Math.random() * 100) + 1
                  }
                </td>
              )}
              <td
                className={`mx-auto ${
                  !item.tooltip && "hidden"
                } flex cursor-pointer justify-center border p-4 py-2 text-center`}
              >
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${
                    item.tooltip
                  }\nPopular investors - ${item.investors.join(
                    ", "
                  )}\nFamous Products/brands - ${item.popularProducts.join(
                    ", "
                  )}`}
                >
                  <Info />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Tooltip id="my-tooltip" style={{ whiteSpace: "pre-line" }} />

      {editCell && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Edit {editCell.column}</h2>
            <input
              type="text"
              value={editValue}
              onChange={handleValueChange}
              className="w-full rounded border p-2"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSave}
                className="mr-2 rounded bg-blue-500 px-4 py-2 text-white"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
