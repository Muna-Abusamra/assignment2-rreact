function TrackRecord(){
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row align-items-center gy-4">


                    <div className="col-md-3 text-center">
                        <img src="/images/10years.png" alt="10 Years" className="img-fluid"
                             style={{maxWidth:"270px"}}/>
                    </div>


                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-4">
                            <img src="/images/leaf.png" alt="leaf" width="32" height="32"
                                 className="me-3"/>
                            <div>
                                <h4 className="fw-bold mb-0" style={{color:"#8fa03a"}}>2K</h4>
                                <p className="text-muted mb-0">New products</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <img src="/images/leaf.png" alt="leaf" width="32" height="32"
                                 className="me-3"/>
                            <div>
                                <h4 className="fw-bold mb-0" style={{color:"#8fa03a"}}>100K</h4>
                                <p className="text-muted mb-0">Students</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="/images/leaf.png" alt="leaf" width="32" height="32"
                                 className="me-3"/>
                            <div>
                                <h4 className="fw-bold mb-0" style={{color:"#8fa03a"}}>10K</h4>
                                <p className="text-muted mb-0">Students</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-5">
                        <h3 className="fw-bold mb-3" style={{color:"#8fa03a"}}>Impressive track record</h3>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default TrackRecord;