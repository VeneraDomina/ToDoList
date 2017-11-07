import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, shallow } from 'enzyme';
import TaskList from './';
import TaskMaker from '../TaskMaker';
import Task from '../Task';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { tasks } = myProps;
const greeting = 'hello';
const result = render(
    <TaskList
        createTask = { () => null }
        deleteTask = { () => null }
        editTask = { () => null }
        tasks = { tasks }
    />);

describe('TaskList component:', () => {
    test('Should have 1 \'h1\' element', () => {
        expect(result.find('h1')).toHaveLength(1);
    });
    test('Should have 1 <\TaskMaker> component', () => {
        expect(result.find(TaskMaker).length).toBe(1);
    });

/*    test('Props tasks should be array ', () => {
        expect(result.props.type).toEqual('Array');
    });*/
});
