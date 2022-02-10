
import renderer from 'react-test-renderer';
import LoginComponent from '../login';


test('Renders correctly', () => {
    const tree = renderer.create(<LoginComponent />).toJSON()
    expect(tree).toMatchSnapshot()
})