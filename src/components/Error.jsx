

function Error({error}){
  if(error === null){
    return (
      <section className="error">
        <img className="errorImage" src="/src/assets/klipartz.com.png"></img>
        <p className="normalText">Woah what are you doing here?! Please check your URL path and try again!</p>
      </section>
    );
  }
  else if(error.status === 404){
    return (
      <section className="error">
        <img className="errorImage" src="/src/assets/klipartz.com.png"></img>
        <p className="normalText">Status: {error.status}...Looks like the page you have requested doesn't exist, please check what you are request exists!</p>
      </section>
    );
  }
  else if(error.status === 400){
    return (
      <section className="error">
        <img className="errorImage" src="/src/assets/klipartz.com.png"></img>
        <p className="normalText">Status: {error.status}...Something isn't quite right, please check what you have typed in the URL and trry again</p>
      </section>
    );
  }
    return (
      <section className="error">
          <img className="errorImage" src="/src/assets/klipartz.com.png"></img>
          <p className="normalText">Status: {error.status}....Uh Oh</p>
      </section>
      );
}


export default Error