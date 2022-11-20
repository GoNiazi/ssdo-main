import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "./../components/Layout";
import Slider from "./../components/Slider";
export default function Home() {
  return (
    <Layout>
      <div className="wrapper">
        {/* header */}
        <header class="header">
          <div class="top-menu bg-white">
            <div class="container">
              <nav class="navbar navbar-expand d-lg-none navbar-light px-0">
                <div
                  id="navbar-mobile"
                  class="collapse navbar-collapse nav-top-mobile"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="../pages/about-us.html">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="../pages/contact-us.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>

                  <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="youtube"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                          <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                          <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://vimeo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="vimeo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div class="mobile-sticky fs-6 bg-black">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-dark px-0 py-0">
                <a
                  id="showStartPush"
                  aria-label="sidebar menu"
                  class="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0"
                  href="javascript:;"
                >
                  <span class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </a>

                <a href="index.html">
                  <img
                    class="mobile-logo img-fluid d-lg-none mx-auto"
                    src="../../assets/img/logo/logo-mobile.png"
                    alt="Logo site"
                  />
                </a>

                <button
                  class="navbar-toggler px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo2"
                  aria-controls="navbarTogglerDemo2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeMiterLimit: "10",
                        strokeWidth: "32px",
                      }}
                    />
                    <line
                      x1="338.29"
                      y1="338.29"
                      x2="448"
                      y2="448"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeMiterLimit: "10",
                        strokeWidth: "32px",
                        strokeLinecap: "round",
                      }}
                    />
                  </svg>
                </button>

                <div id="navbarTogglerDemo" class="collapse navbar-collapse">
                  <div class="date-area d-none d-lg-block">
                    <time class="navbar-text me-2" datetime="2019-10-28">
                      Monday, Oct 28, 2019
                    </time>
                  </div>

                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="../pages/about-us.html">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="../pages/contact-us.html">
                        Contact Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" target="_blank">
                        Buy Now
                      </a>
                    </li>
                  </ul>

                  <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="youtube"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          class="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                          <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                          <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                        </svg>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://vimeo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="vimeo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div
                class="collapse navbar-collapse col-12 py-2"
                id="navbarTogglerDemo2"
              >
                <form class="form-inline" action="../category/search.html">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control border border-end-0"
                      placeholder="Search..."
                      aria-label="search"
                    />
                    <button class="btn btn-primary" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                          style={{
                            fill: "none",
                            stroke: "currentColor",
                            strokeMiterLimit: "10",
                            strokeWidth: "32px",
                          }}
                        />
                        <line
                          x1="338.29"
                          y1="338.29"
                          x2="448"
                          y2="448"
                          style={{
                            fill: "none",
                            stroke: "currentColor",
                            strokeMiterLimit: "10",
                            strokeWidth: "32px",
                            strokeLinecap: "round",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="second-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div
                    id="main-logo"
                    class="main-logo my-2 my-lg-4 d-none d-lg-block"
                  >
                    <a class="navbar-brand" href="index.html">
                      <img
                        class="img-fluid"
                        src="../uploads/SSDO_Logo.png"
                        alt="Logo site"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-8">
                  <div class="my-2 my-md-3 my-lg-4 d-none d-md-block text-center">
                    <a href="#" target="_blank">
                      <img
                        class="img-fluid bg-light"
                        src="../../assets/img/ads/728-demo.png"
                        alt="Advertiser space"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* main menu */}

        <div
          id="showbacktop"
          class="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0"
        >
          <div class="container">
            <nav
              id="main-menu"
              class="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
            >
              <div
                id="navbarTogglerDemo1"
                class="collapse navbar-collapse hover-mode"
              >
                <div class="logo-showbacktop">
                  <a href="index.html">
                    <img
                      class="img-fluid"
                      src="../../assets/img/logo/default-logo.png"
                      alt="Logo site"
                    />
                  </a>
                </div>

                <ul
                  id="start-main"
                  class="navbar-nav main-nav navbar-uppercase first-start-lg-0"
                >
                  <li class="nav-item dropdown">
                    <a
                      id="navbarhome"
                      class="nav-link active dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Home
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="navbarhome">
                      <li>
                        <a class="dropdown-item active" href="index.html">
                          Homepage - Default
                        </a>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="hom1"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Homepage - New
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="hom1"
                        >
                          <li>
                            <a class="dropdown-item" href="business.html">
                              Business
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="flatter.html">
                              Flatter
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="food.html">
                              Food
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="football.html">
                              Football
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="home-design.html">
                              Home design
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="lifestyle.html">
                              Lifestyle
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="personal-blog.html">
                              Personal
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="pet-blog.html">
                              Pet blog
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="travel-blog.html">
                              Travel blog
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-boxed.html">
                          Homepage - Boxed
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-big-grid.html">
                          Homepage - Big Grid
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-colorfull.html">
                          Homepage - Colorfull
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-blogging.html">
                          Homepage - Blogging
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-two.html">
                          Homepage - Layout Two
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-three.html">
                          Homepage - Layout Three
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-four.html">
                          Homepage - Layout Four
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-five.html">
                          Homepage - Layout Five
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="index-video.html">
                          Homepage - Video
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="../rtl/index.html">
                          Homepage - RTL Arabic
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="../category/category.html">
                      Business
                    </a>
                  </li>

                  <li class="nav-item mega-dropdown dropdown">
                    <a
                      id="navbarmega2"
                      class="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Mega
                    </a>
                    <div
                      id="vertical-tabs"
                      class="dropdown-menu mega w-100 px-3 py-0"
                      aria-labelledby="navbarmega2"
                    >
                      <div class="row mega-hovers">
                        <div class="col-sm-3 col-md-2 vertical-tabs hover-tabs px-0 border-end-sm">
                          <ul
                            class="nav nav-tabs text-center py-4 border-start-0 border-end-0 w-100"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                id="nav-one"
                                class="nav-link fw-normal active"
                                href="#mega-one"
                                role="tab"
                                data-bs-toggle="tab"
                                aria-controls="mega-one"
                                aria-selected="true"
                              >
                                Business
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                id="nav-two"
                                class="nav-link fw-normal"
                                href="#mega-two"
                                role="tab"
                                data-bs-toggle="tab"
                                aria-controls="mega-two"
                                aria-selected="false"
                              >
                                Travel
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                id="nav-three"
                                class="nav-link fw-normal"
                                href="#mega-three"
                                role="tab"
                                data-bs-toggle="tab"
                                aria-controls="mega-three"
                                aria-selected="false"
                              >
                                Sports
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                id="nav-four"
                                class="nav-link fw-normal"
                                href="#mega-four"
                                role="tab"
                                data-bs-toggle="tab"
                                aria-controls="mega-three"
                                aria-selected="false"
                              >
                                Fashion
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-9 col-md-10 p-4">
                          <div id="mega-tabs" class="tab-content">
                            <div
                              id="mega-one"
                              class="tab-pane active show"
                              role="tabpanel"
                              aria-labelledby="nav-one"
                            >
                              <div class="row">
                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img1.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Apple's stock rout starts and ends
                                          with the iPhone
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img2.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Want the best Black Friday deals? Head
                                          to a store
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img3.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Dubai launches pilot for Middle East
                                          'Shark Tank'
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img4.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          European markets fight back to close
                                          higher; oil in focus
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>

                            <div
                              id="mega-two"
                              class="tab-pane"
                              role="tabpanel"
                              aria-labelledby="nav-two"
                            >
                              <div class="row">
                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img5.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Meet New Orleans’s All-Female Biker
                                          Club
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img6.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Nascar’s Future Depends on These
                                          5-Year-Olds
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img7.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          A Village in India Where Clean Living
                                          Became a Attraction
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img8.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          The N.Y.C. Parks Commissioner on the
                                          Experience of Place
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>

                            <div
                              id="mega-three"
                              class="tab-pane"
                              role="tabpanel"
                              aria-labelledby="nav-three"
                            >
                              <div class="row">
                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img9.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          World and Olympic champion Vonn
                                          retires saying 'body is broken'
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img10.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Barcelona to play Real in Copa del Rey
                                          semi-final
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img11.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          GB's Bankes wins snowboard cross
                                          silver at World Champs
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img12.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Laugher & Goodfellow secure gold in
                                          first competition as a pair
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>

                            <div
                              id="mega-four"
                              class="tab-pane"
                              role="tabpanel"
                              aria-labelledby="nav-four"
                            >
                              <div class="row">
                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img13.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          If Only Her Voice Could Change the Way
                                          the Mets Play
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img14.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Finding Empowerment in Two Wheels and
                                          a Helmet
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img15.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Fans celebrate in Paris after side
                                          reaches World Cup final
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>

                                <article class="col-6 col-lg-3">
                                  <div class="card card-full hover-a mb-4">
                                    <div class="ratio_203-114 image-wrapper">
                                      <a href="../post/single1.html">
                                        <img
                                          class="img-fluid lazy"
                                          src="../../assets/img/assets/lazy-empty.png"
                                          data-src="../../assets/img/203x114/img16.jpg"
                                          alt="Image description"
                                        />
                                      </a>
                                    </div>

                                    <div class="card-body">
                                      <h3 class="card-title h6">
                                        <a href="../post/single1.html">
                                          Why Is MoviePass Losing So Much Money?
                                        </a>
                                      </h3>
                                      <div class="card-text text-muted small">
                                        <time datetime="2019-10-22">
                                          Oct 22, 2019
                                        </time>
                                        <span
                                          title="12 comment"
                                          class="float-end"
                                        >
                                          <span class="icon-comments"></span> 12
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item mega-dropdown dropdown">
                    <a
                      id="navbarmega3"
                      class="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Video
                    </a>
                    <div
                      class="dropdown-menu mega w-100 p-4"
                      aria-labelledby="navbarmega3"
                    >
                      <div class="row">
                        <article class="col-6 col-lg-3">
                          <div class="card card-full hover-a mb-4">
                            <div class="ratio_251-141 image-wrapper">
                              <a href="../post/single6.html">
                                <img
                                  class="img-fluid lazy"
                                  src="../../assets/img/assets/lazy-empty.png"
                                  data-src="../../assets/img/251x141/img1.jpg"
                                  alt="Image description"
                                />
                                <div class="post-type-icon">
                                  <span class="fa-stack-sea text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-play-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                                href="../category/category.html"
                              >
                                Fashion
                              </a>
                            </div>

                            <div class="card-body">
                              <h3 class="card-title h6">
                                <a href="../post/single6.html">
                                  Why Sitting May Be Bad for Your Brain Health
                                </a>
                              </h3>
                              <div class="card-text text-muted small">
                                <time datetime="2019-10-22">Oct 22, 2019</time>
                                <span title="12 comment" class="float-end">
                                  <span class="icon-comments"></span> 12
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>

                        <article class="col-6 col-lg-3">
                          <div class="card card-full hover-a mb-4">
                            <div class="ratio_360-202 image-wrapper">
                              <a href="../post/single6.html">
                                <img
                                  class="img-fluid lazy"
                                  src="../../assets/img/assets/lazy-empty.png"
                                  data-src="../../assets/img/251x141/img2.jpg"
                                  alt="Image description"
                                />
                                <div class="post-type-icon">
                                  <span class="fa-stack-sea text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-play-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                                href="../category/category.html"
                              >
                                Life style
                              </a>
                            </div>

                            <div class="card-body">
                              <h3 class="card-title h6">
                                <a href="../post/single6.html">
                                  Underappreciated Key to College Success: Sleep
                                </a>
                              </h3>
                              <div class="card-text text-muted small">
                                <time datetime="2019-10-21">Oct 21, 2019</time>
                                <span title="17 comment" class="float-end">
                                  <span class="icon-comments"></span> 17
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>

                        <article class="col-6 col-lg-3">
                          <div class="card card-full hover-a mb-4">
                            <div class="ratio_360-202 image-wrapper">
                              <a href="../post/single6.html">
                                <img
                                  class="img-fluid lazy"
                                  src="../../assets/img/assets/lazy-empty.png"
                                  data-src="../../assets/img/251x141/img3.jpg"
                                  alt="Image description"
                                />
                                <div class="post-type-icon">
                                  <span class="fa-stack-sea text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-play-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                                href="../category/category.html"
                              >
                                Fashion
                              </a>
                            </div>

                            <div class="card-body">
                              <h3 class="card-title h6">
                                <a href="../post/single6.html">
                                  5 Simple Tips to Help Vegetarian or Vegan
                                  Travelers Eat Well, Anywhere
                                </a>
                              </h3>
                              <div class="card-text text-muted small">
                                <time datetime="2019-10-20">Oct 20, 2019</time>
                                <span title="8 comment" class="float-end">
                                  <span class="icon-comments"></span> 8
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>

                        <article class="col-6 col-lg-3">
                          <div class="card card-full hover-a mb-4">
                            <div class="ratio_360-202 image-wrapper">
                              <a href="../post/single6.html">
                                <img
                                  class="img-fluid lazy"
                                  src="../../assets/img/assets/lazy-empty.png"
                                  data-src="../../assets/img/251x141/img4.jpg"
                                  alt="Image description"
                                />
                                <div class="post-type-icon">
                                  <span class="fa-stack-sea text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-play-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                  </span>
                                </div>
                              </a>
                              <a
                                class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                                href="../category/category.html"
                              >
                                Jewellery
                              </a>
                            </div>

                            <div class="card-body">
                              <h3 class="card-title h6">
                                <a href="../post/single6.html">
                                  Many Voters Tend to Believe Christine Blasey
                                  Ford
                                </a>
                              </h3>
                              <div class="card-text text-muted small">
                                <time datetime="2019-10-19">Oct 19, 2019</time>
                                <span title="13 comment" class="float-end">
                                  <span class="icon-comments"></span> 13
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Features
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li class="dropdown-submenu">
                        <a
                          id="sub1"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Post templates
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub1"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single1.html"
                            >
                              Post style 1
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single2.html"
                            >
                              Post style 2
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single3.html"
                            >
                              Post style 3
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single4.html"
                            >
                              Post style 4
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single5.html"
                            >
                              Post style 5
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single6.html"
                            >
                              Post style 6
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single7.html"
                            >
                              Post style 7
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub2"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Category
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub2"
                        >
                          <li class="dropdown-submenu">
                            <a
                              id="sub350"
                              class="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Category module
                            </a>

                            <ul
                              class="submenu dropdown-menu"
                              aria-labelledby="sub350"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category.html"
                                >
                                  Category Style 1
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category2.html"
                                >
                                  Category Style 2
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category3.html"
                                >
                                  Category Style 3
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category4.html"
                                >
                                  Category Style 4
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category5.html"
                                >
                                  Category Style 5
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category6.html"
                                >
                                  Category Style 6
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../category/category7.html"
                                >
                                  Category Style 7
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../category/search.html"
                            >
                              Search result
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../category/search-none.html"
                            >
                              Search none
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../category/tags.html"
                            >
                              Tags
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../category/author.html"
                            >
                              Author
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../category/archive.html"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub3"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Content Block
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub3"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-title.html"
                            >
                              15 Block title
                            </a>
                          </li>
                          <li class="dropdown-submenu">
                            <a
                              id="sub35"
                              class="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Big Grid
                            </a>

                            <ul
                              class="submenu dropdown-menu"
                              aria-labelledby="sub35"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/block/big-grid-cover.html"
                                >
                                  10 Big Grid
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/block/big-grid-slider.html"
                                >
                                  6 Big Grid Slider
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/news-ticker.html"
                            >
                              News Ticker
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/tabs-news.html"
                            >
                              Tabs News
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub4"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Features
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub4"
                        >
                          <li class="dropdown-submenu">
                            <a
                              id="sub41"
                              class="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Review Post
                            </a>

                            <ul
                              class="submenu dropdown-menu"
                              aria-labelledby="sub41"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/review/point-review.html#review"
                                >
                                  Point Review
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/review/percent-review.html#review"
                                >
                                  Percent Review
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/review/star-review.html#review"
                                >
                                  Star Review
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown-submenu">
                            <a
                              id="sub42"
                              class="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Widget
                            </a>

                            <ul
                              class="submenu dropdown-menu"
                              aria-labelledby="sub42"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/social.html"
                                >
                                  Social icon
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/address.html"
                                >
                                  Address info
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/profile.html"
                                >
                                  Author profile
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/subcribe.html"
                                >
                                  Subcribe form
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/instagram.html"
                                >
                                  Instagram
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/weather.html"
                                >
                                  Weather
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/timeline.html"
                                >
                                  Timeline post
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="../../snippets/widget/more.html"
                                >
                                  More widget
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/features/video-background.html"
                            >
                              Video Background
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/features/youtube-playlist.html"
                            >
                              Youtube Playlist
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/features/sticky.html"
                            >
                              Sticky
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub5"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Pages
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub5"
                        >
                          <li>
                            <a class="dropdown-item" href="../pages/404.html">
                              404
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../pages/about-us.html"
                            >
                              About us
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../pages/advertisement.html"
                            >
                              Advertisement
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../pages/contact-us.html"
                            >
                              Contact us
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../pages/term-of-use.html"
                            >
                              Term of use
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../pages/privacy-policy.html"
                            >
                              Privacy policy
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub6"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          User
                        </a>

                        <ul
                          class="submenu dropdown-menu shadow-lrb-lg"
                          aria-labelledby="sub6"
                        >
                          <li>
                            <a class="dropdown-item" href="../user/login.html">
                              Login
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/register.html"
                            >
                              Register
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/forgot-password.html"
                            >
                              Forgot password
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/dashboard.html"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/messages2.html"
                            >
                              Messages
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/profile.html"
                            >
                              Profile
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="../user/post.html">
                              Post list
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/favorite.html"
                            >
                              Favorite
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../user/setting.html"
                            >
                              Edit profile
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub7"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Header style
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub7"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-1.html"
                            >
                              Header 1
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-2.html"
                            >
                              Header 2
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-3.html"
                            >
                              Header 3
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-4.html"
                            >
                              Header 4
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-5.html"
                            >
                              Header 5
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-6.html"
                            >
                              Header 6
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-7.html"
                            >
                              Header 7
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/header/header-8.html"
                            >
                              Header 8
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub8"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Footer style
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub8"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-1.html#footer"
                            >
                              Footer 1
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-2.html#footer"
                            >
                              Footer 2
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-3.html#footer"
                            >
                              Footer 3
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-4.html#footer"
                            >
                              Footer 4
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-5.html#footer"
                            >
                              Footer 5
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/footer/footer-6.html#footer"
                            >
                              Footer 6
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub85"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Sidebar
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub85"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/no-sidebar.html"
                            >
                              No Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../post/single1.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub9"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Shortcodes
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub9"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/post/blockquote.html"
                            >
                              Blockquote
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/post/dropcaps.html"
                            >
                              Dropcaps
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/post/typology.html"
                            >
                              Typology
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/post/list.html"
                            >
                              List
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown-submenu">
                        <a
                          id="sub10"
                          class="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Submenu
                        </a>
                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="sub10"
                        >
                          <li class="dropdown-submenu">
                            <a
                              id="sub10a"
                              class="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Child Submenu
                            </a>
                            <ul
                              class="submenu dropdown-menu"
                              aria-labelledby="sub10a"
                            >
                              <li>
                                <a class="dropdown-item" href="#">
                                  Child Submenu
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Child Submenu
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Child Submenu
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              Child Submenu
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Child Submenu
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mega-dropdown dropdown">
                    <a
                      id="navbarmega4"
                      class="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      News Block
                    </a>

                    <div
                      class="dropdown-menu mega w-100 px-3 py-0 fw-normal"
                      aria-labelledby="navbarmega4"
                    >
                      <ul class="row list-unstyled border-end-last-lg-0">
                        <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                          <h5 class="title-nav">
                            <strong>News Block A</strong>
                          </h5>

                          <ul class="list-unstyled mega-link">
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-1.html"
                              >
                                Block - Layout 1
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-2.html"
                              >
                                Block - Layout 2
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-3.html"
                              >
                                Block - Layout 3
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-4.html"
                              >
                                Block - Layout 4
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-5.html"
                              >
                                Block - Layout 5
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                          <h5 class="title-nav">
                            <strong>News Block B</strong>
                          </h5>

                          <ul class="list-unstyled mega-link">
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-6.html"
                              >
                                Block - Layout 6
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-7.html"
                              >
                                Block - Layout 7
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-8.html"
                              >
                                Block - Layout 8
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-9.html"
                              >
                                Block - Layout 9
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-10.html"
                              >
                                Block - Layout 10
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                          <h5 class="title-nav">
                            <strong>News Block C</strong>
                          </h5>

                          <ul class="list-unstyled mega-link">
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-11.html"
                              >
                                Block - Layout 11
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-12.html"
                              >
                                Block - Layout 12
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-13.html"
                              >
                                Block - Layout 13
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-14.html"
                              >
                                Block - Layout 14
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-15.html"
                              >
                                Block - Layout 15
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                          <h5 class="title-nav">
                            <strong>News Block D</strong>
                          </h5>

                          <ul class="list-unstyled mega-link">
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-16.html"
                              >
                                Block - Layout 16
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-17.html"
                              >
                                Block - Layout 17
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-18.html"
                              >
                                Block - Layout 18
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-19.html"
                              >
                                Block - Layout 19
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/block-20.html"
                              >
                                Block - Layout 20
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown1"
                      class="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      More
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <li>
                        <a class="dropdown-item" href="../../docs/index.html">
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="../../docs/components/alerts.html"
                        >
                          Components
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="../../docs/index-wordpress.html"
                        >
                          Wordpress Version
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div class="navbar-nav ms-auto d-none d-lg-block">
                  <div class="search-box">
                    <div class="search-menu no-shadow border-0 py-0">
                      <form
                        class="form-src form-inline"
                        action="../category/search.html"
                      >
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control end-0"
                            name="keywords"
                            placeholder="Search..."
                            aria-label="search"
                          />
                          <span class="icones">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="ms-n4"
                              width="1rem"
                              height="1rem"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                                style={{
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeMiterLimit: "10",
                                  strokeWidth: "32px",
                                }}
                              />
                              <line
                                x1="338.29"
                                y1="338.29"
                                x2="448"
                                y2="448"
                                style={{
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeMiterLimit: "10",
                                  strokeWidth: "32px",
                                  strokeLinecap: "round",
                                }}
                              />
                            </svg>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* side bar mobile menu */}
        <div class="mobile-side">
          <div id="back-menu" class="back-menu back-menu-start">
            <span class="hamburger-icon open">
              <svg
                class="bi bi-x"
                width="2rem"
                height="2rem"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>

          <nav
            id="mobile-menu"
            class="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white"
          >
            <div class="mobile-content mb-auto">
              <div class="logo-sidenav p-2">
                <a href="index.html">
                  <img
                    src="../../assets/img/logo/default-logo.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </a>
              </div>

              <div class="sidenav-menu">
                <nav class="navbar navbar-light navbar-inverse">
                  <ul
                    id="side-menu"
                    class="nav navbar-nav list-group list-unstyled side-link"
                  >
                    <li class="menu-item nav-item">
                      <a href="#" class="nav-link active">
                        Home
                      </a>
                    </li>

                    <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                      <a
                        href="#"
                        class="dropdown-toggle nav-link"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="menu-11"
                      >
                        Automotive
                      </a>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="menu-11"
                        role="menu"
                      >
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            Cars
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="menu-item nav-item">
                      <a href="../category/category.html" class="nav-link">
                        Business
                      </a>
                    </li>

                    <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                      <a
                        href="#"
                        class="dropdown-toggle nav-link"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="menu-12"
                      >
                        Lifestyle
                      </a>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="menu-12"
                        role="menu"
                      >
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            Fashion
                          </a>
                        </li>
                        <li class="menu-item menu-item-has-children mega-dropdown nav-item">
                          <a
                            href="#"
                            class="dropdown-item dropdown-toggle"
                            id="menu-13"
                          >
                            Travel
                          </a>

                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="menu-13"
                            role="menu"
                          >
                            <li class="menu-item nav-item">
                              <a
                                href="../category/category.html"
                                class="dropdown-item"
                              >
                                Adventure
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children mega-dropdown nav-item">
                          <a
                            href="#"
                            class="dropdown-item dropdown-toggle"
                            id="menu-14"
                          >
                            Science
                          </a>
                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="menu-14"
                            role="menu"
                          >
                            <li class="menu-item nav-item">
                              <a
                                href="../category/category.html"
                                class="dropdown-item"
                              >
                                Health
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                      <a
                        href="#"
                        class="dropdown-toggle nav-link"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="menu-15"
                      >
                        Sports
                      </a>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="menu-15"
                        role="menu"
                      >
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            Soccer
                          </a>
                        </li>
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            Moto GP
                          </a>
                        </li>
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            Basket
                          </a>
                        </li>
                        <li class="menu-item nav-item">
                          <a
                            href="../category/category.html"
                            class="dropdown-item"
                          >
                            NFL
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="menu-item nav-item">
                      <a href="../category/category.html" class="nav-link">
                        International
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="mobile-copyright mt-5 px-4 text-center">
              <p>
                Copyright <a href="index.html">Bootnews</a> - All right reserved
              </p>
            </div>
          </nav>
        </div>
        {/* main content */}
        <main id="content">
          <div class="container">
            <div class="row">
              <div class="col-12 mt-05">
                <div class="row py-2">
                  <div class="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                    <div class="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                      </svg>
                      <span class="d-none d-md-inline-block">
                        Breaking news
                      </span>
                    </div>
                  </div>

                  <div class="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                    <div class="breaking-box position-relative py-2">
                      <div
                        class="box-carousel"
                        data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
                      >
                        <div class="col-12 aribudin">
                          <a class="h6 fw-normal" href="#">
                            Google Employees Protest Secret Work on Censored
                            Search Engine for China
                          </a>
                        </div>

                        <div class="col-12 aribudin">
                          <a class="h6 fw-normal" href="#">
                            Investors Betting Against Tesla Made $1 Billion on
                            Friday
                          </a>
                        </div>

                        <div class="col-12 aribudin">
                          <a class="h6 fw-normal" href="#">
                            Carmelo Anthony Officially Signs with the Houston
                            Rockets
                          </a>
                        </div>

                        <div class="col-12 aribudin">
                          <a class="h6 fw-normal" href="#">
                            Lemon make your skin fresh and glowing
                          </a>
                        </div>

                        <div class="col-12 aribudin">
                          <a class="h6 fw-normal" href="#">
                            5 Takeaways From Elon Musk’s Interview With The
                            Times About Tesla
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Slider />
              </div>
              {/* reports*/}
              <div class="col-12 mb-4 ">
                <div class="block-area p-4 border bg-light-black">
                  <div class="block-title-13">
                    <h4 class="h5 title-box-dot">
                      <span>Latest Reports</span>
                    </h4>
                    <div class="dot-line"></div>
                  </div>
                  <div
                    class="nav-slider-hover nav-dots-top-right light-dots"
                    data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
                  >
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_88d48ceaff7948a19e2e43957a93fd9b~mv2.jpg/v1/crop/x_0,y_64,w_369,h_393/fill/w_319,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tracking_Numbers_2020vs2021.jpg"
                                data-src="../../assets/img/400x340/img1.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#"></a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_8f78d2571f4948e291c0941a9c7ad450~mv2.jpg/v1/crop/x_0,y_96,w_547,h_583/fill/w_319,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tracking_Numbers_Violence_Against_Women_Children.jpg"
                                data-src="../uploads/slider_1.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#"></a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_e56ebd7ea4a945c69d016eb55d936153~mv2.jpg/v1/crop/x_0,y_432,w_2480,h_2643/fill/w_319,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/State-of-Violence-Sindh_Jan-June2021-1.jpg"
                                data-src="../../assets/img/400x340/img3.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#"></a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_cb4fcdcd87464de9afcd17c19fa78c38~mv2.jpg/v1/crop/x_0,y_863,w_2480,h_2645/fill/w_319,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PDOI-Fina2-1.jpg"
                                data-src="../../assets/img/400x340/img4.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#"></a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_bf673ad84531498a8fed9354f9df0dd4~mv2.jpg/v1/crop/x_0,y_0,w_2480,h_2645/fill/w_319,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Stat-of-Viol_21_hd-2-1.jpg"
                                data-src="../../assets/img/400x340/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#"></a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              {/* content start */}
              {/* left column */}
              <div class="col-md-8">
                <div class="block-area">
                  <div class="block-title-6">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white">Events</span>
                    </h4>
                  </div>
                  <div class="border-bottom-last-0 first-pt-0">
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid"
                                src="https://static.wixstatic.com/media/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOGFjZmY4MTNiYTdhNGJlYmE0M2IxMzgzYWU4YjVhYjl-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sKV6WLzLotopxSEIB52JVS1mCW_gxzOrPW3xchODKa4"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Apple's stock rout starts and ends with the
                                iPhone
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_99a168225fb24e178334d09cba608386~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_99a168225fb24e178334d09cba608386~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOTlhMTY4MjI1ZmIyNGUxNzgzMzRkMDljYmE2MDgzODZ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.O1JL8tuNp_PCrxvwx7PywP0LSAbD8Y-pxmYyxzexNnU"
                                data-src="../../assets/img/360x202/img18.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Want the best Black Friday deals? Head to a
                                department store
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_97d34f596b2c4048b2f169a664644120~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_97d34f596b2c4048b2f169a664644120~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOTdkMzRmNTk2YjJjNDA0OGIyZjE2OWE2NjQ2NDQxMjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.fXDGj7iGgUAbgnOOA0bSXerjS6oNUyDJmJlO8F_OL0M"
                                data-src="../../assets/img/360x202/img14.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNGY1MGI1NGVjY2Y1NGFkNmFjZGEzMjBlNzQ0YmY4NTV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.bFy9LgVyWr0QdNqDY21qVKgbfzf61blQnyJecHfVzb0"
                                data-src="../../assets/img/360x202/img15.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Dubai launches pilot for Middle East 'Shark
                                Tank'
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_18d863a44ce8411b898d88614675367c~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_18d863a44ce8411b898d88614675367c~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMThkODYzYTQ0Y2U4NDExYjg5OGQ4ODYxNDY3NTM2N2N-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.UvGzIAkT9Yg44OQrCBvIeChBD9_R046yWNBu-qj-jFY"
                                data-src="../../assets/img/360x202/img16.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                The pioneering and popular compact Range Rover
                                Evoque gets a major makeover
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfODRiZGYzMmJhZTc1NGY4OGIyMjliZTI2NjdkNmY4MTJ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.WLcAOlx2nCvs1dX88VBCUWeXKcgUNrDk5ZCdVrLlrhk"
                                data-src="../../assets/img/360x202/img19.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                European markets fight back to close higher; oil
                                in focus
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_df125aefa8814f6aae4de3026dd1c64e~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_df125aefa8814f6aae4de3026dd1c64e~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfZGYxMjVhZWZhODgxNGY2YWFlNGRlMzAyNmRkMWM2NGV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.-Nc6x4k-vEzY6d1LkJPjQwWdVWaOWREAqyQ-YnVFFyk"
                                data-src="../../assets/img/360x202/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                MotoGP: Which team needs what in 2019?
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* <div class="clearfix my-4">
                  <nav class="float-start" aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item active">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          4
                        </a>
                      </li>
                      <li class="page-item">
                        <span class="page-link disabled">....</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          12
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="../category/category.html"
                          aria-label="Next"
                          title="Next page"
                        >
                          <span aria-hidden="true">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.2rem"
                              height="1.2rem"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <polyline
                                points="184 112 328 256 184 400"
                                style={{
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeMiterLimit: "10",
                                  strokeWidth: "48px",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }}
                              />
                            </svg>
                          </span>
                          <span class="visually-hidden">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <span class="py-2 float-end">Page 1 of 12</span>
                </div> */}
              </div>
              {/* right column */}
              <aside class="col-md-4 end-sidebar-lg">
                <div class="sticky">
                  <aside class="widget">
                    <div class="block-title-4">
                      <h4 class="h5 title-arrow">
                        <span>Social network</span>
                      </h4>
                    </div>
                    <ul class="list-unstyled social-two">
                      <li class="facebook">
                        <a
                          class="bg-facebook text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="facebook"
                        >
                          Facebook
                        </a>
                      </li>
                      <li class="twitter">
                        <a
                          class="bg-twitter text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="twitter"
                        >
                          Twitter
                        </a>
                      </li>
                      <li class="instagram">
                        <a
                          class="bg-instagram text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="instagram"
                        >
                          Instagram
                        </a>
                      </li>
                      <li class="youtube">
                        <a
                          class="bg-youtube text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="youtube"
                        >
                          Youtube
                        </a>
                      </li>
                      <li class="linkedin">
                        <a
                          class="bg-linkedin text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="linkedin"
                        >
                          Linkedin
                        </a>
                      </li>
                      <li class="vimeo">
                        <a
                          class="bg-vimeo text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Vimeo"
                        >
                          Vimeo
                        </a>
                      </li>
                      <li class="pinterest">
                        <a
                          class="bg-pinterest text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Pinterest"
                        >
                          Pinterest
                        </a>
                      </li>
                      <li class="telegram">
                        <a
                          class="bg-telegram text-white"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Telegram"
                        >
                          Telegram
                        </a>
                      </li>
                    </ul>
                    <div class="gap-15"></div>
                  </aside>

                  <aside class="widget">
                    <div class="block-title-4">
                      <h4 class="h5 title-arrow">
                        <span>Popular Post</span>
                      </h4>
                    </div>
                    {/* <ul class="post-number list-unstyled border-bottom-last-0 rounded mb-3">
                      <li class="hover-a">
                        <a class="h5 h6-md h5-lg" href="#">
                          Why the world would end without political polls
                        </a>
                      </li>
                      <li class="hover-a">
                        <a class="h5 h6-md h5-lg" href="#">
                          Meet The Man Who Designed The Ducati Monster
                        </a>
                      </li>
                      <li class="hover-a">
                        <a class="h5 h6-md h5-lg" href="#">
                          2020 Audi R8 Spyder spy shots release
                        </a>
                      </li>
                      <li class="hover-a">
                        <a class="h5 h6-md h5-lg" href="#">
                          Lamborghini makes Huracán GT3 racer faster for 2019
                        </a>
                      </li>
                      <li class="hover-a">
                        <a class="h5 h6-md h5-lg" href="#">
                          ZF plans $14 billion autonomous vehicle push, concept
                          van
                        </a>
                      </li>
                    </ul> */}

                    <iframe
                      width="355"
                      height="200"
                      src="https://www.youtube.com/embed/yT9dUBVkHeQ"
                    ></iframe>
                    <br />
                    <iframe
                      width="355"
                      height="200"
                      src="https://www.youtube.com/embed/GCuU6kadgaU"
                    ></iframe>
                    <br />
                    <iframe
                      width="355"
                      height="200"
                      src="https://www.youtube.com/embed/8zLeIltoVaA"
                    ></iframe>
                    <div class="gap-0"></div>
                  </aside>

                  {/* timeline */}
                  <aside
                    id="bootnews_custompost-10"
                    class="widget widget_categories widget_categories_custom"
                  >
                    <div class="block-title-4">
                      <h4 class="h5 title-arrow">
                        <span>Latest News</span>
                      </h4>
                    </div>

                    <div id="timeline-post">
                      <ul class="timeline-post">
                        <li>
                          <a href="https://demo.bootstrap.news/default/2019/06/kilmarnock-miss-chance-to-close-on-celtic-as-they-lose-at-home/">
                            <span class="timeline-date small">
                              <time
                                class="news-date"
                                datetime="2019-06-14T06:58:44+00:00"
                              >
                                June 14, 2019
                              </time>
                            </span>
                            <h4 class="h6 timeline-title">
                              Kilmarnock miss chance to close on Celtic as they
                              lose at home
                            </h4>
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.bootstrap.news/default/2019/06/qatar-beat-japan-to-win-first-asian-cup-highlights-report/">
                            <span class="timeline-date small">
                              <time
                                class="news-date"
                                datetime="2019-06-14T06:14:22+00:00"
                              >
                                June 14, 2019
                              </time>
                            </span>
                            <h4 class="h6 timeline-title">
                              Qatar beat Japan to win first Asian Cup &#8211;
                              highlights &#038; report
                            </h4>
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.bootstrap.news/default/2019/06/fans-celebrate-in-paris-after-side-reaches-world-cup-final/">
                            <span class="timeline-date small">
                              <time
                                class="news-date"
                                datetime="2019-06-14T06:12:10+00:00"
                              >
                                June 14, 2019
                              </time>
                            </span>
                            <h4 class="h6 timeline-title">
                              Fans celebrate in Paris after side reaches World
                              Cup final
                            </h4>
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.bootstrap.news/default/2019/06/football-daily-podcast-crouch-batshuayi-and-tielemans/">
                            <span class="timeline-date small">
                              <time
                                class="news-date"
                                datetime="2019-06-14T06:05:47+00:00"
                              >
                                June 14, 2019
                              </time>
                            </span>
                            <h4 class="h6 timeline-title">
                              Football Daily podcast: Crouch, Batshuayi and
                              Tielemans
                            </h4>
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.bootstrap.news/default/2019/06/back-from-the-dead-parma-embraces-a-football-school-arena/">
                            <span class="timeline-date small">
                              <time
                                class="news-date"
                                datetime="2019-06-13T08:35:42+00:00"
                              >
                                June 13, 2019
                              </time>
                            </span>
                            <h4 class="h6 timeline-title">
                              Back From the Dead, Parma Embraces a Football
                              School arena
                            </h4>
                          </a>
                        </li>
                      </ul>
                      <div class="gap-05"></div>
                    </div>
                  </aside>
                  <aside class="widget">
                    <div class="hover-a text-center">
                      <div class="py-2">
                        <span class="text-mute small">- Advertisement -</span>
                      </div>

                      <a href="#">
                        <img
                          class="img-fluid bg-light"
                          src="../../assets/img/ads/300-demo.png"
                          alt="ads space"
                        />
                      </a>
                    </div>
                    <div class="gap-15"></div>
                  </aside>
                </div>
              </aside>
              {/* album slider */}
              <div class="col-12 mb-4 ">
                <div class="block-area p-4 border bg-light-black">
                  <div class="block-title-6">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white">Albums</span>
                    </h4>
                  </div>

                  <div
                    class="nav-slider-hover nav-dots-top-right light-dots"
                    data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
                  >
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_2aa99892bf10481385470d7f0a3298e0~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_2aa99892bf10481385470d7f0a3298e0~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMmFhOTk4OTJiZjEwNDgxMzg1NDcwZDdmMGEzMjk4ZTB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.QPoRuCUBxbzF_XB8HBamMGFjszXFMMfN5TbriISWcC0"
                                data-src="../../assets/img/400x340/img1.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Community Resilience Seminar
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_2995db9abd2a44818a11d14300fda904~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_2995db9abd2a44818a11d14300fda904~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjk5NWRiOWFiZDJhNDQ4MThhMTFkMTQzMDBmZGE5MDR-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.S51z-LLdU_U1CbCuyCXpcFyE_qdd1NyJCrJgjQouFIc"
                                data-src="../uploads/slider_1.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Formation of Youth Network of
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_084f1d4954694ade9879bf5f6c0dd39a~mv2.jpg/v1/fill/w_500,h_317,al_c,q_80,usm_0.66_1.00_0.01/5668b5_084f1d4954694ade9879bf5f6c0dd39a~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMDg0ZjFkNDk1NDY5NGFkZTk4NzliZjVmNmMwZGQzOWF-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.jO7zm0CDZYIOKgPSBPnrBW_nJGDK3_Gt_irnxvFZUv4"
                                data-src="../../assets/img/400x340/img3.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Monthly Planning and Review Meeting
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNjczZmJiMmEzM2YyNGUwYWFjMmU0ZTlhNDQyNTVjZjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.cBknKLIKY-A2E5OzB5QxzuYhcZxmmoiyi8MOfIQyE3I"
                                data-src="../../assets/img/400x340/img4.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Youth Network Meeting Multan
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid "
                                src="https://static.wixstatic.com/media/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjBjMTc3ODVlY2ZiNGQzMTk0M2YxZjBiM2JmNzI1Mjd-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sYREzcOQmJKZokDk_37AseItoOrZ5PFFWwdHwvYkTq4"
                                data-src="../../assets/img/400x340/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Youth Network Meeting Khanewal
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              {/* Blogs */}
              <div class="col-md-8">
                <div class="block-area">
                  <div class="block-title-6">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white">Blogs</span>
                    </h4>
                  </div>
                  <div class="border-bottom-last-0 first-pt-0">
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        {/* <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-sm-12 col-md-12 col-lg-12">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Internship – The Gateway to your Career
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              Aqsa Shehzadi (Intern at SSDO) Internships are
                              that part of your career from where opportunities
                              arise. It has become so common for fresh...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        {/* <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-sm-12 col-md-12 col-lg-12">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">Domestic violence: A trauma</a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              By: Farishta Khattak Domestic violence occurs
                              between people in an intimate relationship. It can
                              take many forms, including emotional,...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        {/* <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-sm-12 col-md-12 col-lg-12">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Modern slavery; bounding generations
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              Human trafficking is an organized crime as well as
                              it’s a billion-dollar industry, human trafficking
                              is when someone irrespective of...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        {/* <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-sm-12 col-md-12 col-lg-12">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Right to Information; a path to Enlightenment!
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              BY NATASHA The right to information is one of the
                              fundamental rights in Pakistan, In October 2002,
                              then President Musharraf promulgated...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        {/* <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img17.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-sm-12 col-md-12 col-lg-12">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Why Punjab is the largest victim of Human
                                Trafficking in Pakistan?
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              By: Rukhshinda Baig - Legislative Intern SSDO When
                              we talk about Pakistan, Punjab takes leading role
                              in everything whether it is a...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img18.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Want the best Black Friday deals? Head to a
                                department store
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img14.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img15.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                Dubai launches pilot for Middle East 'Shark
                                Tank'
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                    <div class="row">
                      <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="ratio_360-202 image-wrapper">
                          <a href="#">
                            <img
                              class="img-fluid lazy"
                              src="../../assets/img/assets/lazy-empty.png"
                              data-src="../../assets/img/360x202/img16.jpg"
                              alt="Image description"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                          <h3 class="card-title h2 h3-sm h2-md">
                            <a href="#">
                              The pioneering and popular compact Range Rover
                              Evoque gets a major makeover
                            </a>
                          </h3>
                          <div class="card-text mb-2 text-muted small">
                            <span class="d-none d-sm-inline me-1">
                              <a class="fw-bold" href="#">
                                John Doe
                              </a>
                            </span>
                            <time datetime="2019-10-21">Oct 21, 2019</time>
                          </div>
                          <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. A small river
                            flows by their place and ...
                          </p>
                        </div>
                      </div>
                    </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img19.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                European markets fight back to close higher; oil
                                in focus
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a py-4">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/360x202/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <h3 class="card-title h2 h3-sm h2-md">
                              <a href="#">
                                MotoGP: Which team needs what in 2019?
                              </a>
                            </h3>
                            <div class="card-text mb-2 text-muted small">
                              <span class="d-none d-sm-inline me-1">
                                <a class="fw-bold" href="#">
                                  John Doe
                                </a>
                              </span>
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                            </div>
                            <p class="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. A small
                              river flows by their place and ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article> */}
                  </div>
                </div>

                {/* <div class="clearfix my-4">
                  <nav class="float-start" aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item active">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          4
                        </a>
                      </li>
                      <li class="page-item">
                        <span class="page-link disabled">....</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html">
                          12
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="../category/category.html"
                          aria-label="Next"
                          title="Next page"
                        >
                          <span aria-hidden="true">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.2rem"
                              height="1.2rem"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <polyline
                                points="184 112 328 256 184 400"
                                style={{
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeMiterLimit: "10",
                                  strokeWidth: "48px",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }}
                              />
                            </svg>
                          </span>
                          <span class="visually-hidden">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <span class="py-2 float-end">Page 1 of 12</span>
                </div> */}
              </div>
              {/* start full column */}
              {/* <div class="col-12 mb-4">
                <div class="block-area p-4 border bg-light-black">
                  <div class="block-title-13">
                    <h4 class="h5 title-box-dot">
                      <span>Interior Design</span>
                    </h4>
                    <div class="dot-line"></div>
                  </div>
                  <div
                    class="nav-slider-hover nav-dots-top-right light-dots"
                    data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
                  >
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/400x340/img1.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  An elegant Modern office design in California
                                  and Nevada
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/400x340/img2.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Here’s All The Property News You Missed This
                                  Week
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/400x340/img3.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  Why We Love the Look of White Calacatta
                                  Marble?
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/400x340/img4.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  The event showcases products like homewares
                                  and furniture
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="col-12 col-sm-6 col-lg-4 me-2">
                      <div class="col-12 mb-4">
                        <div class="card card-full hover-a">
                          <div class="ratio_327-278 image-wrapper">
                            <a href="#">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/400x340/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                            <div class="position-absolute p-3 b-0 w-100 bg-shadow">
                              <h4 class="h3 h4-sm h3-md card-title">
                                <a class="text-white" href="#">
                                  The Best Street Style Looks from New York
                                  Property show
                                </a>
                              </h4>
                              <div class="small text-light">
                                <time datetime="2019-10-18">Oct 18, 2019</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div> */}
              {/* start left column */}

              {/* start right column */}
              <aside class="col-md-4 end-sidebar-lg mt-4">
                <div class="sticky">
                  <aside class="widget">
                    {/* <div class="block-title-4">
                      <h4 class="h5 title-arrow">
                        <span>Most read</span>
                      </h4>
                    </div> */}
                    <div class="small-post">
                      <div class="">
                        <a href="#">
                          <img
                            class="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/WWD20.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>

                      <div class="">
                        <a href="#">
                          <img
                            class="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/SDG_banner_210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div class="">
                        <a href="#">
                          <img
                            class="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/OpioidStrategy_210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div class="">
                        <a href="#">
                          <img
                            class="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/FasstrackingUNCAC-banner-210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                    </div>

                    <div class="gap-0"></div>
                  </aside>
                  {/* 
                  <aside class="widget">
                    <div class="p-4 border bg-light-dark text-center mb-4">
                      <h4>Get Updates</h4>
                      <p class="text-dark-light">
                        Subscribe our newsletter to get the last update into
                        your inbox!
                      </p>
                      <div class="mx-auto">
                        <form
                          id="subscribe"
                          class="needs-validation"
                          action="#"
                          novalidate=""
                        >
                          <div class="input-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              required=""
                              aria-label="email form"
                              placeholder="Enter your email address"
                            />
                            <button class="btn btn-primary" type="submit">
                              Subscribe
                            </button>
                            <div class="invalid-feedback">
                              Please insert email address.
                            </div>
                          </div>
                        </form>
                      </div>
                      <p class="small text-center text-dark-light mt-3">
                        hate spammers, and never spam
                      </p>
                    </div>
                    <div class="gap-0"></div>
                  </aside> */}

                  {/* <aside class="widget">
                    <div class="block-title-4">
                      <h4 class="h5 title-arrow">
                        <span>Travelling</span>
                      </h4>
                    </div>
                    <div class="small-post">
                      <article class="card card-full hover-a mb-2">
                        <div class="card-body pt-0">
                          <h3 class="card-title h5">
                            <a href="#">
                              Fans celebrate in Paris after side reaches World
                              Cup final
                            </a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-06-16">Jun 16, 2019</time>
                          </div>
                        </div>
                      </article>
                      <article class="card card-full hover-a mb-2">
                        <div class="card-body pt-0">
                          <h3 class="card-title h5">
                            <a href="#">
                              5 Tips to Save Money Booking Your Next Hotel Room
                            </a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-06-16">Jun 16, 2019</time>
                          </div>
                        </div>
                      </article>
                      <article class="card card-full hover-a mb-2">
                        <div class="card-body pt-0">
                          <h3 class="card-title h5">
                            <a href="#">
                              The 52 Places Traveler: Summer in France, in Two
                              Very Different Ways
                            </a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-06-16">Jun 16, 2019</time>
                          </div>
                        </div>
                      </article>
                      <article class="card card-full hover-a mb-2">
                        <div class="card-body pt-0">
                          <h3 class="card-title h5">
                            <a href="#">
                              6 Simple Tips to Help Vegetarian or Vegan
                              Travelers Eat Well, Anywhere
                            </a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-06-16">Jun 16, 2019</time>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div class="gap-0"></div>
                  </aside> */}
                </div>
              </aside>
            </div>
          </div>
        </main>
        <footer>
          <div id="footer" class="footer-dark bg-dark bg-footer py-5 px-3">
            <div class="container">
              <div class="row">
                {/* left widget */}
                <div class="widget col-md-4">
                  <h3 class="h5 widget-title border-bottom border-smooth">
                    About Us
                  </h3>
                  <div class="widget-content">
                    <img
                      class="footer-logo img-fluid mb-2"
                      src="/uploads/SSDO_Logo.webp"
                      alt="footer logo"
                    />
                    <p>
                      Sustainable Social Development Organization (SSDO) is a
                      non-governmental organization founded in 2015 and
                      registered under Societies Registration Act 1860. SSDO is
                      a research-based advocacy organization working on issues
                      of peace and sustainable development in Pakistan by
                      engaging all stakeholders and citizens.kj
                    </p>
                    <address>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      Amphitheatre, Mountain View,
                      <br />
                      San Francisco, CA 9321, United States
                    </address>
                    <p class="footer-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-telephone-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                      +(123) 456-7890
                    </p>
                    <p class="footer-info mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-envelope-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                      support@example.com
                    </p>
                    <div class="social mb-4">
                      <span class="my-2 me-3">
                        <a
                          target="_blank"
                          href="https://facebook.com"
                          aria-label="Facebook"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </a>
                      </span>
                      <span class="my-2 me-3">
                        <a
                          target="_blank"
                          href="https://twitter.com"
                          aria-label="Twitter"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="currentColor"
                            class="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </span>
                      <span class="my-2 me-3">
                        <a
                          target="_blank"
                          href="https://youtube.com"
                          aria-label="Youtube"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                          </svg>
                        </a>
                      </span>
                      <span class="my-2 me-3">
                        <a
                          target="_blank"
                          href="https://instagram.com"
                          aria-label="Instagram"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                            <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                            <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* center widget */}
                <div class="widget col-sm-6 col-md-4">
                  <h3 class="h5 widget-title border-bottom border-smooth">
                    Popular Posts
                  </h3>
                  <div class="posts-list">
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img6.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                                Progress Reports
                              </a>
                            </h3>
                            {/* <div class="card-text small text-light">
                              <time datetime="2019-10-16">Oct 16, 2019</time>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                                Research Reports
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img4.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                                Financial Reports
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                {/* right widget */}
                <div class="widget col-sm-6 col-md-4">
                  <h3 class="h5 widget-title border-bottom border-smooth">
                    Editor Picks
                  </h3>
                  <div class="posts-list">
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img3.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                                Events
                              </a>
                            </h3>
                            {/* <div class="card-text small text-light">
                              <time datetime="2019-10-16">Oct 16, 2019</time>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img2.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                                Jobs
                              </a>
                            </h3>
                            {/* <div class="card-text small text-light">
                              <time datetime="2019-10-15">Oct 15, 2019</time>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="card card-full hover-a mb-4">
                      <div class="row">
                        {/* <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/115x80/img1.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>
                        </div> */}
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6">
                              <a href="../post/single1.html">
                               Blogs
                              </a>
                            </h3>
                            {/* <div class="card-text small text-light">
                              <time datetime="2019-10-14">Oct 14, 2019</time>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer copyright content */}
          <div class="footer-copyright bg-secondary">
            <div class="container">
              <nav class="navbar navbar-expand navbar-dark px-0">
                <ul class="navbar-nav footer-nav text-center first-start-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/about-us.html">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/contact-us.html">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/term-of-use.html">
                      Term Of Use
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/privacy-policy.html">
                      Privacy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                      Buy Now
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto text-center">
                  <li class="d-inline navbar-text">
                    Copyright &copy; BootNews - All rights reserved.
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
