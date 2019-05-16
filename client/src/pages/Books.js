import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from 'react-moment';


class Schedules extends Component {
  state = {
    schedules: [],
    modal: false,
    currentSchedule: {}
  };

  componentDidMount() {
    this.loadSchedules();
  }

  loadSchedules = () => {
    API.getSchedules()
      .then(res => this.setState({ schedules: res.data }))
      .catch(err => console.log(err));
  };
  deleteSchedules = id => {
    API.deleteSchedules(id)
      .then(res => this.loadSchedules())
      .catch(err => console.log(err));
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  handleScheduleModalOpen(data) {
    this.setState({currentSchedule: data})
    this.toggle()
  }
  convertTime(time){
    if (time > 1200){
      const currentTime=(time-1200)+"PM"
      console.log(currentTime)
      return currentTime
    } else {
      const currentTime=time+"AM"
      return currentTime
    }
    
  }
 
  render() {
    console.log(this.state.currentSchedule)
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Weekly PACA Volleyball Information</h1>
        </Jumbotron>
        {this.state.schedules.length ? (
          <List>
            {this.state.schedules.map(schedule => (
              <ListItem key={schedule._id}>
                {/* add modal */}
                <Button color="danger" onClick={()=>this.handleScheduleModalOpen(schedule)}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
                  <ModalHeader toggle={this.toggle.bind(this)}>Game Information</ModalHeader>
                  <ModalBody>                      
                   <li>Date:{' '} 
                    <Moment format="MM/DD/YYYY">
                      {this.state.currentSchedule.date}
                    </Moment>
                   </li> 
                   <li>Opponent: {this.state.currentSchedule.opponent}</li> 
                   <li>Location: {this.state.currentSchedule.location}</li>
                   <li>Start Time: {this.convertTime(this.state.currentSchedule.startTime)}</li>
                   <li>Snack Family: {this.state.currentSchedule.snackFamily}</li>
                   <li>Additional Information: {this.state.currentSchedule.addInfo}</li>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle.bind(this)}>OK</Button>{' '}
                    
                  </ModalFooter>
                </Modal>
                
                {/* <a href={"/books/" + schedule._id}> */}
                <strong>
                  {schedule.opponent}
                </strong>
                {/* </a> */}
                <DeleteBtn onClick={() => this.deleteSchedules(schedule._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3> </h3>
          )}
      </Container>
    );
  }
}

export default Schedules;
