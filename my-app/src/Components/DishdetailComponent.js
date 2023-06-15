import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
          <CardBody>{dish.description}</CardBody>
        </CardImgOverlay>
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
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    ));

    return (
      <div>
        <h4>Comments</h4>
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
          <div className="col-12 col-md-4">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5">
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