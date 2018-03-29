const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Movie = React.createClass({
    render: function () {
        let link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
        let image = '';
        if (this.props.movie.Poster != 'N/A') {
            image = <img className="thumbnail img-responsive" src={this.props.movie.Poster} />;
        }
        return (
            <div className="well">
                <div className="row">
                    <div className="col-xs-4">
                        {image}
                    </div>
                    <div className="col-xs-8">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Type: {this.props.movie.Type}</li>
                            <li className="list-group-item">Year Released: {this.props.movie.Year}</li>
                            <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                        </ul>
                        <a className="btn btn-primary" target="_blank" href={link}>View on IMDB</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Movie;