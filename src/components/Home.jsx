import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="Home">
        <h1> Welcome to Bookface</h1>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/articles">
            Articles
          </Link>
        </nav>
      </section>
    </>
  );
};


export default Home;