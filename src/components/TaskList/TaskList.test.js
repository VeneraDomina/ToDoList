import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TaskList from './';
import TaskMaker from '../TaskMaker';
import Task from '../Task';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { tasks } = myProps;
const result = shallow(
    <TaskList
        createTask = { () => null }
        deleteTask = { () => null }
        editTask = { () => null }
        tasks = { tasks }
    />);

describe('TaskList component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test('Should have 1 \'h1\' element', () => {
        expect(result.find('h1')).toHaveLength(1);
    });
    test('Should have 2 Task component', () => {
        expect(result.find('Task').length).toBe(result.find('Task').length);
    });
    test('Should have 1 TaskMaker component', () => {
        expect(result.find('TaskMaker').length).toBe(1);
    });
    test('Should have \'section\' with class taskList', () => {
        expect(result.find('section').hasClass('taskList'));
    });
    test('Should contain hello in h1', () => {
        expect(result.find('h1').text()).toBe('Let\'s do this!');
    });
    test('Should have Transition', () => {
        expect(result.find('Transition')).toHaveLength(tasks.length + result.find('TaskMaker').length);
    });
});
