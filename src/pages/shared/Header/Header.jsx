import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center my-12'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[18px] my-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;