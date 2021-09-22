import gapProperties from "postcss-gap-properties";

const Project = (props) => {
  return (
    <div className="grid grid-cols-1 vsm:grid-cols-2 m-8 border-8 border-coolorange border-solid ">
        <img src={props.imglink} className="w-96 h-48"/>
        <div className="grid grid-cols-1 justify-items-center">
          
          <h1 className="font-mono text-lg text-coolyellow">{props.name}</h1>
          <h1 className="font-mono text-sm text-coolorange">{props.description}</h1>
          <a className="bg-coolyellow hover:bg-yellow-400 text-black w-32 h-8 border-coolorange border-b-4 hover:border-yellow-500 rounded"href={props.gameLink} target="_blank" rel="noopener noreferrer">Go to game</a>
        </div>
    </div>
  );
}

export default Project;
