import { ListAccessArgs } from './types';

export function isLoggedIn({ session }: ListAccessArgs) {
  return !!session;
}
