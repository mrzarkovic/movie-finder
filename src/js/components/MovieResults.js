const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Movie = require('./Movie');

const MovieResults = React.createClass({
    render: function () {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                {this.props.movies.map(function (movie, i) {
                    return (
                        <Movie movie={movie} key={i} />
                    );
                })}
            </div>
        );
    }
});

module.exports = MovieResults;