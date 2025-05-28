import { Lucia } from "lucia";
import { customSQLiteAdapter } from "./sqlite-adapter.js";

export const lucia = new Lucia(customSQLiteAdapter(), {
  sessionCookie: {
    name: "session",
    attributes: {
      secure: false, // set to true in production
    },
  },
  getUserAttributes: (user) => {
  if (!user || !user.username) {
    console.warn("⚠️ Invalid user in getUserAttributes:", user);
    throw new Error("User not found");
  }

  return {
    username: user.username,
  };
}
});

export const validateRequest = async (req) => {
  const sessionId = req.cookies?.session || null;
  if (!sessionId) return { user: null, session: null };

  const session = await lucia.validateSession(sessionId);
  if (!session) return { user: null, session: null };

  return session;
};






/*
import { Lucia } from "lucia";

export const lucia = new Lucia({
	sessionCookie: {
		name: "auth_session",
		attributes: {
			secure: false // set to true if using HTTPS in production
		}
	},
	getUserAttributes: (user) => {
		return {
			githubId: user.github_id,
			username: user.username
		};
	}
});
*/