import React from 'react';

class SearchInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            param: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({ param: event.target.value });
    }


    render() {
        return (
            <div className="flex m-20 justify-center" >
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input value={this.state.param} onChange={this.handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search movies" aria-label="Full name" />
                    <button onClick={() => this.props.handleSearchMovies(this.state.param)} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Search
                    </button>
                </div>
            </div>
        )
    }

}



export default SearchInput;
