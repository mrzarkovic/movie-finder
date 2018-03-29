const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

const AppStore = assign({}, EventEmitter.prototype, {
    setMovieResults: function (movies) {
        _movies = movies;
    },

    getMovieResults: function () {
        return _movies;
    },
    
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    let action = payload.action;

    switch(action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            AppAPI.searchMovies(action.movie);
            break;
        case AppConstants.RECEIVE_MOVIE_RESULTS:
            AppStore.setMovieResults(action.movies);
            AppStore.emitChange();
            break;
    }

    return true;
});

module.exports = AppStore;