import bcrypt from 'bcryptjs';
import { User, LoginCredentials, RegisterCredentials } from '../types/auth';

// In a real app, this would be in a database
let users: User[] = [];

const JWT_SECRET = 'your-secret-key'; // In production, use an environment variable

export const register = async (credentials: RegisterCredentials): Promise<User> => {
  const existingUser = users.find(
    (u) => u.username === credentials.username || u.email === credentials.email
  );

  if (existingUser) {
    throw new Error('Username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(credentials.password, 10);
  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    ...credentials,
    password: hashedPassword,
  };

  users.push(newUser);
  return newUser;
};

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const user = users.find((u) => u.username === credentials.username);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValid = await bcrypt.compare(credentials.password, user.password);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  // Instead of using jwt, we'll create a simple encoded token
  const token = btoa(JSON.stringify({
    userId: user.id,
    username: user.username,
    exp: Date.now() + 3600000 // 1 hour from now
  }));

  return token;
};

export const verifyToken = (token: string): any => {
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp < Date.now()) {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
};