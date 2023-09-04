import React, { useState } from "react";
import { BiDockLeft } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";

export default function Nav() {
  return (
    <>
      <div className="bg-gray-900 h-full w-2/12 transition-all duration-300 ">
        <div className="flex w-[11/12] mt-2 mr-2 hover:bg-gray-700 border-gray-400 border border-solid rounded">
          <button className="w-full">
            <div className="flex">
              <div className="flex">
                <VscAdd className="text-white justify-center content-center mx-2.5 my-2.5 w-[24px] h-[24px]"></VscAdd>
              </div>
              <div className="flex-initial text-white justify-center content-center mx-2.5 my-2.5">
                New Chat
              </div>
            </div>
          </button>
        </div>

        <div></div>
      </div>
    </>
  );
}
