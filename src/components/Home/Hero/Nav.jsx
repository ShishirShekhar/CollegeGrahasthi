import { Link } from 'react-router-dom';
import whiteLogo from '../../../img/whiteLogo.png';
import Button from '../../Button';

const Nav = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <img src={whiteLogo} alt="CG-White-Logo" className="h-20 mb-4 md:mb-0" />
            <div className='flex justify-center md:justify-start space-x-4 mb-4 md:mb-0'>
                <Link to="/other">Solutions</Link>
                <Link to="/other">Company</Link>
                <Link to="/other">Rooms</Link>
                <Link to="/other">Contact us</Link>
            </div>
            <div className='w-full flex justify-center md:w-auto'>
                <Button value="Sign up" to="/other" />
            </div>
        </div>
    )
}

export default Nav;
