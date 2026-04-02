export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api',
  jiraApiUrl: 'http://localhost:8081/api/jira',
  // Must match the Python FastAPI port (e.g. uvicorn main:app --port 8000)
  aiServiceUrl: 'http://localhost:8000',
  githubClientId:'Iv23linEBoVPLyPrWzIM',
  googleClientId:'468943423599-l1ab4c1429dmtbgak12l6qa96jupghrk.apps.googleusercontent.com',
  openAiEnabled: true,
  oauthRedirectBase: 'http://localhost:4200'
};
