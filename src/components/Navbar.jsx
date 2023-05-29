/* eslint-disable react/prop-types */
function Navbar({ data }) {
  return (
    <nav className="flex container mx-auto max-w-[1000px] items-start justify-between paddingY">
      <div>
        <h1 className="text-white font-montserrat text-[46px] uppercase font-bold">
          {data.heading}
        </h1>
        <p className="text-secondary font-brandonLight text-[25px] font-light">
          {data.subHeading}
        </p>
        <div className="pt-10">
          <a className="navLink" href="">
            About
          </a>
          <a
            className="navLink"
            href="mailto:contact@ludwigreuter.com?subject=Hello!"
          >
            Contact
          </a>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/ludwig-reuter-84515320/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          data-bbox="33 33 133.333 133.333"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          className="w-[55px] aspect-square fill-lightBlue hover:fill-primary transition-all cursor-pointer"
        >
          <g>
            <path
              d="M156.467 33H42.833C37.408 33 33 37.308 33 42.617v114.1c0 5.3 4.408 9.616 9.833 9.616h113.634c5.441 0 9.866-4.316 9.866-9.616v-114.1c0-5.309-4.425-9.617-9.866-9.617ZM52.758 146.617h19.784V82.983H52.758v63.634Zm9.892-72.325c-6.342 0-11.458-5.142-11.458-11.467 0-6.333 5.116-11.467 11.458-11.467 6.317 0 11.458 5.134 11.458 11.467 0 6.325-5.141 11.467-11.458 11.467Zm83.967 72.325H126.85v-30.95c0-7.384-.125-16.867-10.275-16.867-10.292 0-11.858 8.042-11.858 16.333v31.484H84.942V82.983h18.966v8.7h.275c2.642-5 9.092-10.275 18.717-10.275 20.025 0 23.717 13.175 23.717 30.309v34.9Z"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
      </a>
    </nav>
  );
}

export default Navbar;
