import { useUser } from './User';
import Login from './Login';

export default function ({ children }) {
  const me = useUser();
  if (!me) return <Login />;
  return children;
}
