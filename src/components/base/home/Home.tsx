import { offersBottom, offersMain } from '@/content/offers';
import { KitchenScreen } from './components/KitchenScreen';
import { OfferScreen } from './components/OfferScreen';
import { PromiseScreen } from './components/PromiseScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { DeliveryOffer } from './components/DeliveryOffer';
import { TrustScreen } from './components/TrustScreen';

const Home = () => (
  <main>
    <WelcomeScreen />
    <PromiseScreen />
    <KitchenScreen />
    <OfferScreen offers={offersMain} />
    <OfferScreen offers={offersBottom} />
    <DeliveryOffer />
    <TrustScreen />
  </main>
);

export { Home };
