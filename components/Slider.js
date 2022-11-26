import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

function Slider(props) {
  return (
    <div className="row">
      <div className="col-md-8 p-2" >
        {/* <div
        className="col-md-7 pb-05 pt-05 pe-md-05"
        
      >
        <div className="position-relative overflow-hidden">
          <div
            className="nav-slider-hover nav-dots-top-right light-dots"
            data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
          >
            <article className="col-12">
              <div className="card card-full text-light  zoom">
                <div className="height-ratio ">
                  <a href="#">
                    <img
                      src="../uploads/slider_1.jpg"
                      data-src="../uploads/slider_1.jpg"
                      alt="Image description"
                      height="250px"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                    <a href="#">
                      <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                        Superstar calls for football clean up amid series of
                        shocking allegations
                      </h2>
                    </a>

                    <div className="news-meta">
                      <span className="news-author">
                        by{" "}
                        <a className="text-white fw-bold" href="#">
                          John Doe
                        </a>
                      </span>
                      <time className="news-date" datetime="2019-10-22">
                        Oct 22, 2019
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="col-12">
              <div className="card card-full text-light overflow zoom">
                <div className="height-ratio image-wrapper">
                  <a href="#">
                    <img
                      src="../uploads/slider_2.jpg"
                      data-src="../uploads/slider_2.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                    <a href="#">
                      <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                        Walmart shares up 10% on online sales lift
                      </h2>
                    </a>

                    <div className="news-meta">
                      <span className="news-author">
                        by{" "}
                        <a className="text-white fw-bold" href="#">
                          John Doe
                        </a>
                      </span>
                      <time className="news-date" datetime="2019-10-22">
                        Oct 22, 2019
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="col-12">
              <div className="card card-full text-light overflow zoom">
                <div className="height-ratio image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="../uploads/slider_1.jpg"
                      data-src="../uploads/slider_1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                    <a href="#">
                      <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                        Bank chief warns on Brexit staff moves
                      </h2>
                    </a>

                    <div className="news-meta">
                      <span className="news-author">
                        by{" "}
                        <a className="text-white fw-bold" href="#">
                          John Doe
                        </a>
                      </span>
                      <time className="news-date" datetime="2019-10-22">
                        Oct 22, 2019
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="col-12">
              <div className="card card-full text-light overflow zoom">
                <div className="height-ratio image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="../uploads/slider_1.jpg"
                      data-src="../uploads/slider_1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                    <a href="#">
                      <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                        The world's first floating farm making waves in
                        Rotterdam
                      </h2>
                    </a>

                    <div className="news-meta">
                      <span className="news-author">
                        by{" "}
                        <a className="text-white fw-bold" href="#">
                          John Doe
                        </a>
                      </span>
                      <time className="news-date" datetime="2019-10-22">
                        Oct 22, 2019
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div> */}
        <Carousel style={{height :"400px"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.wixstatic.com/media/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOGFjZmY4MTNiYTdhNGJlYmE0M2IxMzgzYWU4YjVhYjl-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sKV6WLzLotopxSEIB52JVS1mCW_gxzOrPW3xchODKa4"
              alt="First slide"
              height="400px"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.wixstatic.com/media/5668b5_2995db9abd2a44818a11d14300fda904~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_2995db9abd2a44818a11d14300fda904~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjk5NWRiOWFiZDJhNDQ4MThhMTFkMTQzMDBmZGE5MDR-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.S51z-LLdU_U1CbCuyCXpcFyE_qdd1NyJCrJgjQouFIc"
              alt="Second slide"
              height="400px"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.wixstatic.com/media/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjBjMTc3ODVlY2ZiNGQzMTk0M2YxZjBiM2JmNzI1Mjd-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sYREzcOQmJKZokDk_37AseItoOrZ5PFFWwdHwvYkTq4"
              alt="Third slide"
              height="400px"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        {/* </div> */}
      </div>
      <div className="col-md-4 pt-05 ps-md-05">
        <div className="block-title-6">
          <h4 className="h5-border-primary">
            <span className="bg-primary text-white">Press Release</span>
          </h4>
        </div>

        <div className="card card-full  height-ratio ">
          <div style={{ padding: "2px" }} className="bg-light">
            <a className="p-1 bg-primary badge  text-white" href="#"></a>
            <div style={{ marginTop: "10px" }}>
              <p style={{ paddingLeft: "10px" }}>
                7 November 2022 — UNODC participates in 27th UN climate change
                conference, addressing waste trafficking and environmental
                crime-biodiversity-climate nexus
              </p>
              <p style={{ paddingLeft: "10px" }}>
                1 November 2022 — Afghanistan opium cultivation in 2022 up by 32
                per cent: UNODC survey
              </p>
              <p style={{ paddingLeft: "10px" }}>
                28 October 2022 — Call by UNESCO, UNODC and partners to fight
                against illicit trafficking of Afghan cultural property
              </p>
             
              <p style={{ paddingLeft: "10px" }}>
                7 November 2022 — UNODC participates in 27th UN climate change
                conference, addressing waste trafficking and environmental
                crime-biodiversity-climate nexus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {};

export default Slider;
