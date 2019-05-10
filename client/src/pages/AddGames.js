import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class AddGames extends Component {
  state = {
    date: { type: Date, required: true },
    opponent: "",
    location: "",
    startTime: { type: Number, required: true },
    snackFamily: "",
    addInfo: ""
  };
  componentDidMount() {
    this.loadAddGames();
  }
  loadAddGames = () => {
    API.getAddGames()
      .then(res =>
        this.setState({ date: res.data, opponent: "", location: "", startTime: "", snackFamily: "", addInfo: "" })
      )
      .catch(err => console.log(err));
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.date && this.state.opponent && this.state.location && this.state.startTime) {
      API.saveAddGame({
        date: this.state.date,
        opponent: this.state.opponent,
        location: this.state.location,
        startTime: this.state.startTime,
        snackFamily: this.state.snackFamily,
        addInfo: this.state.addInfo
      })
        .then(res => this.AddGames())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>adding game info</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <Input
                value={this.state.opponent}
                onChange={this.handleInputChange}
                name="opponent"
                placeholder="Opponent (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <Input
                value={this.state.startTime}
                onChange={this.handleInputChange}
                name="startTime"
                placeholder="Start Time (required)"
              />
              <Input
                value={this.state.snackFamily}
                onChange={this.handleInputChange}
                name="snackFamily"
                placeholder="Snack Family (required)"
              />
              <TextArea
                value={this.state.addInfo}
                onChange={this.handleInputChange}
                name="addInfo"
                placeholder="Additional Information (Optional)"
              />
              <FormBtn
                disabled={!(this.state.date && this.state.opponent && this.state.location && this.state.startTime)}
                onClick={this.handleFormSubmit}
              >
                Submit Game Information
                  </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    ); 
  }

}
export default AddGames;