import testi1 from './img/testimonial-1.jpg'
import testi2 from './img/testimonial-2.jpg'
import testi3 from './img/testimonial-3.jpg'



function Testimonial() {
    return (
        <>
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px;" }}>
                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                        <h1 class="display-4">Patients Say About Our Services</h1>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="owl-carousel testimonial-carousel">
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle mx-auto" src={testi1} alt="" />
                                        <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                            <i class="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h3>Patient Name</h3>
                                    <h6 class="fw-normal text-primary mb-3">Profession</h6>
                                </div>
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle mx-auto" src={testi2} alt="" />
                                        <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                            <i class="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h3>Patient Name</h3>
                                    <h6 class="fw-normal text-primary mb-3">Profession</h6>
                                </div>
                                <div class="testimonial-item text-center">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-circle mx-auto" src={testi3} alt="" />
                                        <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                            <i class="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <p class="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr class="w-25 mx-auto" />
                                    <h3>Patient Name</h3>
                                    <h6 class="fw-normal text-primary mb-3">Profession</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-dark text-light mt-5 py-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                            <p class="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                            <p class="mb-0"><i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                <a class="text-light" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                <a class="text-light" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address" />
                                    <button class="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div class="d-flex">
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-md-0">&copy; <a class="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <p class="mb-0">Designed by <a class="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="lib/tempusdominus/js/moment.min.js"></script>
            <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
            <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
            <script src="js/main.js"></script>

        </>
    )
}
export default Testimonial;