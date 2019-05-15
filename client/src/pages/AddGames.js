import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { withRouter} from "react-router-dom";

class AddGames extends Component {
  state = {
    date: "",
    opponent: "",
    location: "",
    startTime: "",
    snackFamily: "",
    addInfo: ""
  };
  componentDidMount() {
    this.loadAddGames();
  }
  loadAddGames = () => {
    API.getAddGames()
      .then(res =>
        this.setState({ date: "", opponent: "", location: "", startTime: "", snackFamily: "", addInfo: "" })
      )
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.date && this.state.opponent && this.state.location && this.state.startTime) {
      API.saveAddGames({
        date: this.state.date,
        opponent: this.state.opponent,
        location: this.state.location,
        startTime: this.state.startTime,
        snackFamily: this.state.snackFamily,
        addInfo: this.state.addInfo
      })
        // .then(res => console.log(res))
        .then(() => this.props.history.push("/"))

        .catch(err => console.log(err));
    }
  };
  render() {
    console.log(this.state)
    return (
      <Container fluid>
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
      </Container>
    );
  }

}
export default withRouter(AddGames);