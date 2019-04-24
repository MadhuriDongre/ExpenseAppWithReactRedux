import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import dotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adaptor()
});
dotEnv.config({ path:'.env.test'});
