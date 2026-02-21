import ListSection from "@/components/ListSection";

import { DONATE, FIAT_DONATE } from "@/data/donate";

export default function Donate() {
  return (
    <>
        <ListSection
            title="Crypto"
            description="You can support me with cryptocurrency here."
            items={DONATE}
        />

        <ListSection
            title="Fiat"
            description="If you&apos;re in Russia, you can support me via traditional payment methods here."
            items={FIAT_DONATE}
        />
    </>
  );
}