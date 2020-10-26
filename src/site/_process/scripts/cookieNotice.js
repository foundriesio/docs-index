import 'cookieconsent';

window.cookieconsent.initialise(
  {
    palette: {
      popup: {
        background: '#237afc'
      },
      button: {
        background: '#fff',
        text: '#237afc'
      }
    },
    position: 'bottom-right',
    content: {
      target: '_blank',
      link: false,
      message: 'This website uses cookies as explained in our <a target=\'_blank\' href=\'https://foundries.io/company/privacy/\'>Privacy Policy</a><br>By clicking on the button below you agree to our <a target=\'_blank\' href=\'https://foundries.io/company/terms/\'>Terms and Conditions</a>, to our <a target=\'_blank\' href=\'https://foundries.io/privacy/\'>Privacy Policy</a>, and you consent to us using cookies accordingly<br>If you do not agree, do not proceed and/or disable cookies for our website',
      href: 'https://foundries.io/company/privacy/'
    }
  }
);
