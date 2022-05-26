import React from "react";
import book4 from "../static/images/book4.jpg";
import book5 from "../static/images/book5.jpg";
import book6 from "../static/images/book6.jpg";

function GenreLayout() {
  return (
    <>
      <section class="text-gray-600 body-font">
        {/*       
      <div
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px",
            border: "0",
            height: "0",
            boxShadow: "0 0 10px 1px black",
          }}
        ></div> */}
        <div class="container px-5 py-24 mx-auto">
          <div class="h-1 bg-gray-200 rounded overflow-hidden mb-20">
            <div class="w-24 h-full bg-yellow-500"></div>
          </div>
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Read Genre Wise
              </h1>
              <div class="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={book4}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Book Title
              </h2>
              <p class="leading-relaxed text-base">BookDetail</p>
              <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                Similar Genre Books
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={book6}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Book Title
              </h2>
              <p class="leading-relaxed text-base">BookDetail</p>
              <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                Similar Genre Books
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GenreLayout;
