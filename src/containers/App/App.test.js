import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import App from './';

Enzyme.configure({ adapter: new Adapter() });

const result = shallow(<App />);

describe('App component: ', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test('Should have 1 Feed component', () => {
        expect(result.find('Feed')).toHaveLength(1);
    });
});
