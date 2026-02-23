function Footer() {
    return (
        <>
            <div className="bg-light py-3">
                <img
                    src="/images/dot_media.png"
                    alt="Partners"
                    className="img-fluid w-100"
                    style={{ maxHeight: "190px", objectFit: "cover" }}
                />
            </div>

            <footer className="py-4 text-white" style={{ backgroundColor: "#8fa03a" }}>
                <div className="container">
                    <div className="row mb-4 gy-3">
                        <div className="col-6 col-md-3">
                            <h6 className="fw-bold mb-3">SOCIÉTÉ</h6>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Presse</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Recrutement</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">English</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-3">
                            <h6 className="fw-bold mb-3">Solutions</h6>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="text-white-50 text-decoration-none">Plateforme d'apprentissage</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Fonctionnalités</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Tarifs</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-3">
                            <h6 className="fw-bold mb-3">Offres</h6>
                            <ul className="list-unstyled small">
                                <li><a href="#" className="text-white-50 text-decoration-none">Académiques</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Organismes de formation</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Entreprises</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-3 text-md-end">
                            <p className="fw-bold mb-2">Softina</p>
                            <div>
                                <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white opacity-25" />

                    <div className="d-flex flex-wrap justify-content-between small text-white-50">
                        <p className="mb-0">Copyright © 2023 All rights reserved Worldwide</p>
                        <div>
                            <a href="#" className="text-white-50 text-decoration-none me-3">Contact us</a>
                            <a href="#" className="text-white-50 text-decoration-none me-3">Sitemap</a>
                            <a href="#" className="text-white-50 text-decoration-none">Legal disclaimer</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
