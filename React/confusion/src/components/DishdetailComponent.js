import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

function RenderDish({dish}) {
  if (dish != null) {
    return (
      <Col xs={12} md={5} className="m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  } else return <></>;
}

function RenderComments({comments}) {
  if (comments != null) {
    var showComments = comments.map((cmt) => {
      return (
        <li key={cmt.id}>
          <p>{cmt.comment}</p>
          <p>
            -- {cmt.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(cmt.date)))}
          </p>
        </li>
      );
    });

    return (
      <Col xs={12} md={5} className="m-1">
        <h4>Comment</h4>
        <ul className="list-unstyled">{showComments}</ul>
        <CommentForm />
      </Col>
    );
  } else {
    return <></>;
  }
}

const DishDetail = (props) => {
  return (
    <Container>
      <Row>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <Col xs={12}>
          <h3>{props.dish.name}</h3>
          <hr />
        </Col>
      </Row>

      <Row>
        <RenderDish dish={props.dish}/>
        <RenderComments comments={props.comments}/>
      </Row>
    </Container>
  );
};

export default DishDetail;