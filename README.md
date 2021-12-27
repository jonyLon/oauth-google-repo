# OAuth-Google-App

Hello everyone😋 This app created to help us with google OAuth2.0 on a server-side.
<p>If you don't familiar with the Google authorization process, I highly recommend reading the documentation for Node.js <a href="https://github.com/googleapis/google-api-nodejs-client#oauth2-client">here</a> and this awesome <a href="https://medium.com/authpack/easy-google-auth-with-node-js-99ac40b97f4c">article.</a></p>
Ok, if you feel ready let's define what we need to start this magical journey🤯:
<ul>
  <li>Go to the Google developer console: <a href="https://console.developers.google.com/apis/credentials">https://console.developers.google.com/apis/credentials</a>.</li>
  <li>Select or create a Google project.</li>
  <li>Navigate to the credentials page — in the left sidebar — and create an OAuth Client ID for Web application.</li>
  <li>Inside OAuth client ID add redirect URL. Google will redirect users to this route after they logged in.</li>
  <li>Navigate to the OAuth consent screen page — in the left sidebar, find the 'Test users' header, click Add User button and select the account that you want to use.</li>
  <li>Download the JSON with our client id, client secret, and redirect URL to be used later into the "secret.env" file.</li>
  <li>Put all those values from the list item above in the "secret.env" file.<li>
</ul>
Excellent, after we did that just type "npm start" in the terminal. 
<p>Switch to your browser, type "localhost:3080" and press Enter.</p>
Please, use the google account that we define in the section above.
<p>The Magic is happening....</p>
