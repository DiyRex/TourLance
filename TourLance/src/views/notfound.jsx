import '../styles/notfound.css'
import SeegiriyaAnimate from '../assets/animate-sigitiya.png'

export default function NotFound () {
    return(
        <figure>
            <div><img className='animate-img' src={SeegiriyaAnimate} alt="" /></div>
            
            <h1 className='error'>Error 404</h1>
            <h2>Page Not Found</h2>
        </figure>
    )
}
