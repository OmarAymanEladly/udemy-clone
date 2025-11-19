function TrustedCompanies() {
  const companies = [
    {
      name: "Cisco",
      logo: "https://logo.clearbit.com/cisco.com"
    },
    {
      name: "Vimeo", 
      logo: "https://logo.clearbit.com/vimeo.com"
    },
    {
      name: "Box",
      logo: "https://logo.clearbit.com/box.com"
    },
    {
      name: "Volkswagen",
      logo: "https://logo.clearbit.com/volkswagen.com"
    },
    {
      name: "Nvidia",
      logo: "https://logo.clearbit.com/nvidia.com"
    },
    {
      name: "Samsung",
      logo: "https://logo.clearbit.com/samsung.com"
    }
  ];

  return (
    <div className="trusted-companies">
      <div className="container">
        <h2>Trusted by over 17,000 companies and millions of learners around the world</h2>
        <div className="company-logos">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <img 
                src={company.logo} 
                alt={company.name}
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = company.name;
                  fallback.style.color = '#6a6f73';
                  fallback.style.fontWeight = 'bold';
                  fallback.style.fontSize = '14px';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedCompanies