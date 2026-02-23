function SuccessStories(){
    return (
        <section className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold mb-5">Softina Success Stories</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center text-start gap-4">
                            <img src="/images/success_story_icon1__.png"
                                 className="rounded-circle flex-shrink-0 border border-3 border-white shadow"
                                 width="220" height="220" style={{objectFit:"cover"}} alt="Story 1"/>
                            <div>
                                <h5 className="fw-bold">Success Story Title</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.</p>
                                <a href="#" className="text-success small">read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center text-start gap-4">
                            <img src="/images/success-story-2.png"
                                 className="rounded-circle flex-shrink-0 border border-3 border-white shadow"
                                 width="220" height="220" style={{objectFit:"cover"}} alt="Story 2"/>
                            <div>
                                <h5 className="fw-bold">Success Story Title</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.</p>
                                <a href="#" className="text-success small">read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SuccessStories;