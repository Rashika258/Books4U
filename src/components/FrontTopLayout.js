import React from "react";
import book1 from "../static/images/book1.jpg";
import book2 from "../static/images/book2.jpg"
import book3 from "../static/images/book3.jpg"
import book4 from "../static/images/book4.jpg"
import book5 from "../static/images/book5.jpg"
import book6 from "../static/images/book6.jpg"

function FrontTopLayout() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
     
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-ful object-cover h-full object-center block"
                src={book6}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={book2}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={book1}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={book4}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={book5}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={book3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrontTopLayout;
