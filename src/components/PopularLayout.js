import React from "react";
import book4 from "../static/images/book4.jpg";
import book5 from "../static/images/book5.jpg";
import book6 from "../static/images/book6.jpg";
import book1 from "../static/images/book1.jpg";

// const hLine = {
//   width: "80%",
//   height: "0",
//   border: "1px solid #C4C4C4",
//   margin: "3px",
//   display: "inline-block",
//   top: "0",
//   left: "0",
// };

function PopularLayout() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div
          style={{
            width: "50%",
            margin: "auto",
            border: "0",
            height: "0",
            boxShadow: "0 0 10px 1px black",
          }}
        ></div>
        <div class="container px-5 py-24 mx-auto">
        <div class="h-1 bg-gray-200 rounded overflow-hidden mb-20">
            <div class="w-24 h-full bg-yellow-500"></div>
          </div>
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Popular Among Users
              </h1>
              <div class="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={book4}
                  alt="content"
                />
                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                  GENRE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Book Title
                </h2>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={book5}
                  alt="content"
                />
                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                  GENRE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={book6}
                  alt="content"
                />
                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                  GENRE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Book Title
                </h2>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={book1}
                  alt="content"
                />
                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                  GENRE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Book Title
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularLayout;
