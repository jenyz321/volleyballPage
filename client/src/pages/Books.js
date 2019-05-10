import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Schedules extends Component {
  state = {
    schedules: []
  };

  componentDidMount() {
    this.loadSchedules();
  }

  loadSchedules = () => {
    API.getSchedules()
      .then(res => this.setState({ schedules: res.data }))
      .catch(err => console.log(err));
  };

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
                    <a href={"/books/" + schedule._id}>
                      <strong>
                        {schedule.date} and {schedule.opponent}
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Click on the game to see the details</h3>
            )}
        
      
      </Container>
    );
  }
}

export default Schedules;
