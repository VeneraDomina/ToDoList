import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import FolderList from './';
import { myProps } from '../../helpers/helperForTest';

Enzyme.configure({ adapter: new Adapter() });

const { folders } = myProps;
const result = render(
    <FolderList
        createFolder = { () => null }
        deleteAllFolders = { () => null }
        folderList = { folders }
    />);

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
    /*test('FolderList children of \'ol\' should be an array', () => {
        console.log('*******************', result.find('ol').children());
        expect(result.find('ol').children());
    });*/
});
