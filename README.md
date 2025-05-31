# Lucia Auth Template

A secure authentication template using Lucia, Express, and GitHub OAuth, with 2FA via email powered by Mailtrap for development and testing.

## Features

- **GitHub OAuth login**
- **Session management with Lucia**
- **Two-factor authentication via email (using Mailtrap for testing)**
- **SQLite database for users and sessions**
- **Customizable and secure**

## Project Structure

```
lucia-auth-template/
├── public/
│ ├── index.html
│ └── styles.css
├── server.js
├── email.js
├── auth.js
├── db.js
├── auth-utils.js
├── sqlite-adapter.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

## Setup Instructions

1. **Create a new repository from this template**
   - Go to the main page of this repository.
   - Click the **"Use this template"** button.
   - Fill in the details for your new repository (name, description, visibility).
   - Click **"Create repository from template"**.
2. **Clone your new repository**
   ```
   git clone https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
   cd YOUR-NEW-REPO
   ```
4. **Install dependencies**
   ```
   npm install
   ```
6. **Set up Mailtrap for email delivery in development**
   - Sign up for a free Mailtrap account at [mailtrap.io](https://mailtrap.io/).
   - **Go to the "Email Testing"** section and create a new inbox.
   - Copy the SMTP credentials (host, port, username, password) from your inbox settings.
7. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Use the following template and replace the values with your own:
  
    ```
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    SESSION_SECRET=a_random_secret_string
    PORT=3000
    NODE_ENV=development
    EMAIL_HOST=smtp.mailtrap.io
    EMAIL_PORT=2525
    EMAIL_USER=your_mailtrap_username
    EMAIL_PASSWORD=your_mailtrap_password
    ```
   - **Note:** Do not commit your `.env` file to Git for security reasons.
8. **Start the server**
   node server.js
   - The app will be available at `http://localhost:3000`.

## Using Mailtrap

Mailtrap is used in this project to send 2FA verification codes via email during the authentication flow for **testing and debugging purposes only**. The `email.js` file is configured to use Mailtrap’s SMTP server, making it easy to preview and verify emails in development.

**Note:**  
Mailtrap’s Email Sandbox is designed **only for testing**—emails are not sent to real users’ inboxes, but are captured and displayed in your Mailtrap inbox for inspection.  
**For production, you should replace Mailtrap’s SMTP settings in your `.env` file with your own email provider’s credentials.**

## Files Ignored by Git

Some files are intentionally excluded from version control for security and convenience. Here’s what you need to know:

- **`.env` and `.env.local`**: Store sensitive configuration. You must create your own `.env` file as described above.
- **`*.db` and `auth.db`**: SQLite database files. They will be generated automatically when you run the app.
- **`node_modules/`**: Contains installed dependencies. It is recreated when you run `npm install`.
- **`*.log` and `npm-debug.log*`**: Log files generated during development.
- **`.DS_Store`, `Thumbs.db`**: System files (macOS/Windows).
- **`.vscode/`, `.idea/`**: IDE-specific settings.

**You do not need to manually create any of these files or folders except for `.env`.**

## Usage

1. **Open `http://localhost:3000` in your browser.**
2. **Click "Login with GitHub" to start the authentication flow.**
3. **Complete 2FA by entering the code sent to your Mailtrap inbox.**
4. **Access the dashboard after successful authentication.**


## Troubleshooting

- **If you see errors about missing `.env` variables:** Double-check that your `.env` file is present and correctly formatted.
- **If you have database issues:** Make sure the app has write permissions in the project directory.
- **If emails are not sent:** Verify your Mailtrap credentials in `.env` and check your Mailtrap inbox for errors.

**Enjoy building secure applications with Lucia and Mailtrap!**
  
