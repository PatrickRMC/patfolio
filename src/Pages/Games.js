import Project from './Project'
import FadeIn from 'react-fade-in';

const Games = () => {
return (
    <div className="shadow-2xl">
      <h1 className="font-mono text-coolyellow text-5xl md:text-6xl lg:text-9xl">Projects</h1>
      <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
        
        <Project name="Dungeon Feeds" description="This game was created in 48 hours for the Ludum Dare competition, which got rated 51st in graphics out of the 2000+ games submitted." imglink="https://img.itch.zone/aW1nLzMyNzcwMjAucG5n/original/4im82Z.png" gameLink="https://patrickrmc.itch.io/dungeon-feeds"/>
        <Project name="Rome: Invasion" description ="This game was created in 72 hours for the MiniJam competition" imglink="https://img.itch.zone/aW1nLzMyMDE3MDgucG5n/original/qUnVbh.png" gameLink="https://patrickrmc.itch.io/rome-invasion"/>
        <Project name="SAW: 60 Seconds" imglink="https://img.itch.zone/aW1nLzQzNTkyMjAucG5n/original/tmjQOO.png" gameLink="https://patrickrmc.itch.io/60-second-loop" />
        <Project name="Wholesome Family Reunion" description="This game was created in 12 hours for the Godot Wildjam" imglink="https://img.itch.zone/aW1nLzQxMTA1NTMucG5n/original/NBR8mf.png" gameLink="https://patrickrmc.itch.io/wholesome-family-reunion"/>
        <Project name="Cadence Stadium" description="This game was a collaboration between me and two others for a minijam" imglink="https://img.itch.zone/aW1nLzM0Njg0ODQucG5n/original/JggXl1.png" gameLink="https://patrickrmc.itch.io/cadence-stadium"/>
        <Project name="Out Of CTRL" description="This game was created in 48 hours for the GMTK Jam" imglink="https://img.itch.zone/aW1nLzM4NDkxMDkucG5n/original/e0b%2F1f.png" gameLink="https://patrickrmc.itch.io/out-of-ctrl"/>

      </FadeIn>
    </div>
  );
}

export default Games
