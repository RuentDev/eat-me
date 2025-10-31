import { PostCard } from "..";
import "./customizableblogsection.css";

const CustomizableBlogSection = ({ title = "Title", data = [] }) => {
  return (
    <div className="blog-section">
      <div className="blog-header-container">
        <h3 className="blog-heading">New Arrival</h3>
        <img src="/images/chicken_itle_55x17.png" alt="" />
      </div>

      <div className="blog-card-container">
        {data.map((blog, index) => (
          <PostCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            username={blog.username}
            description={blog.description}
            day={blog.date.day}
            mmYYYY={blog.date.mmYYYY}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizableBlogSection;
