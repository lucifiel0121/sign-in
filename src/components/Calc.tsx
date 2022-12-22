import { useEffect, useState } from "react";
import useLocalStorage, { SIGNIN_STORAGE_KEY } from "../hooks/useLocalStorage";
import type { State } from "../hooks/useTime";

const Calc = () => {
  const { getValue } = useLocalStorage({ key: SIGNIN_STORAGE_KEY });

  const [value, setValue] = useState([]);
  useEffect(() => {
    setValue(getValue());
    console.log(getValue());
  }, []);

  return (
    <>
      統計
      <div className="flex w-full p-2">
        <table className="block min-w-full border-collapse md:table">
          <thead className="block md:table-header-group">
            <tr className="border-grey-500 absolute -top-full -left-full block border md:relative md:top-auto md:left-auto md:table-row  md:border-none ">
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                打卡狀態
              </th>
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                時間
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {value?.map((item: State, idx: number) => (
              <tr
                key={idx}
                className={`border-grey-500 block border md:table-row md:border-none
                ${idx % 2 === 0 ? "bg-white" : "bg-gray-300"}
                 `}
              >
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="inline-block w-1/3 font-bold md:hidden">
                    打卡狀態
                  </span>
                  {`上午 ${item.sign.morning ? "O" : "X"} ｜ 下午${
                    item.sign.afternoon ? "O" : "X"
                  } ｜ 晚上${item.sign.evening ? "O" : "X"}  `}
                </td>
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="inline-block w-1/3 font-bold md:hidden">
                    時間
                  </span>
                  {item.time
                    ? new Intl.DateTimeFormat("zh", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: false,
                      }).format(item.time)
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Calc;
