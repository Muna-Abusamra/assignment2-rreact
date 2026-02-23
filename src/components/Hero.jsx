
function Hero(){
    return (
        <section className="position-relative">
            <img src="/images/BANNER1.JPG"
                 className="img-fluid w-100"
                 alt="Hero Image"
                 style={{width:"100%" , height:"auto", display:"block"}}/>


            <div className="position-absolute text-start hero-text">
                <h2 className="fw-bold" style={{fontSize: "clamp(1.4rem, 3vw, 2.2rem)"}}>
                    Learn. Improve. Grow
                </h2>
                <p className="mt-2" style={{fontSize: "clamp(1rem, 1.6vw, 1.2rem)"}}>
                    Build your skills through job-ready programs and earn your certification to propel your career.
                </p>
            </div>
        </section>
    )
}
export default Hero;