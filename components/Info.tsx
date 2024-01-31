import { BiWorld } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

function Info() {
  const infos = [
    { icon: <BiWorld />, label: "FREE SHIPPING WORLDWIDE" },
    { icon: <FaArrowRotateLeft />, label: "MONEY BACK GUARENTEED" },
    { icon: <IoIosLock />, label: "SECURE ONLINE PAYMENTS" },
    { icon: <GiTrophy />, label: "BEST PREMIUM QUALITY" },
  ];

  return (
    <section className="mt-4 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 items-center main-container">
        {infos.map((info, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-3xl">{info.icon}</span>
            <span className="text-sm">{info.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
