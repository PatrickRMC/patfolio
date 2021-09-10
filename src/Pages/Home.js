import Portrait from "../../src/placeholder.png"
const Home = () => {
  return (
    <div className="grid grid-cols-3 place-content-center m-10">
          
          <h1 className="text-black mx-sm px-8 text-xl md:text-xl lg:text-5xl">Patrick R.M. Christiansen
                <h1 className="text-sm md:text-md lg:text-lg">
                      I make games for fun.
                </h1>
              
          </h1>
          <img src={Portrait} className="justify-self-center"/>

          <h1 className="text-black mx-sm px-8 text-xl md:text-xl lg:text-5xl">Contact me!
                <h1 className="text-sm md:text-md lg:text-lg">Phone: +47 466 11 529</h1>
                <h1 className="text-sm md:text-md lg:text-lg">E-Mail: patrick.romeo.c@gmail.com</h1>
                <h1 className="text-sm md:text-md lg:text-lg"> </h1>
          </h1>
    </div>
  );
}

export default Home;
