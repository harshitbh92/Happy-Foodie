import React from 'react'
import "./CSS/mystyle.css"

export default function Footer() {
  return (
    <body class="d-flex flex-column min-vh-100" id="footer">
      <div class="container-fluid bg-body-tertiary mt-auto " id="footer">


        <footer class="text-center text-lg-start border border-white mt-xl-5 pt-4">

          <div class="container p-4">
            <div class="row">

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Useful Links</h5>

                <ul class="list-unstyled mb-4">
                  <li>
                    <a href="#!" >About us</a>
                  </li>
                  <li>
                    <a href="#!" >Contact</a>
                  </li>
                  <li>
                    <a href="#!">Service</a>
                  </li>
                  <li>
                    <a href="#!">Blog</a>
                  </li>

                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Assistance</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Contact us</a>
                  </li>
                  <li>
                    <a href="#!" >Size Guide</a>
                  </li>
                  <li>
                    <a href="#!" >Information</a>
                  </li>

                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Careers</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" >Jobs</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>

                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" />
                  <label class="form-label" for="form5Example2">Email address</label>
                </div>

                <button type="submit" class="btn btn-outline-white btn-block" id="button">Subscribe</button>
              </div>

            </div>

          </div>

          <div class="text-center p-3 border-top border-white">
            © 2020 Copyright: Hello Foodie
          </div>

        </footer>

      </div>
    </body>

  )
}
