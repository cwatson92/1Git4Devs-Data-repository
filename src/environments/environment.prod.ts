export let APIURL = '';

switch (window.location.hostname) {
  case 'https://cashflowfinances.herokuapp.com':
    APIURL += 'https://cashflowfinances.azurewebsites.net';
    break;
  default:
    APIURL += 'https://cashflowfinances.azurewebsites.net';

}

export const environment = {
  production: true
};
