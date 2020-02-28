import axios from "axios";

class ImdbServices {
  async getMovies(loadCount) {
    return await axios
      .get(process.env.REACT_APP_API_URL + `movies?page=${loadCount}`)
      .then(function({ data }) {
        return data.results;
      })
      .catch(function(error) {
        return error;
      });
  }

  async searchMovies(param) {
    return await axios
      .get(process.env.REACT_APP_API_URL + `search?movie=${param}`)
      .then(function({ data }) {
        return data.results;
      })
      .catch(function(error) {
        return error;
      });
  }

  async getGenre(param) {
    return await axios
      .get(process.env.REACT_APP_API_URL + `genre/${param}`)
      .then(function({ data }) {
        return data.genre;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default new ImdbServices();
