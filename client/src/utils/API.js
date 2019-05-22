import axios from "axios";

export default {
  // Gets all books
  getSchedules: function () {
    // return axios.get("/api/schedule");
    var token = localStorage.getItem('token')
    return axios.get("api/schedule", {
      headers: { Authorization: "Bearer " + token }
    })

  },
  // Gets the book with the given id
  getSchedule: function (id) {
    return axios.get("/api/schedule/" + id);
  },
  // Deletes the book with the given id
  deleteSchedules: function (id) {
    return axios.delete("/api/schedule/" + id);
  },
  // Saves a book to the database
  saveAddGames: function (scheduleData) {
    // return axios.post("/api/schedule", scheduleData);
    var token = localStorage.getItem('token')
    return axios.post("api/schedule", scheduleData, {
      headers: { Authorization: "Bearer " + token }
    })
  },
  getAddGames: function () {
    // return axios.get("/api/schedule");
    var token = localStorage.getItem('token')
    return axios.get("api/schedule", {
      headers: { Authorization: "Bearer " + token }
    })

  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    // return axios.post("/api/users", userData);
    var token = localStorage.getItem('token')
    return axios.post("/api/users", userData, {
      headers: { Authorization: "Bearer " + token }
    })
  },
  // Authenticates a user
  authenticateUser: function (userData) {
    // return axios.post("/auth/login", userData);
    var token = localStorage.getItem('token')
    return axios.post("/auth/login", userData, {
      headers: { Authorization: "Bearer " + token }
    })
  },
  // Sign up a user
  signUp: function (userData) {
    // return axios.post("/auth/signup", userData);
    var token = localStorage.getItem('token')
    return axios.post("/auth/signup", userData, {
      headers: { Authorization: "Bearer " + token }
    })
  }
};
