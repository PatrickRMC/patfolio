import gapProperties from "postcss-gap-properties";

const Project = (props) => {
  return (
    <div className="grid grid-cols-3 m-8 border-8 border-black border-solid">
        <img src={props.imglink} className=""/>
        <h1 className="text-lg">Project: {props.name}</h1>
    </div>
  );
}

export default Project;
