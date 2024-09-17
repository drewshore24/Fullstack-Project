import { Link } from "react-router-dom";

const Home = () => {
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
      </section>
    </>
  );
};


export default Home;