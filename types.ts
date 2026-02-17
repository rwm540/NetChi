export enum AppView {
  HOME = 'HOME',
  AUTH = 'AUTH',
  PROFILE = 'PROFILE',
  USERS = 'USERS'
}

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  PROVIDER = 'PROVIDER'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}