import Portrait from "../../src/placeholder.png"
const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 place-content-center m-10">
          
          <h1 className="text-black mx-sm px-8 text-3xl lg:text-4xl">Patrick RMC
                <h1 className="border text-sm md:text-md lg:text-lg">
                      I make games for fun.
                </h1>
              
          </h1>
          <img src={Portrait} className="justify-self-center"/>

          <h1 className="text-black mx-sm px-8 text-3xl lg:text-4x">Contact me!
                <h1 className="text-sm md:text-md lg:text-lg">+47 466 11 529</h1>
                <h1 className="text-sm md:text-md lg:text-lg">patrick.romeo.c@gmail.com</h1>
                <h1 className="text-sm md:text-md lg:text-lg"> </h1>
          </h1>
    </div>
  );
}

export default Home;
