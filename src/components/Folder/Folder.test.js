import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Folder from './';
import { myProps } from '../../helpers/helperForTest';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const { _id, folder, folderID } = myProps;
const state = { value: '1111' };
const result = shallow(
    <Folder
        _id = { _id }
        deleteFolder = { () => null }
        editFolder = { () => null }
        folder = { folder }
        folderID = { folderID }
        selectedFolder = { () => null }
    />
);

describe('Folder component:', () => {
    test('Should have 1 \'li\' element', () => {
        expect(result.find('li')).toHaveLength(1);
    });
    test('Should have 1 \'ContentEditable\' element', () => {
        expect(result.find('ContentEditable')).toHaveLength(1);
    });
    test('Should have 1 \'span\' element', () => {
        expect(result.find('span')).toHaveLength(1);
    });
    test('Componenet Folder should be a list element', () => {
        expect(result.type()).toBe('li');
    });
    /*test('Componenet ContentEditable should have class \'contentValue\'', () => {
        expect(result.find('ContentEditable').hasClass('Styles.contentValue')).toBe(true);
    });*/
    test('FolderID should be equal _id', () => {
        result.find('li').simulate('click');
        expect(result.props.folderID).toEqual(result.props._id);
    });
    test('shouldComponenetUpdate should called once', () => {
        const shouldComponentUpdateSpy = spy(Folder.prototype, 'shouldComponentUpdate');

        result.setState(() => ({
            value: '2222'
        }));
        expect(shouldComponentUpdateSpy.calledOnce).toBe(true);
        shouldComponentUpdateSpy.reset();
    });
});
