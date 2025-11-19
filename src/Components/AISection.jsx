import { FaLightbulb, FaTrophy, FaStar, FaComments } from 'react-icons/fa';

function AICareerSection() {
  return (
    <div className="ai-career-section">
      <div className="container">
        <div className="ai-career-content">
          <div className="ai-text">
            <h1>Reimagine your career in the AI era</h1>
            <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
            
            <div className="ai-features-grid">
              <div className="feature-row">
                <div className="ai-feature-item">
                  <FaLightbulb className="feature-icon" />
                  <span>Learn AI and more</span>
                </div>
                <div className="ai-feature-item">
                  <FaTrophy className="feature-icon" />
                  <span>Prep for a certification</span>
                </div>
              </div>
              <div className="feature-row">
                <div className="ai-feature-item">
                  <FaComments className="feature-icon" />
                  <span>Practice with AI coaching</span>
                </div>
                <div className="ai-feature-item">
                  <FaStar className="feature-icon" />
                  <span>Advance your career</span>
                </div>
              </div>
            </div>
            
            <div className="pricing-section">
              <button className="learn-more-btn">Learn more</button>
              <div className="pricing">
                <span className="price-text">Starting at E£1,294,300/month</span>
              </div>
            </div>
          </div>
          
          <div className="ai-image">
            <img 
              src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp" 
              alt="AI Career Development" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AICareerSection;