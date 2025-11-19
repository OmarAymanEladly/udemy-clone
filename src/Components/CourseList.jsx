import { courses } from "../data/Courses";
import { useState } from 'react';

function CourseList() {
  const [imageErrors, setImageErrors] = useState({});

  const getCourseIcon = (courseTitle) => {
    const title = courseTitle.toLowerCase();
    if (title.includes('ai') && title.includes('engineer')) return 'fas fa-robot';
    if (title.includes('ai agents')) return 'fas fa-brain';
    if (title.includes('ai foundations')) return 'fas fa-microchip';
    if (title.includes('salesforce')) return 'fas fa-cloud';
    if (title.includes('react')) return 'fab fa-react';
    if (title.includes('python')) return 'fab fa-python';
    return 'fas fa-laptop-code';
  };

  const getCourseColor = (courseTitle) => {
    const title = courseTitle.toLowerCase();
    if (title.includes('ai engineer')) return '#667eea';
    if (title.includes('ai agents')) return '#f093fb';
    if (title.includes('ai foundations')) return '#4facfe';
    if (title.includes('salesforce')) return '#00b09b';
    if (title.includes('react')) return '#5624d0';
    if (title.includes('python')) return '#ff7e5f';
    return '#a8edea';
  };

  const handleImageError = (courseId) => {
    setImageErrors(prev => ({
      ...prev,
      [courseId]: true
    }));
  };

  return (
    <div className="course-section">
      <div className="container">
        <h2>Skills to transform your career and life</h2>
        <p>From critical skills to technical topics, Udemy supports your professional development.</p>
        
        <div className="categories">
          {["Artificial Intelligence (AI)", "Python", "Microsoft Excel", "AI Agents & Agentic AI", "Digital Marketing", "Amazon AWS"].map((category, index) => (
            <span key={index} className="category-tag">{category}</span>
          ))}
        </div>
        
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="image-container">
                {imageErrors[index] ? (
                  <div 
                    className="course-image-placeholder"
                    style={{ backgroundColor: getCourseColor(course.title) }}
                  >
                    <i className={getCourseIcon(course.title)}></i>
                  </div>
                ) : (
                  <img 
                    src={course.image} 
                    alt={course.title}
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <p className="instructor">{course.instructor}</p>
                <div className="rating">
                  <span className="stars">{"★".repeat(Math.floor(course.rating))}</span>
                  <span className="rating-value">{course.rating}</span>
                  <span className="reviews">({course.reviews} ratings)</span>
                </div>
                <div className="price">E£{course.price}</div>
                {course.bestseller && <span className="bestseller">Bestseller</span>}
              </div>
            </div>
          ))}
        </div>
        
        <button className="show-all-btn">Show all Artificial Intelligence (AI) courses →</button>
      </div>
    </div>
  );
}

export default CourseList;