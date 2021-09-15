import gapProperties from "postcss-gap-properties";

const Project = (props) => {
  return (
    <div className="grid grid-cols-3 m-8 border-8 border-coolorange border-solid">
        <img src={props.imglink} className=""/>
        <h1 className="font-mono text-lg text-coolyellow">Project: {props.name}</h1>
    </div>
  );
}

export default Project;
