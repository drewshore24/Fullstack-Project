import { getTopics } from "../../websiteAPI"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopicsDropDown({selectedTopic, setSelectedTopic}){
    const [topics, setTopics] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);


    useEffect(() => {
        setLoading(true);
        setError(false);
        getTopics()
          .then((response) => {
            setTopics(response)
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
          });
      }, []);


    return(
      <section>
        <nav>
          {topics.map((topic, i) => {
            return (<Link key ={i}className="link" to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>)
          })}
        </nav>
      </section>
    )
//         return(
// <section className="TopicsDropDownList">
//         <select id='options' name='options' onChange={handleTopicChange}>
//         <option >Select Article By Topic</option>
//         {topics.map((topic, i) => {
//           return(
//             <option key={i} value={topic.slug}>{topic.slug}</option>
//           )
//           })}
//           </select>
//       </section>
//     )
}

export default TopicsDropDown