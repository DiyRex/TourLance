import '../styles/notfound.css'
import SeegiriyaAnimate from '../assets/animate-sigitiya.png'
import Nav from '../components/nav';

export default function NotFound () {
    return(
        <figure>
            <div className="nav-fix">
            <Nav />
            </div>
            <div><img className='animate-img' src={SeegiriyaAnimate} alt="" /></div>
            
            <h1 className='error'>Error 404</h1>
            <h2>Page Not Found</h2>
        </figure>
    )
}
