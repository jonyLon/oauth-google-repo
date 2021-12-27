require('dotenv').config({ path: 'secret.env' })
const queryString = require('query-string')
const fs = require('fs');
const express = require('express');
const app = express();
const { google } = require('googleapis');
const axios = require('axios');
let ourData;

const stringifiedParams = queryString.stringify({
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URL,
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

google.options({ auth: oauth2Client });

const middleware = async (req, res, next) => {
  const { tokens } = await oauth2Client.getToken(req.query.code)
  console.log(tokens)
  const { data } = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
  });
  ourData = data
  console.log(ourData); // { id, email, given_name, family_name }

  next();
}

app.get('/', (req, res) => {
  res.redirect(googleLoginUrl)
})

app.get('/redirect-to-app', middleware, (req, res) => {
  res.end(`Hello ${ourData.name}`)
})
app.listen(3080)

