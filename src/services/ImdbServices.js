import axios from 'axios'

const url = 'http://localhost:3001/'

class ImdbServices {

    async getMovies(loadCount) {
        return await axios.get(url + `movies?page=${loadCount}`)
            .then(function ({ data }) {
                return data.results
            })
            .catch(function (error) {
                return error
            })
    }

    async searchMovies(param) {
        return await axios.get(url + `search?movie=${param}`)
            .then(function ({ data }) {
                return data.results
            })
            .catch(function (error) {
                return error
            })
    }

    async getGenre(param) {
        return await axios.get(url + `genre/${param}`)
            .then(function ({ data }) {
                return data.genre
            })
            .catch(function (error) {
                return error
            })
    }
}

export default new ImdbServices()