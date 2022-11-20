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

    <div className="col-md-5 pt-05 ps-md-05 bg-light" > 
      <div className="row ">
        <article className="col-11">
          <div className="card card-full  ">
            <div className="height-ratio  " style={{padding:'2px'}}>
              <a 
                  className="p-1 bg-primary badge  text-white"
                  href="#"
                >
                  <span className='d-none d-md-inline-block' style={{color:'white',padding:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>&nbsp;&nbsp;Press Releases</span>
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
        </article>

       
      </div>
    </div>
  </div>
  )
}

Slider.propTypes = {}

export default Slider
