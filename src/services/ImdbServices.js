import axios from "axios";

const url =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:3001/"
    : process.env.REACT_APP_API_URL;

class ImdbServices {
  async getMovies(loadCount) {
    return await axios
      .get(url + `movies?page=${loadCount}`)
      .then(function({ data }) {
        return data.results;
      })
      .catch(function(error) {
        return error;
      });
  }

  async searchMovies(param) {
    return await axios
      .get(url + `search?movie=${param}`)
      .then(function({ data }) {
        return data.results;
      })
      .catch(function(error) {
        return error;
      });
  }

  async getGenre(param) {
    return await axios
      .get(url + `genre/${param}`)
      .then(function({ data }) {
        return data.genre;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default new ImdbServices();
