import { Container } from "react-bootstrap";
import "./LayoutContainer.css";

export const LayoutContainer = ({ children }) => {
  return (
    <>
      <Container className="full-container" fluid>{children}</Container>
    </>
  );
};
