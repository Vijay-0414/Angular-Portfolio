// This file will replace environment.ts during production build
export const environment = {
  production: true,  // important for Angular to know it's prod
  apiUrl: 'https://us-central1-junkielabs-57977.cloudfunctions.net/apiPortfolio',  // same as dev or prod API if different
  recaptcha: '6Lci95YiAAAAAOfkpaWwNSHiX5Ye7KT9ZOw-HYCv'  // same key or prod key if different
};
