async function exchangeCode(code) {
  const response = await fetch('https://your-netlify-site.netlify.app/.netlify/functions/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code: code,
      redirect_uri: 'http://localhost:3000/callback' // OR your Netlify redirect URL
    }),
  });

  const data = await response.json();
  console.log('Token response:', data);

  if (data.access_token) {
    alert("Login successful!");
    // Optionally redirect to a protected page
    // window.location.href = "dashboard.html";
  } else {
    alert("Login failed. Please try again.");
  }
}

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
  exchangeCode(code);
} else {
  console.error("No code found in URL");
}