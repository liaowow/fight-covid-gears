import CreateProduct from '../components/CreateProduct';
import LoginGate from '../components/LoginGate';

export default function SellPage() {
  return (
    <div>
      <LoginGate>
        <CreateProduct />
      </LoginGate>
    </div>
  );
}
