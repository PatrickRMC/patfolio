import Portrait from "../Pictures/picicon.png";

const Home = () => {
  return (
    <div className="shadow-2xl grid sm:grid-cols-1 md:grid-cols-3 place-content-center m-16 p-4">
          
          <h1 className="text-coolyellow mx-sm px-8 text-3xl lg:text-6xl">Patrick
                <h1 className="text-coolorange text-sm md:text-md lg:text-lg">
                      I'm a 17 year old game developer from Norway. I have been making games using
                      Unity and Godot since 2017 and I've participated in over 30 gamejams since I started.
                </h1>
              
          </h1>
          <img src={Portrait} className="justify-self-center"/>

          <h1 className="text-coolyellow mx-sm px-8 text-3xl lg:text-6xl">
            Contact me!
               
                <h1 className="text-coolorange text-sm md:text-md lg:text-lg">
                  <a href="mailto:patrick.romeo.c@gmail.com" target="_blank" className="underline hover:text-coollightblue">Email me </a>
                  <p className="text-sm italic">(patrick.romeo.c@gmail.com)</p>
                </h1>
               
                <h1 className="text-sm md:text-md lg:text-lg"></h1>
          </h1>
    </div>
  );
}

export default Home;
