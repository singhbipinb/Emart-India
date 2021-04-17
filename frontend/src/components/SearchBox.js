import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { MdSearch } from "react-icons/md";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Accordion onSubmit={submitHandler}>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <Button variant="outline-light" style={{ borderRadius: 10 }}>
          <MdSearch size="25" />
        </Button>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Form>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
          />
        </Form>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default SearchBox;
