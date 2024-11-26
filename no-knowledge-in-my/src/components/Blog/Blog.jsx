import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title, cover, author, author_img, reading_time, } = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'> 
                <div>
                    <img src={author_img} alt="" />
                </div>
                <div>
                    <span>{reading_time}</span>
                </div>
            </div>

           <h2 className="text-4xl">{title}</h2>
           
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;