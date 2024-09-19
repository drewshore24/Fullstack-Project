import { Link } from "react-router-dom";

const Home = ({username}) => {
  return (
    <>
      <section className="Home">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/articles">
            Articles
          </Link>
        </nav>
        <h1> Welcome to Bookface</h1>
        <p> You are logged in as {username}</p>
      </section>
    </>
  );
};


export default Home;