import React from "react";
import book4 from "../static/images/book4.jpg";
import book5 from "../static/images/book5.jpg";
import book6 from "../static/images/book6.jpg";
import book1 from "../static/images/book1.jpg";


function ExploreAuthorLayout() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Popular Authors
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={book1}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  GENRE
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  BOOK TITLE
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={book4}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  GENRE
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  BOOK TITLE
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={book5}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  GENRE
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  BOOK TITLE
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={book6}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  GENRE
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  BOOK TITLE
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreAuthorLayout;
