import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import Feed from './';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const result = shallow(<Feed />);
const resultMount = mount(<Feed />);

describe('Feed component:', () => {
    test('Should have 1 \'section\' element with class feed', () => {
        expect(result.find('section').hasClass('feed'));
    });
    test('Should have 1 FolderList component', () => {
        expect(result.find('FolderList')).toHaveLength(1);
    });
    test('Should have 1 TaskList component', () => {
        expect(result.find('TaskList')).toHaveLength(1);
    });
    test('Feed componentDidMount should be called once', () => {
        const componentDidMountSpy = spy(Feed.prototype, 'componentDidMount');

        expect(componentDidMountSpy.calledOnce).toBe(true);
    });
});
