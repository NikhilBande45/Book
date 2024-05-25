
import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-56">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              {/* Hello, welcomes here to learn something{" "} */}
              <div>Books for Every Passion: </div>
              <span className="text-pink-500">Explore, Dream, Discover</span>
            </h1>
            <p className="text-sm md:text-xl">
            From timeless literature to modern masterpieces, our bookstore offers a haven for readers of all interests. Discover your next favorite book, delve into new genres, and let your imagination soar. Welcome to a world of endless reading possibilities.
            </p>
            
          </div>
          
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

