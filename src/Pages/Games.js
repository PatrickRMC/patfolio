import Project from './Project'
const Games = () => {
return (
    <div className="">
      <h1 className="font-mono text-white text-9xl">Projects</h1>
      <div className="grid grid-cols-3 m-5">
        
        <Project name="Prosjekt 1" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 2" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 3" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 4" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 5" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 6" imglink="https://via.placeholder.com/150"/>

      </div>
    </div>
  );
}

export default Games
