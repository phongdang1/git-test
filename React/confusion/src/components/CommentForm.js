import React, { Component } from "react";
import { Control, LocalForm } from "react-redux-form";
import {
  Button,
  Form,
  Input,
  FormFeedback,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

export class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: "",
      name: "",
      comment: "",
      isModalOpen: false,
      validated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleInputChange(values) {
    const { rating, name, comment } = values;

    this.setState({
      rating: rating ?? "",
      name: name ?? "",
      comment: comment ?? "",
    });
  }

  handleSubmit(values, event) {
    this.setState({
      validated: true,
    });

    const { rating, name, comment } = this.validate(this.state);

    if (rating.length + name.length + comment.length === 0) {
      alert(JSON.stringify(this.state));
      this.setState({
        rating: "",
        name: "",
        comment: "",
        validated: false,
      });
    }
  }

  validate({ rating, name, comment }) {
    const errors = {
      rating: "",
      name: "",
      comment: "",
    };

    if (rating.length === 0) {
      errors.rating = "Must be write rating";
    }
    if (rating < 0) {
      errors.rating = "Must be greater than 0";
    }
    if (rating > 10) {
      errors.rating = "Must be less than 10";
    }

    if (name.length < 3) {
      errors.name = "Must be greater than 2 characters";
    }
    if (name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (comment.trim().length === 0) {
      errors.comment = "Must be write comment";
    }

    return errors;
  }

  render() {
    const errors = this.validate(this.state);

    return (
      <>
        <Button outline variant="secondary" onClick={this.toggleModal}>
          <i className="fa fa-pencil mr-2"></i>Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={this.handleSubmit}
              onChange={this.handleInputChange}
              component={Form}
              validate={false}
              noValidate
              method="post"
            >
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Control.input
                  component={Input}
                  type="number"
                  model=".rating"
                  id="rating"
                  name="rating"
                  valid={this.state.validated && errors.rating === ""}
                  invalid={this.state.validated && errors.rating !== ""}
                ></Control.input>
                <FormFeedback>{errors.rating}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your name</Label>
                <Control.text
                  model=".name"
                  component={Input}
                  valid={this.state.validated && errors.name === ""}
                  invalid={this.state.validated && errors.name !== ""}
                  id="name"
                  name="name"
                  className="form-control"
                ></Control.text>
                <FormFeedback>{errors.name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  type="textarea"
                  component={Input}
                  valid={this.state.validated && errors.comment === ""}
                  invalid={this.state.validated && errors.comment !== ""}
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="10"
                  className="form-control"
                ></Control.textarea>
                <FormFeedback>{errors.comment}</FormFeedback>
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentForm;