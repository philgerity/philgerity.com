export const generateSchemaMarkup = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Phil Gerity',
    jobTitle: 'Product Leader',
    description: 'Product leader at Microsoft, focused on Windows 365 and Azure Virtual Desktop. MIT Sloan MBA graduate and experienced technology innovator.',
    url: 'https://philgerity.com',
    image: '/phil-gerity.jpg',
    sameAs: [
      'https://www.linkedin.com/in/philgerity/',
      'https://github.com/philgerity',
      'https://x.com/philgerity'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'MIT Sloan School of Management',
      url: 'https://mitsloan.mit.edu/'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Microsoft',
      url: 'https://www.microsoft.com',
      sameAs: [
        'https://www.linkedin.com/company/microsoft/',
        'https://twitter.com/Microsoft'
      ]
    },
    knowsAbout: [
      'Product Management',
      'Cloud Computing',
      'Windows 365',
      'Azure Virtual Desktop',
      'Technology Innovation'
    ]
  };

  return JSON.stringify(schema);
};