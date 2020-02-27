import React, { Fragment } from 'react';

class MovieCard extends React.Component {

    render() {
        const { movies } = this.props

        return (
            <Fragment>
                {(movies && movies.length !== 0) ?
                    <div className="flex flex-1 content-start flex-wrap h-64">
                        {movies.map((movie) => {
                            return (<div key={movie.id} className="w-1/4 max-w-md max-h-full lg:flex p-2 h-64">
                                <div className="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: movie.poster_path ? `url('https://image.tmdb.org/t/p/w200/${movie.poster_path}` : "url('https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png')" }}>
                                </div>
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-black font-bold text-xl mb-2">{movie.title.length > 25 ? (movie.title.substring(0, movie.title.length - 5) + "...") : movie.title}</div>
                                        <div className="text-black  text-xs mb-2">Release date: {movie.release_date}</div>

                                        <p className="hidden text-grey-darker text-base">{movie.overview}</p>
                                    </div>
                                    <button onClick={() => this.props.showModal(movie)} className="bg-blue-500 content-end hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" >See Details</button>
                                </div>
                            </div>)
                        })}
                    </div>
                    :
                    <div className="flex m-20 justify-center content-center">
                        <span>Nenhum resultado foi encontrado</span>

                    </div>
                }


            </Fragment>



        )
    }

}



export default MovieCard;
