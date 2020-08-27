import React from 'react'
import VoteButton from './VoteButton'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  votesCount: 40,
  handleVote: jest.fn(),
  alreadyUpvoted: false,
};

describe('VoteButton', () => {
  test('renders upvote button', () => {
    const wrapper = shallow(<VoteButton {...baseProps} />);
    expect(wrapper.find('UpvoteButton').length).toEqual(1);
    expect(wrapper.find('UpvoteButton').text()).toEqual('Pomocne\u00a0(40)');
  });

  test('renders upvoted button', () => {
    const upvotedProps = {
      ...baseProps,
      alreadyUpvoted: true
    };

    const wrapper = shallow(<VoteButton {...upvotedProps} />);
    expect(wrapper.find('UpvoteButton').length).toEqual(1);
    expect(wrapper.find('UpvoteButton').text()).toEqual('Pomogło\u00a0(40)');
  });

  test('match snapshot', () => {
    const wrapper = shallow(<VoteButton {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


