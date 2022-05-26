import React from "react";

function BookLayout() {
  return (
    <section class="text-gray-600 body-font">
     <div
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px",
            border: "0",
            height: "0",
            boxShadow: "0 0 10px 1px black",
          }}
        ></div>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
  
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Let's travel through books</h2>
    <div class="md:w-3/5 md:pl-6">
      <p class="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
      <div class="flex md:mt-4 mt-6">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded">Explore</button>
        {/* <a class="text-yellow-500 inline-flex items-center ml-4">Learn More */}
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
    </div>
  </div>
</section>
  );
}

export default BookLayout;
