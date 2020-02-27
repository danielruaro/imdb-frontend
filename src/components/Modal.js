import React from "react";
import '../modal.css'

export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        const { describeMovie } = this.props
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <div className="modal-content">{this.props.children}
                    <button className="modal-button" onClick={this.onClose}>X</button>
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div className="h-20 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: describeMovie.poster_path ? `url('https://image.tmdb.org/t/p/w200/${describeMovie.poster_path}` : "url('https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png')" }}>
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">{describeMovie.title}</div>
                                <p className="text-gray-700 text-base">{describeMovie.overview}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Release Date</p>
                                    <p className="text-gray-600">{describeMovie.release_date}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Genres</p>
                                    <p className="text-gray-600">{this.props.genres.map(genre => ` ${genre} `)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="actions">
                    <button className="toggle-button" >
                        close
          </button>
                </div>
            </div>
        );
    }
}