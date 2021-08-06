require("boostrap");

// images here?

$(document).ready(function() {
    // carousel or just a list of shoes with images

    const carouselSlides = [
        {
            title: "Nikes that are now on Sale for a great price!",
            btnText: "View Shoes Here",
            btnUrl: "shoes.html"
        }
    ]

    carouselSlides.forEach((slide, i) => {
        $('.carousel-inner').append(`
        <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
          <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
              <div class="container">
                <div class="row align-items-center justify-content-center">
                    <h2 class="display-4 mb-2">${slide.title}</h2>
                </div>
                <div class=" mt-4 row align-items-center justify-content-center"> 
                  <a class="btn btn-primary" href="${slide.btnUrl}">
                      ${slide.btnText}
                  </a>
                </div>
              </div>
          </div>
        </div>`)
    })
});