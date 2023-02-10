import MultiPerfumeMap from "./MultiPerfumeMap";
import Perfume2Map from "./Perfume2Map";
import SignatureMap from "./SignatureMap";

function PerfumeMap() {
  return (
    <>
      <article>
        <Perfume2Map />
      </article>
      <article>
        <SignatureMap />
      </article>
      <article>
        <MultiPerfumeMap />
      </article>
    </>
  );
}

export default PerfumeMap;
