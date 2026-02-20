import ListSection from "@/components/ListSection";

import { DONATE } from "@/data/donate";

export default function Donate() {
  return (
    <>
        <ListSection
            title="Crypto"
            description="You can support me with cryptocurrency here."
            items={DONATE}
        />
    </>
  );
}