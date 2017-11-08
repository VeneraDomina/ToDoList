import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import FolderList from './';
import { spy } from 'sinon';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { folders, folderID } = myProps;
const result = shallow(
    <FolderList
        createFolder = { () => null }
        deleteAllFolders = { () => null }
        folderID = { folderID }
        folderList = { folders }
    />
);

describe('FoderList component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test('Should have 1 \'ol\' element', () => {
        expect(result.find('ol')).toHaveLength(1);
    });
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div')).toHaveLength(1);
    });
    test('Should have 1 FolderMaker component', () => {
        expect(result.find('FolderMaker').length).toBe(1);
    });
    test('Should have \'section\' with class folderList', () => {
        expect(result.find('section').hasClass('folderList'));
    });
    test('Should have \'ol\' with class folderMenu', () => {
        expect(result.find('ol').hasClass('folderMenu'));
    });
    test('Should have \'div\' with class button', () => {
        expect(result.find('div').hasClass('button'));
    });
});
