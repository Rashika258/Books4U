import React from "react";
import book4 from "../static/images/book4.jpg";
import book5 from "../static/images/book5.jpg";
import book6 from "../static/images/book6.jpg";

function ExploreGenreLayout() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-yellow-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12"></div>
          </div>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Popular Genres
        
          </h1>

          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={book4}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Book title
              </h2>
              <p class="text-base leading-relaxed mt-2">Book Description</p>
              <a class="text-yellow-500 inline-flex items-center mt-3">
                Ratings
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={book5}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Book title
              </h2>
              <p class="text-base leading-relaxed mt-2">Book Description</p>
              <a class="text-yellow-500 inline-flex items-center mt-3">
                Ratings
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={book6}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Book title
              </h2>
              <p class="text-base leading-relaxed mt-2">Book Description</p>
              <a class="text-yellow-500 inline-flex items-center mt-3">
                Ratings
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreGenreLayout;
