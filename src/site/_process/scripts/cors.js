/* globals PRODUCTION */
let corsUrl;

if (PRODUCTION) {
  corsUrl = 'https://app.foundries.io/_c/og';
} else {
  corsUrl = 'http://localhost:9000/_c/og';
}

async function checkStatus() {
  const element = document.querySelector('a[data-login]');

  if (element) {
    const response = await window.fetch(corsUrl, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      referrerPolicy: 'origin-when-cross-origin'
    });

    if (response.status === 200) {
      element.innerText = 'My dashboard';
    } else {
      element.innerText = element.dataset.original || 'Login';
    }
  }
}

checkStatus().then().catch((err) => {
  console.error(err);

  const element = document.querySelector('a[data-login]');
  if (element) {
    element.innerText = element.dataset.original || 'Login';
  }
});
