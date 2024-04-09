import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { title, image_url,details , _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                {
                    details.length?<p>{details.slice(0,200)}<Link to={`/news/${_id}`} className='text-blue-600 font-bold'>Read More ...</Link></p>: <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes={
    news:PropTypes.object.isRequired
}