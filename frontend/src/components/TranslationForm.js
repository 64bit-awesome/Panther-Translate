import React, {useState} from 'react';
import { Container, Col, Row } from "react-bootstrap";

import { MdOutlineSyncAlt } from "react-icons/md";

function TranslationForm() {

  const [input, setInput] = useState(""); // holds the string to be translated.
  const [inputLanguage, setInputLanguage] = useState("English"); // holds the input language.
  const [output, setOutput] = useState(""); // holds the translated string.
  const [outputLanguage, setOutputLanguage] = useState("Spanish"); // holds the output language.

  const handleSubmit = () => {

  }

  return(
    <form 
      className="translate-form"
      method="POST"
      onSubmit={handleSubmit}
    >
      <Container>
        <Row>
          <Col>
            <h2>{inputLanguage}</h2>
            <textarea 
              value={input}
              className="input-box"
              onChange={(event) => { setInput(event.target.value) }}
            />
          </Col>
          <Col style={{maxWidth: "8%", color: "#acac21"}}>
            <MdOutlineSyncAlt size={40}/>
          </Col>
          <Col>
            <h2>{outputLanguage}</h2>
            <textarea 
              value={output}
              className="input-box"
              onChange={(event) => { setOutput(event.target.value) }}
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <input type="submit" value="      Translate      " style={{marginTop: "5%"}}/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </form>
  );
}

export default TranslationForm;