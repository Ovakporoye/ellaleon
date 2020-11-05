<template>
  <div>
    <div id="contact">
      <div class="top">
        <div class="inner">
          <div class="container py-5">
            <div class="fs-50 fw-6 text-white">Contact Us</div>
    
            <div class="row mt-5">
              <div
                class="col-lg-4 col-sm-6 mb-3"
                data-aos="zoom-in-right"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                <div class="d-flex">
                  <div>
                    <div class="blackbox a">
                      <img src="@/assets/img/baddress.svg" />
                    </div>
                  </div>
                  <div class="pl-3">
                    <p class="ff-p fs-18 fw-5 mb-2 text-white">Address</p>
                    <p class="ff-a fs-16 text-white">
                      Road 3, Suite H116, Ikota Complex, Victoria Garden City,
                      Lekki, Lagos State.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-sm-6 mb-3"
                data-aos="zoom-in-up"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                <div class="d-flex">
                  <div>
                    <div class="blackbox b">
                      <img src="@/assets/img/bcall.svg" />
                    </div>
                  </div>
                  <div class="pl-3">
                    <p class="ff-p fs-18 fw-5 mb-2 text-white">Phone</p>
                    <p class="ff-a fs-16 mb-1 text-white">+234 (802) 301 8700</p>
                    <p class="ff-a fs-16 text-white">+234 (807) 167 8887</p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-sm-6 mb-3"
                data-aos="zoom-in-left"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                <div class="d-flex">
                  <div>
                    <div class="blackbox c">
                      <img src="@/assets/img/bmsg.svg" />
                    </div>
                  </div>
                  <div class="pl-3">
                    <p class="ff-p fs-18 fw-5 mb-2 text-white ">Email</p>
                    <p class="ff-a fs-16 text-white">hello@ellaleon.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="getintouch" style="overflow: hidden">
        <div class="row">
          <div class="col-lg-4 px-lg-0 pt-lg-5">
            <div class="below h-100">
              <div class="send mt-lg-5 p-5">
                <p class="fs-24 ff-p fw-6">Send us a message</p>
                <p class="ff-a fs-16">
                  Do you want to make an enquiry or you just want to know more
                  about us?
                </p>
                <p class="fs-18 fw-5 ff-a">
                  Quickly fill out the form
                  <span class="pl-2">
                    <img src="@/assets/img/arrow-right-circle.svg" alt />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 px-lg-0">
            <!-- contact form  -->
            <div class="blue-box p-5">
              <div class="pl-lg-4 pr-lg-3">
                <form
                  @submit.prevent="checkEmail"
                  method="post"
                  class="row pt-lg-3 pl-lg-5"
                >
                  <!-- <div class="col-12 mb-4"></div> -->
    
                  <div class="col-lg-10 m-auto">
                    <label for class="ff-a fs-16">Tell us your name</label>
                  </div>
                  <div class="col-lg-10 m-auto pb-4">
                    <input
                      type="text"
                      v-model="firstname"
                      class="lightform form-control"
                    />
                  </div>
                  <!-- <div class="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last name"
                      v-model="lastname"
                      class="lightform form-control"
                    />
                  </div>-->
                  <div class="col-lg-10 m-auto">
                    <label for class="ff-a fs-16">Your email address</label>
                  </div>
                  <div class="col-lg-10 m-auto pb-4">
                    <input
                      type="email"
                      v-model="email"
                      class="lightform form-control"
                    />
                  </div>
                  <div class="col-lg-10 m-auto pb-4">
                    <label for class="ff-a fs-16">Your phone number</label>
                    <input
                      type="text"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      maxlength="15"
                      v-model="phone"
                      class="lightform form-control"
                    />
                  </div>
                  <div class="col-lg-10 m-auto pb-4">
                    <label for class="ff-a fs-16"
                      >Please type your message below</label
                    >
                    <textarea
                      name
                      v-model="message"
                      id
                      rows="7"
                      class="lightform form-control"
                    ></textarea>
                  </div>
                  <div class="col-lg-10 m-auto pt-4">
                    <p class="text-right">
                      <button class="btn btn-out-white px-5" type="submit">
                        Send
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <!-- end of contact form  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>