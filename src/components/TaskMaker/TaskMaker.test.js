import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import TaskMaker from './';

Enzyme.configure({ adapter: new Adapter() });
const message = 'Hello';
const state = {
    taskValue: ''
};
const mutatedState = {
    taskValue: message
};
const result = shallow(
    <TaskMaker createTask = { () => null } />
);

describe('TaskMaker component: ', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test('Should have 1 \'form\' element', () => {
        expect(result.find('form')).toHaveLength(1);
    });
    test('Should have 2 \'input\' element', () => {
        expect(result.find('input')).toHaveLength(2);
    });
    test('Should have initial state', () => {
        expect(result.state()).toEqual(state);
    });
    test('input value should be empty initially', () => {
        expect(result.find('input[type="text"]').text()).toBe('');
    });
    test('input value should be \'Add\'', () => {
        expect(result.find('input[type="submit"]').props().value).toBe('Add');
    });
    test('Component state should reflect according changes if any text input provided', () => {
        result.find('input[type="text"]').simulate('change', {
            target: {
                value: message
            }
        });
        expect(result.state()).toEqual(mutatedState);
    });
    test('Component input should reflect according changes if any text input provided', () => {
        result.find('input[type="text"]').simulate('change', {
            target: {
                value: message
            }
        });
        expect(result.find('input[type="text"]').props().value).toBe(message);
    });
    test('Component state  should reflect according changes if the form submitted', () => {
        result.find('form').simulate('submit', { preventDefault() {} });
        expect(result.state()).toEqual(state);
    });
    test('Component input  should reflect according changes if the form submitted', () => {
        result.find('form').simulate('submit', { preventDefault() {} });
        expect(result.find('input[type="text"]').text()).toBe('');
    });
});
