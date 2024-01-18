import React from "react";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="py-5 w-full">
        <div className="py-5 w-full flex justify-center">
          <div className="border-l-[1px] border-white w-[1px] h-[150px]"></div>
        </div>
        <div className="flex justify-center text-sm text-gray-500">
          <p className=" text-gray-500">
            For more information services, contact{" "}
            <a href="mailto:sales@spacex.com" className="text-white">
              sales@spacex.com
            </a>
          </p>
        </div>
        <div className="flex justify-center gap-10 text-xs pt-20 pb-5">
          <p className="text-gray-500">SPACEX @ 2024</p>
          <a
            href="https://www.spacex.com/media/privacy_policy_spacex.pdf" target='_blank' rel="noreferrer"
            className="hover:text-gray-500 cursor-pointer transition-all ease-in-out duration-300"
          >
            PRIVACY POLICY
          </a>

          {/* <a className='hover:text-gray-500 transition-all ease-in-out duration-300' href='https://www.spacex.com/media/privacy_policy_spacex.pdf' target='_blank' rel="noreferrer">SUPPLIERS</a> */}
        </div>
      </div>
    </section>
  );
}
