
const Hero = () => {
    return (
      <div id="home">
        <div className="hero md:h-[calc(100vh-100px)]">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <iframe
              className="rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              
              height={500}
              width={600}
            ></iframe>
          </div>
            <div className=" w-1/2 flex flex-col ">
              <div className="flex items-center gap-3">
               
                <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                  </span>
                  <p>Building Scalable Modern Websites for the Future</p>
                </div>
              </div>
              <p className="text-3xl leading-tight font-semibold lg:text-[36px] lg:leading-[1.15] headline">
                
                We are a leading software company providing cutting-edge technology services and innovative products to help businesses grow and individuals thrive.
              </p>
  
              <div className="flex gap-3 pt-4">
                <button className="btn btn-primary  ">
                  Get a Free Consultation
                </button>
               <a href="#about">
                   <button className="btn btn-neutral btn-outline">Scroll Down</button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;