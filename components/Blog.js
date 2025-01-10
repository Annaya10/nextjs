import Link from 'next/link';

const Blog = ({ blog }) => {
  return (
    <div className="col-lg-4">
      <div className="blog_blk">
        <div className="tag">{blog.tag}</div>
        <div className="image">
          <Link href={`/blog-detail/${blog.id}`}>
            <img
              src={blog.image}
              width={600}
              height={500}
              alt={blog.title}
            />
          </Link>
        </div>
        <div className="text">
          <h4>
            <Link href={`/blog-detail/${blog.id}`}>
              {blog.title}
            </Link>
          </h4>
          <div className="time">{blog.time}</div>
          <p>{blog.description}</p>
          <Link href={`/blog-detail/${blog.id}`} className="view_post">
            View Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
