import React, { useEffect, useState } from "react";
import { AccessService } from "../../core/service/authServices";
import { CopyBlock, github } from "react-code-blocks";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

import useAuth from "../../auth/useAuth";

export default function SearchAcces() {
  const [accessData, setAccessData] = useState([]);
  const [accessDataFilterd, setAccessDataFiltered] = useState([]);

  const [query, setQuery] = useState(null);

  const auth = useAuth();

  useEffect(() => {
    AccessService().then(({ data }) => {
      setAccessData(data);
      if (query !== null && query !== "") {
        setAccessDataFiltered(data);
      }
    });
  }, []);

  useEffect(() => {
    if (query === null || query === "") {
      setAccessDataFiltered([]);
    } else {
      let dataByName = accessData.filter((item) =>
        item.username.includes(query)
      );
      setAccessDataFiltered(dataByName);
    }
  }, [query]);

  return (
    <Container>
      <Row>
        <Col md={12} xs={12} lg={12} className="text-end">
          <Button type="button" variant="danger" className="mt-4" onClick={async()=>await auth.logout()}>
            sign-out
          </Button>
        </Col>
        <Col md={12} xs={12} lg={12}>
          <InputGroup className="mb-3 mt-4">
            <InputGroup.Text>Search names</InputGroup.Text>
            <Form.Control
              aria-label="Query"
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </Col>
        {accessDataFilterd.map((item, id) => {
          return (
            <Col key={`acces_${id}`}>
              <CopyBlock
                text={JSON.stringify(item)}
                language={"json"}
                showLineNumbers={false}
                theme={github}
                codeBlock
                highlight="1-5,7,10,15-20"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
