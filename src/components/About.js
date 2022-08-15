import React from "react";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Looking at the assignment for me it was clear I wanted to learn more
        about the react-routing library and statemanagement. Routing for the
        possiblility to link within the single page application. Redux mainly
        for the exercise because I knew redux just from looking at the example
        videos.
      </p>
      <p>
        I still do not know how this happened but during the branching I
        accidentally deleted the main project. Not happy to start all over but
        in the end a good exercise. Even for the second time I ran into some
        problems with the setState. The improvement came from adding a function
        to assign a key to the song object. This could be usefull if I decided
        to have a delete function. The deleted version just had a key-assignment
        as a property in the songList component. The key was not part of the
        object.
      </p>
      <p>
        Writing this I just finnished the rough outlines of the routing option.
        Next step is to make a branch for developing Redux. Fingers crossed!!!
      </p>
    </div>
  );
}

export default About;
