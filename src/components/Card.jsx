import './Card.css'

export default function Card({ imagepath, itemname, english, category, website }) {
    return (
        <>
            <div className='card'>
                <img src={imagepath} alt='image not showing' className='img'/>
                <p className='heading'>{itemname}</p>
                <p className='subheading'>{english}</p>
                <p className='para'>{category}</p>
                <a href={website} target="_blank" rel="noopener noreferrer">
                    <button className='button'>Explore</button>
                </a>
                 
            </div>
        </>
    )
}