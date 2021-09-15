import Project from './Project'
import FadeIn from 'react-fade-in';

const Games = () => {
return (
    <div className="shadow-2xl">
      <h1 className="font-mono text-coolyellow text-5xl md:text-6xl lg:text-9xl">Projects</h1>
      <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
        
        <Project name="Prosjekt 1" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 2" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 3" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 4" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 5" imglink="https://via.placeholder.com/150"/>
        <Project name="Prosjekt 6" imglink="https://via.placeholder.com/150"/>

      </FadeIn>
    </div>
  );
}

export default Games
