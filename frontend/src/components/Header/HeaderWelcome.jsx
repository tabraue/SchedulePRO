import React from "react";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

function HeaderWelcome() {
  const startBtn = "Get started";

  return (
    <nav className="bg-blue-calypso w-full z-10 top-0 left-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white-sand">
          SchedulePRO
        </span>
        <div className="flex md:order-2">
          <ButtonCustom
            navigate={"/signup"}
            text={startBtn}
            type='yellow'
          />
        </div>
      </div>
    </nav>
  );
}

export default HeaderWelcome;
