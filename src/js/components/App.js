const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const SearchForm = require('./SearchForm');
const MovieResults = require('./MovieResults');

function getAppState () {
    return {
        movies: AppStore.getMovieResults()
    };
}

const App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function () {
        let movieResults = '';
        if (this.state.movies && this.state.movies.length) {
            movieResults = <MovieResults movies={this.state.movies} />;
        }
        return (
            <div>
                <SearchForm />
                {movieResults}
            </div>
        );
    },

    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;