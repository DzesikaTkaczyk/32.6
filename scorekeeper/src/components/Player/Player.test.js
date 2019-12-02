import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

describe('Player tests', () => {
	it('renders without crashing', () => {
	  shallow(<Player />);
	});

	it('renders correct name', () => {
	  const playerNamePassed = 'Ania';
	  const playerComponent = shallow(<Player name={playerNamePassed} />);

	  const playerNameRendered = playerComponent.find('.Player__name').text();

	  expect(playerNameRendered).toEqual(playerNamePassed);
	});

	it('renders correct score', () => {
	  const playerScorePassed = 5;
	  const playerComponent = shallow(<Player name={playerScorePassed} />);

	  const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

	  expect(playerScoreRendered).toEqual(playerScorePassed);
	});

	//interaction tests
	it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
		const mockedOnPlayerScoreChange = jest.fn();
		const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

		const plusButton = Number(playerComponent.find('.Player__button').first);

		plusButton.simulate('click');

		expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
	});

	it('should call onPlayerScoreChange with -1 when plus button is clicked', () => {
		const mockedOnPlayerScoreChange = jest.fn();
		const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

		const minusButton = Number(playerComponent.find('.Player__button').at(1));

		minusButton.simulate('click');
		
		expect(mockedOnPlayerScoreChange).toBeCalledWith(- 1);
	});

	it('should call onPlayerRemove when romove button is clicked', () => {
		const mockedOnRemovePlayer = jest.fn();
		const playerComponent = shallow(<Player onPlayerRemove={mockedOnRemovePlayer} />);
		
		const removeButton = playerComponent.find('.Player__button').last();

		removeButton.simulate('click');

		expect(mockedOnRemovePlayer).toBeCalled()
	});
});