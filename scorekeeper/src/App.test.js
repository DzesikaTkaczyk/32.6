import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
	shallow(<App />)
});

it ('should update player score', () => {
	const players = [
	    {
	        name: 'Kunegunda',
	        score: 5
	    },
	    {
	        name: 'Antoś',
	        score: 0
	    }
	]

	appComponent.setState({ players });
	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

	onScoreUpdate(0, 5);
	
	const playersAfterUpdate = appComponent.state('players');
	
	playersAfterUpdate[0].score;

	expect(playersAfterUpdate[0].score).toEqual(10);
})

it('shoud add new player to aplication state', () => {
	//const onPlayerAdd = jest.fn();
	//const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Ania');
	const players = appComponent.state('players');

	expect(players.length).toEqual(1);
	expect(players[0].name).toEqual('Ania');
	expect(players[0].score).toEqual(0);
})