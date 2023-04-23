import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
// import Button from '../components/Button';
import "../App.css";

/* TODO
shuffle component button home page
  next hobby component button hobby page
  homepage icons/design more interesting page
  homepage button css/grid layout
*/

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>
          hobby <span className="pronunciation">[hob-ee]</span>
        </h1>
        <h3 className="pronoun">noun, plural hob·bies.</h3>

        <Link to="/category/past" className="btn-primary">
          Past Hobbies
        </Link>
        <Link to="/category/present" className="btn-primary">
          Present Hobbies
        </Link>
        <Link to="/category/future" className="btn-primary">
          Future Hobbies
        </Link>

        <section className="explanation">
          <h2>So what is the point of this site? </h2>
          <p>
            It's just a list of all my hobbies. This helps me remember what I
            did in the past, what I'm into now, and what I might want to do in
            the future. The world is interesting. Routine gets boring. Start a
            new hobby and you should be able to find something fun to focus on
            for awhile. Test.
          </p>
        </section>

        {/* <div className='shuffle'>
          <p>Or choose a random hobby:</p>
          <Button text='Random Hobby' />
        </div> */}

        <div>
          <p>Looking for more hobby ideas?</p>
          <Link to="/category/ideas" className="btn-primary">
            Hobby Ideas
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
