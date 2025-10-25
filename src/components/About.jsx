import Wrapper from '../assets/wrappers/AboutHome';
import { FaGithub } from "react-icons/fa";

/*
About component presents why this application exists and how its made.
It does not go very deep but names a few of the tecnoligies used and
links to the source code on github.
*/
function About() {
  return (
    <Wrapper>
      <div className="about">
          <h2 className="title">About this project</h2>
          <div className="presentation">
          <p>
              This project is created as a course assignment aming to practice
              working in a team refactoring a document editing application. The application
              was first written as a express app using no front-end framework and
              a sqlite database. We as students have completly rebuilt the express server
              to function as a fully functional rest-api. The editor is working with real-time
              collaboration through sockets, users can share documents and even send invites
              to non registered users by thier email.
          </p>
          <p>
              The webbclient for this api is a fully standalone REACT application hosted on
              github-pages. For data storing we also have a MongoDb database hosted on atlas.
          </p>
          <p className="authors">
              The project is made by Jonas and Valeriia and we call ourself: LOST IN REACT.
              Check out the full source code on github links below!
          </p>
          <br/>
          <div className="repo-links">
            <a href="https://github.com/Bjarnehall/front-end-ssr-editor"><FaGithub size={25}/> React application</a>
            <a href="https://github.com/Valle85/ssr-editor"><FaGithub size={25}/> Express API</a>
          </div>
          </div>
      </div>
    </Wrapper>

  )
}
export default About