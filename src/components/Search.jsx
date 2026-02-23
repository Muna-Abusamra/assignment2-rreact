function Search() {
    return (<section className="py-5 text-center bg-light border-bottom" style={{borderColor: "#e9ecef"}}>

            <div className="container">


                <h2 className="fw-normal text-secondary mb-4">
                    Explore our courses catalogue
                </h2>


                <div className="d-flex justify-content-center mb-4">

                    <div className="input-group shadow-sm rounded-pill overflow-hidden w-50 search-box">

                        <input type="text"
                               className="form-control border-0 py-3"
                               placeholder="Search course catalog"/>

                        <span className="input-group-text bg-white border-0 px-4">
                    <i className="bi bi-search"></i>
                </span>

                    </div>

                </div>


                <div className="d-flex justify-content-center gap-3 mb-4">

                    <button className="btn rounded-pill px-4" style={{backgroundColor:"#8fa03a", color:"white"}}>
                        Recent Courses
                    </button>

                    <button className="btn btn-outline-success rounded-pill px-4"
                            style={{backgroundColor: "transparent",
                                   color: "#8fa03a",
                                   border: "2px solid #8fa03a"}}>
                        Featured category
                    </button>

                    <button className="btn rounded-pill px-4" style={{backgroundColor:"#8fa03a", color:"white"}}>
                        Recent Courses
                    </button>

                </div>

            </div>

        </section>

    )
}
export default Search;