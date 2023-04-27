import React, { useState } from "react";

export default function Tour({ data, handleRemove }) {
  const { name, info, id, image, price } = data;
  const [isReadMore, setIsReadMore] = useState(false);

  const handleRead = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div
      key={id}
      className="text-sky-700 flex relative flex-col pb-3 font-mono justif-start items-start bg-white shadow-1 h-min rounded-lg overflow-hidden "
    >
      <img src={image} className="object-cover h-80 w-full" />
      <div className="absolute  top-0 right-0 bg-sky-700 text-white p-2 font-semibold rounded-bl-md">
        ${price}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{name}</h1>

        <p className="">
          {isReadMore ? (
            <>
              {info}{" "}
              <span onClick={handleRead} className="font-bold cursor-pointer">
                Read less
              </span>
            </>
          ) : (
            <>
              {info.slice(0, 250) + " "}
              <span onClick={handleRead} className="font-bold cursor-pointer">
                ...Read More
              </span>
            </>
          )}
        </p>
      </div>
      <button
        onClick={handleRemove}
        className="m-4 self-center rounded font-mono border-2 hover:text-white hover:bg-sky-700 transition-all duration-300 p-1 w-[80%] border-sky-700"
      >
        Iam Not intrested
      </button>
    </div>
  );
}
