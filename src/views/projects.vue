<template>
  <div id="projects">
    <div class="top">
      <div class="inner">
        <div class="container py-5">
          <div class="fs-50 fw-6 text-white">Our Projects</div>
        </div>
      </div>
    </div>

    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4 mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="3000" v-for="project in filteredSupplies" :key="project">
            <div class="card">
              <div class="product-image">
                <div
                  class="inner py-lg-5 px-lg-4 p-3" 
                  :style="`background-image: url(${project.image})`"
                >
                  <p class="text-white fs-22 ff-a text-capitalize">
                    {{ project.job }}
                  </p>
                  <div class="white-line my-5"></div>
                </div>

               
                <div class="info">
                  <div class="py-lg-5 px-lg-4 p-3">
                    <p class="text-white fs-22 ff-a text-capitalize">
                      {{ project.job }}
                    </p>
                    <div class="white-line my-5"></div>
                    <div class="d-flex text-white fs-18 ff-a">
                      <span class="text-uppercase">CLIENT:</span>
                      <span class="ml-2">{{ project.client }}</span>
                    </div>

                    <p class="text-white fs-18 ff-a">
                      <span class="text-uppercase fw-6">DATE:</span>
                      <span class="ml-3">{{ project.date }}</span>
                    </p>
                    <p class="text-white fs-18 ff-a">
                      {{ project.status }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mb-4">
            <div class="d-flex justify-content-end">
              <div class="btn-group ml-auto mt-5">
                <button
                  type="button"
                  v-if="page != 1"
                  @click="page--"
                  class="btn btn-sm btn-p fs-12 ff-a"
                >
                  PREV
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-p fs-12 ff-a"
                  v-for="pageNumber in pages.slice(page - 1, page + 5)"
                  v-bind:key="pageNumber"
                  @click="page = pageNumber"
                >
                  {{ pageNumber }}
                </button>
                <button
                  type="button"
                  @click="page++"
                  v-if="page < pages.length"
                  class="btn btn-sm btn-p fs-12 ff-a"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCategory: "all",
      index: Number,
      page: 1,
      perPage: 6,
      pages: [],
      projects: [
        {
          job:
            "Construction of 1Km Iye – Ovo Street, Oyede, Isoko South LGA, Delta State",
          date: "October 2017",
          image: require("@/assets/img/pex.jpg"),
          client: "Niger Delta Development Commission (NDDC)",
          status: "Ongoing",
        },
        {
          job:
            "Construction of 500m perimeter Fence/Boundary wall for model Residential estate at Ewang MBO L.G.A Akwa Ibom State",
          date: "March 2017",
          image: require("@/assets/img/pex.jpg"),
          client: "Abacus Building Services",
          status: "Pending",
        },
        {
          job:
            "Repaired works of the failed and unmotorable sections of 2.5km Ozoro-Idheze-Orie-Irri Road in Isoko North/South LGA of Delta State.",
          date: "April 2017",
          image: require("@/assets/img/pex.jpg"),
          client: "Niger Delta Development Commission (NDDC)",
          status: "Completed",
        },
        {
          job: "Construction of collapsible partition wall/Entrance door",
          date: "April 2016",
          image: require("@/assets/img/pex.jpg"),
          client: "SINOPEC PET",
          status: "Completed",
        },
        {
          job: "FM Fence Park Chevron Nig Ltd",
          date: "August 2015",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Precast Fence installation",
          date: "March 2015",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Foundation Bored Pilling -Oniru Family Project",
          date: "August 2014",
          image: require("@/assets/img/pex.jpg"),
          client: "Twin Passion",
          status: "Completed",
        },
        {
          job: "Rip-Rap shore protection works in Akwa Ibom State",
          date: "January 2014",
          image: require("@/assets/img/pex.jpg"),
          client: "Afren Energy",
          status: "Completed",
        },
        {
          job: "440 units of Concrete safety barriers",
          date: "April 2013",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria ltd",
          status: "Completed",
        },
        {
          job: "Pre cast Fence(cast and installation)",
          date: "April 2013",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria ltd",
          status: "Completed",
        },
        {
          job: "Fabrication of Palisade fence and Hot Dip Galvanising",
          date: "June 2013/2015",
          image: require("@/assets/img/pex.jpg"),
          client: "Pw Nig Ltd",
          status: "Ongoing",
        },
        {
          job:
            "Construction support services(Manpower supply) for chevron/shappeti screeding of warehouse",
          date: "Jan 2013",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria ltd",
          status: "Completed",
        },
        {
          job: "Construction of 3 Laboratory Furnitures at Oron",
          date: "January 2013",
          image: require("@/assets/img/pex.jpg"),
          client: "Addax Petroleum",
          status: "Ongoing",
        },
        {
          job: "Fabrication of Palisade fence Hot deep Galvanizing at VGC Site",
          date: "January 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Howardroark Gardens Ltd",
          status: "Completed",
        },
        {
          job: "Fabrication of Gates Hot deep Galvinized at VGC Site",
          date: "January 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Howardroark Gardens Ltd",
          status: "Completed",
        },
        {
          job: "Construction of Landing jetty at Emeroke in Akwa Ibom state",
          date: "January 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Afren Energy",
          status: "Completed",
        },
        {
          job: "Construction of Landing jetty at Amadaka in Akwa Ibom state",
          date: "January 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Afren Energy",
          status: "Completed",
        },
        {
          job:
            "Construction of Landing jetty at Ikonta/Obianga in Akwa Ibom state",
          date: "January 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Afren Energy",
          status: "Completed",
        },

        {
          job: "Project Procurement Contract",
          date: "April 2012",
          image: require("@/assets/img/pex.jpg"),
          client: "Mobil Producing",
          status: "Ongoing",
        },
        {
          job: "Provision of Community support services,OML 126 Block",
          date: "January 2011",
          image: require("@/assets/img/pex.jpg"),
          client: "Addax Petroleum",
          status: "Completed",
        },
        {
          job:
            "4 years renovation contract for maintenance of Lekki Housing Estate",
          date: "2008 to April 2013",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "2 years blanket Purchase contract for Plumbing materials",
          date: "September 2010 to September 2014",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Ongoing",
        },
        {
          job:
            "Several procurement contracts since date of registration-pumps, valves, pipes, gauges, etc",
          date: "April 2009",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Ongoing",
        },

        {
          job: "Drilling of two number boreholes at chevron IPP site",
          date: "August 2010",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Installation of 3360m of concertina wire",
          date: "June 2010",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job:
            "Supply of drivers/office Assistants for operations at SPDC in Port Harcourt.",
          date: "January 2010",
          image: require("@/assets/img/pex.jpg"),
          client: "Beneprojecti Ltd (Oil and Gas)",
          status: "Completed",
        },
        {
          job: "Procurement of mosquito nets for host communities",
          date: "September 2009",
          image: require("@/assets/img/pex.jpg"),
          client: "Addax petroleum development Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Procurement services",
          date: " ",
          image: require("@/assets/img/pex.jpg"),
          client: "Addax petroleum",
          status: "Completed",
        },

        {
          job:
            "Provision of health care for host communities and Town hall meetings",
          date: "December 2009",
          image: require("@/assets/img/pex.jpg"),
          client: "Addax petroleum development Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Several procurement contracts to date",
          date: " ",
          image: require("@/assets/img/pex.jpg"),
          client: "Mobil Producing Nigeria Ltd",
          status: "Ongoing",
        },
        {
          job: "Fabrication/Hot deep galvanizing of palisade fence at jetty",
          date: "April 2010",
          image: require("@/assets/img/pex.jpg"),
          client: "PW Nigeria Ltd",
          status: "Completed",
        },
        {
          job:
            "Cathodic protection of sheet piles using zinc anodes/ Fabrication and installation of handrails and fenders for PW at Chevron jetty, Agura.",
          date: "February 2008",
          image: require("@/assets/img/pex.jpg"),
          client: "PW Nigeria Ltd",
          status: "Completed",
        },
        {
          job:
            "Supply of 10 Trucks of diesel for their House boat/vessel operations in Port Harcourt",
          date: "February 2010",
          image: require("@/assets/img/pex.jpg"),
          client: "Beneprojecti Nigeria Ltd",
          status: "Completed",
        },

        {
          job: "Provision of Construction Support Services at IPP site, Agura.",
          date: "2007 to 2008",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd",
          status: "Ongoing",
        },
        {
          job: "Shed construction for PW at Chevron IPP site, Agura.",
          date: "July 2007",
          image: require("@/assets/img/pex.jpg"),
          client: "PW Nigeria Ltd/Chevron Nigeria Ltd",
          status: "Completed",
        },
        {
          job: "Maintenance works for Logistics",
          date: "2004 to Date",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd.",
          status: "Ongoing",
        },

        {
          job: "Fabrication of Trolley",
          date: "2004",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd.",
          status: "Completed",
        },
        {
          job:
            "Construction of imiringi Transmission Line OAY project Bayelsa state",
          date: "2004",
          image: require("@/assets/img/pex.jpg"),
          client: "Pivot Engineering/Mavlin Projects",
          status: "Completed",
        },

        {
          job: "Civil works Aba gas turbine Project Abia State",
          date: "November 2005",
          image: require("@/assets/img/pex.jpg"),
          client: "Group Five/Mavlin Projects",
          status: "Completed",
        },
        {
          job: "Cable Trench construction Gbanontoru substation Bayelsa State",
          date: "July 2006",
          image: require("@/assets/img/pex.jpg"),
          client: "Pivot Engineering/Mavlin Projects",
          status: "Completed",
        },

        {
          job: "Fabrication: Iron/Aluminum Hoarding of waste Bin/ER site",
          date: "2005",
          image: require("@/assets/img/pex.jpg"),
          client: "Chevron Nigeria Ltd.",
          status: "Completed",
        },
      ],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.projects.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(projects) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return projects.slice(from, to);
    },
  },
  computed: {
    filteredSupplies() {
      return this.paginate(this.projects);
      // var category = this.selectedCategory;

      // if (category === "all") {
      //   return this.paginate(this.projects);
      // } else {
      //   return this.projects.filter(function (item) {
      //     return item.status === category;
      //   });
      // }
    },
  },
  watch: {
    projects() {
      this.setPages();
    },
  },
  mounted() {
    this.setPages();
  },
};
</script>