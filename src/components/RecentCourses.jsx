function RecentCourses() {
    return (
        <section className="py-4 bg-light">

            <div className="container">

                <div className="row align-items-center">


                    <div className="col-md-3">
                        <h4 className="fw-bold mb-0">
                            Recent Courses
                        </h4>
                    </div>


                    <div className="col-md-1 d-none d-md-flex justify-content-center">
                        <div className="vr" style={{height:"60px"}}></div>
                    </div>


                    <div className="col-md-5">
                        <p className="text-muted small mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            In vehicula nunc in neque sollicitudin...
                        </p>
                    </div>


                    <div className="col-md-3 text-md-end mt-3 mt-md-0">
                        <a href="#" className="btn btn-outline-secondary rounded-pill px-4">
                            View all courses
                        </a>
                    </div>

                </div>

            </div>

        </section>
    )
}
export default RecentCourses;