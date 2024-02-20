import React, {useState} from 'react'

export const Contact = () => {

  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [topicState, setTopicState] = useState('');
  const [messageState, setMessageState] = useState('');

  function handleForm(e) {
    e.preventDefault();
    checkInputName();
    let result = document.querySelector('.result');
    let resultText = "Name: " + nameState + "<br>Email: " + emailState + "<br>Topic: " + topicState + "<br>Message: " + messageState;
    result.innerHTML = resultText;
  }

  function checkInputName() {
    let element = document.querySelector('#name');
    let value = element.value;
    if (value.length < 3) {
      element.classList.add('input-error');
    }

    else {
      element.classList.remove('input-error');
      element.classList.add('input-success');
    }
  }

  function handleNameChange(e) {
      setNameState(e.target.value);   
  }

  function handleEmailChange(e) {
    setEmailState(e.target.value);    
  }

  function handleTopicChange(e) {
    setTopicState(e.target.value);
  }

  function handleMessageChange(e) {
    setMessageState(e.target.value);
  }

  return (
    <div className="container">
        <h1>Contact</h1>
        
        <form action="/contact" method="post" onSubmit={handleForm}>
          <legend>Contact form</legend>
          <div className="form-group">
            <div className="form-element">
              <label htmlFor="name">Enter your name: </label>
            </div>
            <div className="form-element">
              <input id="name" name="name" onChange={handleNameChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="form-element">
              <label htmlFor="email">Enter your e-mail: </label>
            </div>
            <div className="form-element">
              <input type="email" id="email" name="email" onChange={handleEmailChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="form-element">
              <label htmlFor="topic">Enter the topic of your message: </label>
            </div>
            <div className="form-element">
              <input name="topic" id="topic" onChange={handleTopicChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="form-element">
              <label htmlFor="message">Enter your message: </label>
            </div>
            <div className="form-element">           
              <textarea name="message" id="message" cols="30" rows="10" onChange={handleMessageChange}></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="form-element">
              <input type="submit" value="Submit" name="submit" id="submit" />
            </div>
          </div>
        </form>

        <div className="result">

        </div>
    </div>
  )
}
