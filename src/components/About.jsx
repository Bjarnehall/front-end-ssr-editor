import "./About.css";

function About() {
  return (
    <div className="about">
        <h2 className="title">About this project</h2>
        <div className="presentation">
        <p>
            This project is created as a course assignment aming to practice
            working in a team refactoring a word editing application. The application
            was first written as a express app using no front-end framework and
            a sqlite database.
        </p>
        <p>
            The goal is to rebuild the application using React as a frontend framework,
            keeping express but rebuilding it as a rest-API using mongoDB as a standalone
            database.
        </p>
        <p className="authors">
            The project is made by Jonas and Valeriia and we call ourself: LOST IN REACT.
        </p>
        </div>
    </div>
  )
}
export default About