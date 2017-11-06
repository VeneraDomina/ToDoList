import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import TaskList from './';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { tasks } = myProps;
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
    test('Should have <\TaskMaker> component ', () => {
        /*expect(result.find('section')).toHaveLength(1);*/
    });
});
