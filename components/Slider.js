import React from 'react'
import PropTypes from 'prop-types'

function Slider(props) {
  return (
    <div className="row featured-1 mb-5">
    <div className="col-md-7 pb-05 pt-05 pe-md-05">
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
                  />
                </a>
                <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                  <a href="#">
                    <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                      Superstar calls for football clean up amid
                      series of shocking allegations
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
                      The world's first floating farm making waves
                      in Rotterdam
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
      </div>
    </div>

    <div className="col-md-5 pt-05 ps-md-05" > 
          <div className='block-title-6'>
          <h4 className='h5-border-primary'>
            <span className='bg-primary text-white'>Press Release</span>

          </h4>
          </div>
     
       
          <div className="card card-full  height-ratio ">
            <div style={{padding:'2px'}} className="bg-light">
              <a 
                  className="p-1 bg-primary badge  text-white"
                  href="#"
                >

                </a>
                <div style={{marginTop:'10px'}}>
                <p style={{paddingLeft:'10px'}}>7 November 2022 — UNODC participates in 27th UN climate change conference, addressing waste trafficking and environmental crime-biodiversity-climate nexus</p>
                <p style={{paddingLeft:'10px'}}>1 November 2022 — Afghanistan opium cultivation in 2022 up by 32 per cent: UNODC survey</p>
                <p style={{paddingLeft:'10px'}}>28 October 2022 — Call by UNESCO, UNODC and partners to fight against illicit trafficking of Afghan cultural property</p>
                <p style={{paddingLeft:'10px'}}>28 October 2022 — Call by UNESCO, UNODC and partners to fight against illicit trafficking of Afghan cultural property</p>
                <p style={{paddingLeft:'10px'}}>28 October 2022 — Call by UNESCO, UNODC and partners to fight against illicit trafficking of Afghan cultural property</p>
                <p style={{paddingLeft:'10px'}}>1 November 2022 — Afghanistan opium cultivation in 2022 up by 32 per cent: UNODC survey</p>
                <p style={{paddingLeft:'10px'}}>1 November 2022 — Afghanistan opium cultivation in 2022 up by 32 per cent: UNODC survey</p>
                <p style={{paddingLeft:'10px'}}>1 November 2022 — Afghanistan opium cultivation in 2022 up by 32 per cent: UNODC survey</p>
                </div>
              
            </div>
       
      </div>
    </div>
  </div>
  )
}

Slider.propTypes = {}

export default Slider
