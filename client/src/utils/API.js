import axios from "axios";

export default {
  // Gets all books
  getSchedules: function() {
    return axios.get("/api/schedule");
  },
  // Gets the book with the given id
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveAddGames: function(scheduleData) {
    return axios.post("/api/schedule", scheduleData);
  },
  getAddGames: function() {
    return axios.get("/api/schedule");
  }
};
