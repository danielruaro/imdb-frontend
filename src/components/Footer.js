import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div className="flex m-20 justify-center content-center">
                {this.props.movies.length > 0 ?
                    <button onClick={() => this.props.handleGetMovies(this.props.loadCount)} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Load More
                 </button>
                    : ''}

            </div>
        )
    }

}



export default Footer;
