import React, { Component } from 'react';
import {Button,Modal , ModalHeader, ModalBody, FormGroup, Form, Label,Input,Row, Col} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length; 
const maxLength = (len)=>(val)=> !(val) || (val.length <= len);
const minLength = (len)=>(val)=> (val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
      super(props);
      this.state={
        isCommentModalOpen:false
      };

      this.toggleCommentModal=this.toggleCommentModal.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleCommentModal(){
      this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen

      });
    }

    handleSubmit(values) {
      
         this.props.addComment(this.props.dishId, values.rating, values.name, values.message);
    }

    render(){
      return(
          <React.Fragment>
                <Button outline onClick={this.toggleCommentModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader>
                    Submit Comment
                    <button type="button" class="close" onClick={this.toggleCommentModal} >&times;</button>

                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                <Control.select model=".rating" defaultValue="1" className="form-control" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                <Control.text model=".name" id="name" className="form-control" name="name" placeholder="Your Name"
                                                validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}/>
                                <Errors className="text-danger" model=".name" show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 numbers. ',
                                            maxLength: 'Must be 15 numbers or less. '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                <Control.textarea model=".message" id="comment" rows="6" className="form-control" name="message" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
      </React.Fragment>

      );
    }
    
  }

  export default CommentForm ;