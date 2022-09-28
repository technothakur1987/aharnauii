import React from "react";

export default function Explore() {
  return (
    <div className="explore">
      <div className="container-fluid d-flex justify-content-center align-items-center exploreMainBanner">
        <div className="exploreMainBannerContent  ">
          <h4 className="text-start text-white">
            Instant access to all business information without having to leave
            your work.{" "}
          </h4>
          <form className="d-flex mt-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search AnyThing"
              aria-label="Search"
            />

            <div className="dropdown">
              <a
                className="btn btn-light dropdown-toggle"
                to="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select City
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" to="/">
                    Indore
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="/">
                    Bhopal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="/">
                    Jabalpur
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <div className="container-fluid bg-light mt-4">
            <h5 className="text-center fw-bolder">Top Searches</h5>
            <span className="ms-2 me-2 text-primary ">
              heart doctor in srinagar
            </span>
            <span className="ms-2 me- text-primary">dentist near me </span>
            <span className="ms-2 me-2 text-primary">
              best coaching center in srinagar
            </span>
            <span className="ms-2 me-2 text-primary">sports academy </span>
            <span className="ms-2 me-2 text-primary">interior designer</span>
            <span className="ms-2 me-2 text-primary">web developer</span>
            <span className="ms-2 me-2 text-primary">jk bank atm</span>
            <span className="ms-2 me-2 text-primary">
              private hospitals in baramulla
            </span>
            <span className="ms-2 me-2 text-primary">
              marriage hall booking
            </span>
            <span className="ms-2 me-2 text-primary">skin doctor</span>
          </div>
          <button className="btn btn-sm btn-primary mt-4 exploreMainBannerBtn ">
            Set Alert
          </button>
        </div>
      </div>
      <div className="container mt-3 mb-3 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img
                src="images/explorebanner2.webp"
                className="card-img-top"
                alt="img1"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Success story of KLocal</h5>
                <p className="card-text  fs-6 ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <btn className="btn btn-primary">Go Somewhere</btn>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="images/explorebanner4.webp"
                className="card-img-top"
                alt="img2"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">New Findings of Science</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <btn className="btn btn-primary">Go Somewhere</btn>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="images/mushroom.webp"
                className="card-img-top"
                alt="img3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Mushroom health benefits</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content
                </p>
                <btn className="btn btn-primary">Go Somewhere</btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
