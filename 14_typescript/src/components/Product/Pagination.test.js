import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('renders', () => {
	it(`render Product component without props`, () => {
		const component = shallow(<Pagination />);
		// by tag
		expect(component.find('Fragment')).toHaveLength(1);
		expect(component.find('div')).toHaveLength(2);
		expect(component.find('Link')).toHaveLength(3);
		expect(component.find('button')).toHaveLength(3);
		// by className
		expect(component.find('.productPagination')).toHaveLength(1);
	});

	it('match snapshot', () => {
		const component = shallow(<Pagination />);
		expect(component).toMatchSnapshot();
	});

});




