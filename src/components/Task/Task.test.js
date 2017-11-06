import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Task from './';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { _id, task } = myProps;
const state = {
    isSelected: false
};
const mutatedState = {
    isSelected: true
};
const result = shallow(
    <Task
        _id = { _id }
        deleteTask = { () => null }
        editTask = { () => null }
        task = { task }
    />);

describe('Task component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test('Should have 1 \'ContentEditable\' component', () => {
        expect(result.find('ContentEditable')).toHaveLength(1);
    });
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div')).toHaveLength(1);
    });
    test('Should have 1 \'span\' element', () => {
        expect(result.find('span')).toHaveLength(1);
    });
    test('Should have initial state: false', () => {
        expect(result.state()).toEqual(state);
    });
    test('Should toggle state', () => {
        result.find('div').simulate('click');
        expect(result.state()).toEqual(mutatedState);
    });
});

