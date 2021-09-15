import Portrait from "../../src/punk.png"
const Home = () => {
  return (
    <div className="shadow-2xl grid sm:grid-cols-1 md:grid-cols-3 place-content-center m-16 p-4">
          
          <h1 className="text-coolyellow mx-sm px-8 text-3xl lg:text-6xl">Patrick RMC
                <h1 className="text-coolorange text-sm md:text-md lg:text-lg">
                      I make games for fun.
                </h1>
              
          </h1>
          <img src={Portrait} className="justify-self-center"/>

          <h1 className="text-coolyellow mx-sm px-8 text-3xl lg:text-6xl">
            Contact me!
               
                <h1 className="text-coolorange text-sm md:text-md lg:text-lg">
                      patrick.romeo.c@gmail.com ||
                      +47 466 11 529
                </h1>
               
                <h1 className="text-sm md:text-md lg:text-lg"></h1>
          </h1>
    </div>
  );
}

export default Home;
