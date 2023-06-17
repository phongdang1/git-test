import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card
>
    <CardImg width="100%" src={dish.image} alt={dish.name} />
    <CardBody>
        <CardTitle><b>{dish.name}</b></CardTitle>
        <CardText>{dish.description}</CardText>
    </CardBody>
</Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const commentItems = comments.map((comment) => (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author},{' '}
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    ));

    return (
      <div>
        <h4> <b>Comments</b></h4>
        <ul>{commentItems}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1 text-left">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1 text-left">
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;