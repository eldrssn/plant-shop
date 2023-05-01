import { KitchenScreen } from './components/KitchenScreen';
import { OfferScreen } from './components/OfferScreen';
import { PromiseScreen } from './components/PromiseScreen';
import { WelcomeScreen } from './components/WelcomeScreen';

const Home = () => (
  <main>
    <WelcomeScreen />
    <PromiseScreen />
    <KitchenScreen />
    <OfferScreen />
  </main>
);

export { Home };
