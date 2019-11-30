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
	];

	const appComponent = shallow(<App />);
	appComponent.setState({ players });
	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

	onScoreUpdate(0, 5);
	
	const playersAfterUpdate = appComponent.state('players');
	
	playersAfterUpdate[0].score;

	expect(playersAfterUpdate[0].score).toEqual(10);
});

it('shoud add new player to aplication state', () => {
	const appComponent = shallow(<App />);
	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

	onPlayerAdd('Ania');

	const players = appComponent.state('players');

	expect(players.length).toEqual(1);
	expect(players[0].name).toEqual('Ania');
	expect(players[0].score).toEqual(0);
});

it ('shouls remove player from player list', () => {
	const appComponent = shallow(<App />);

	const players = [
		{
			name: 'Kunegunda',
			score: 5
		},
		{
			name: 'Antoś',
			score: 0
		}
	];

	appComponent.setState({players});

	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');

	onPlayerRemove(0)

	const playerListNow = appComponent.state('players');

	expect(playerListNow.length).toEqual(1);
	expect(playerListNow[0].name).toEqual('Antoś');
	expect(playerListNow[0].score).toEqual(2);
});