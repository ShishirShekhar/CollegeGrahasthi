import { Link } from 'react-router-dom';
import whiteLogo from '../../img/whiteLogo.png';
import Button from '../Button';

const Nav = () => {
    return (
        <div className='flex flex-row justify-between font-bold'>
            <img src={whiteLogo} alt="CG-White-Logo" className="h-28" />
            <div className='flex items-center w-2/3'>
                <div className='flex justify-evenly w-11/12 h-fit'>
                    <Link to="/other">Solutions</Link>
                    <Link to="/other">Company</Link>
                    <Link to="/other">Rooms</Link>
                    <Link to="/other">Contact us</Link>
                </div>
                <div className='w-3/12'>
                    <Button value="Sign up" />
                </div>
            </div>
        </div>
    )
}

export default Nav;
