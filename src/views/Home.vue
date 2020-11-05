<template>
  <div>
    <section id="banner">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="bg bg-1"> 
              <div class="container">
                <div class="tagline">
                  <p class="ff-p fs-50 fw-5 text-white">Capturing new opportunities for profitable growth</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg bg-2">
              <div class="container">
                <div class="tagline">
                  <p class="ff-p fs-50 fw-5 text-white">Committed to no incident/accident in every Operation </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg bg-3">
              <div class="container">
                <div class="tagline">
                  <p class="ff-p fs-50 fw-5 text-white">Guarantee skilled Engineers and workers capable of providing customized solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="container pt-5">
        <ul
          class="nav nav-tabs justify-content-between"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#civil"
              role="tab"
            >
              <p class="text-center m-0">
                <img src="@/assets/img/engineering.svg" height="45px" alt="" />
              </p>
              <p class="txt m-0">Civil Engineering</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#mech" role="tab">
              <p class="text-center m-0">
                <img src="@/assets/img/motor.svg" height="45px" alt="" />
              </p>
              <p class="txt m-0">Mechanical Engineering</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#procure" role="tab">
              <p class="text-center m-0">
                <img src="@/assets/img/gear.svg" height="45px" alt="" />
              </p>

              <p class="txt m-0">Procurement</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#elect" role="tab">
              <p class="text-center m-0">
                <img src="@/assets/img/architect.svg" height="45px" alt="" />
              </p>
              <p class="txt m-0">Building & Construction</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="services">
        <div class="inner">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="civil" role="tabpanel">
              <div class="container py-5">
                <div class="row">
                  <div class="col-lg-7 py-5">
                    <p class="fs-24 fw-6 tx-u ff-q text-white">
                      Civil engineering service
                    </p>
                    <p class="fs-16 text-white ff-q">
                      Ellaleon Ventures offers services such as planning,
                      designing, and overseeing construction and maintenance of
                      building structures, and facilities, such as roads,
                      railroads, airports, bridges, harbors, channels, dams,
                      irrigation projects, pipelines, power plants, water and
                      sewage systems, and waste disposal units
                    </p>
                    <router-link to="/civilengineering">
                      <button class="btn btn-out-white">Read More</button>
                    </router-link>
                  </div>
                  <div class="col-lg-5"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="mech" role="tabpanel">
              <div class="container py-5">
                <div class="row">
                  <div class="col-lg-7 py-5">
                    <p class="fs-24 fw-6 tx-u ff-q text-white">
                      Mechanical engineering service
                    </p>
                    <p class="fs-16 text-white ff-q">
                      Ellaleon Ventures offers services specifications for,
                      design, development, manufacture and installation of new
                      or modified mechanical components or systems in the area
                      of Fabrication, welding, industrial erection and
                      mechanical maintenance works
                    </p>
                    <router-link to="/mechanicalengineering">
                      <button class="btn btn-out-white">Read More</button>
                    </router-link>
                  </div>
                  <div class="col-lg-5"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="elect" role="tabpanel">
              <div class="container py-5">
                <div class="row">
                  <div class="col-lg-7 py-5">
                    <p class="fs-24 fw-6 tx-u ff-q text-white">
                      Real Estate and Building Construction Service
                    </p>
                    <p class="fs-16 text-white ff-q">
                      Ellaleon Ventures offers services such as erection of
                      structures, cladding, external finish, formwork, fixture,
                      fitting of service installation and the unloading of
                      plant, machinery, materials or the likes.
                    </p>
                    <router-link to="/construction">
                      <button class="btn btn-out-white">Read More</button>
                    </router-link>
                  </div>
                  <div class="col-lg-5"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="procure" role="tabpanel">
              <div class="container py-5">
                <div class="row">
                  <div class="col-lg-7 py-5">
                    <p class="fs-24 fw-6 tx-u ff-q text-white">
                      Procurememt Service
                    </p>
                    <p class="fs-16 text-white ff-q">
                      Ellaleon Ventures offers services such as Local and
                      foreign procurement of materials and equipment for the
                      petroleum industry such as Cable, Pipes , Valves, Plumbing
                      fittings, Piping/accessories, Elbows, Flanges, Pumps etc.
                    </p>
                    <router-link to="/procurement">
                      <button class="btn btn-out-white">Read More</button>
                    </router-link>
                  </div>
                  <div class="col-lg-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6"></div>
          <div class="col-lg-3 col-sm-6"></div>
          <div class="col-lg-3 col-sm-6"></div>
          <div class="col-lg-3 col-sm-6"></div>
        </div>
      </div>
    </section>

    <section id="client">
      <div class="container pb-5 pt-3">
        <p class="fs-30 fw-6 tx-u mb-4">Our Clients</p>
        <carousel :autoplay="true" :nav="false" :items="5" :dots="false" :responsive="{0:{items:2,nav:false}, 600:{items:3,nav:false}, 1200:{items: 5, dots: true}}">
          <img src="@/assets/img/chevron.png" />

          <img src="@/assets/img/mobil.jpg" />

          <img src="@/assets/img/npdc.jpg" />

          <img src="@/assets/img/pw.png" />

          <img src="@/assets/img/addax.png" />

          <img src="@/assets/img/benr.jpg" />

          <img src="@/assets/img/abacus.jpg" />

          <img src="@/assets/img/sinopec.svg" />

          <img src="@/assets/img/twinpassion.png" />
        </carousel>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    carousel,
  },
};
</script>
