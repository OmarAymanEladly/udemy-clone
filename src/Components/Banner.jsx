function Banner() {
  return (
    <div 
      className="banner"
      style={{
        backgroundImage: `url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="banner-overlay">
        <div className="banner-container">
          <div className="banner-content">
            <div className="offer-badge">
              <span>New-learner offer | Courses from E£269.99</span>
              <span className="timer">Ends in 5h 56m 33s</span>
            </div>
            <h1>Jump into learning – for less</h1>
            <p>If you're new to Udemy, we've got good news: For a limited time, courses start at just E£269.99 for new learners!</p>
            <button className="cta-button">Sign up now</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Banner;