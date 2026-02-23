function Contact(){
    return (<section className="py-5 bg-white">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-5">
                        <h2 className="fw-bold mb-3">Get in touch</h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida.</p>
                        <h6 className="fw-bold mt-3">Address</h6>
                        <p className="text-muted small">Some Straße<br/>München, 11230<br/>Germany</p>
                        <h6 className="fw-bold">Phone</h6>
                        <p className="text-muted small">800-123-4567<br/>Fax: 718-724-3312</p>
                    </div>
                    <div className="col-md-7">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control shadow-sm" placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control shadow-sm"
                                       placeholder="Your email address"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control shadow-sm" rows="5" placeholder="Comments"></textarea>
                            </div>
                            <button type="submit" className="btn px-5" style={{backgroundColor:"#8fa03a", color:"white"}}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contact