import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Schedules extends Component {
  state = {
    schedules: [],
    modal: false
  };

  componentDidMount() {
    this.loadSchedules();
  }

  loadSchedules = () => {
    API.getSchedules()
      .then(res => this.setState({ schedules: res.data }))
      .catch(err => console.log(err));
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
 
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>2019 Schedule Info</h1>
        </Jumbotron>
        {this.state.schedules.length ? (
          <List>
            {this.state.schedules.map(schedule => (
              <ListItem key={schedule._id}>
                {/* add modal */}
                <Button color="danger" onClick={this.toggle.bind(this)}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
                  <ModalHeader toggle={this.toggle.bind(this)}>Game Information</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle.bind(this)}>OK</Button>{' '}
                    
                  </ModalFooter>
                </Modal>
                
                {/* <a href={"/books/" + schedule._id}> */}
                <strong>
                  {schedule.date} and {schedule.opponent}
                </strong>
                {/* </a> */}
                {/* <DeleteBtn /> */}
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>Weekly game information</h3>
          )}
      </Container>
    );
  }
}

export default Schedules;
