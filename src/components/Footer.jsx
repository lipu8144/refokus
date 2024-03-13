import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-3">
        <div className="basis-2/3">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3 ">
            <h4 className=" mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className=" basis-1/2 flex flex-col justify-between">
            <p>refokus is a pioneering digital agency driven by design and empowered by technology</p>
            <div className=" bg-blue-500 p-2 text-center">
            <p>Enterprise Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
