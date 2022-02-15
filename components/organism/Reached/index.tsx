import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem counted="290M+" desc="Players Top Up" />
          <ReachedItem counted="12.500" desc="Games Available" isBorderLine />
          <ReachedItem counted="99,9%" desc="Happy Players" isBorderLine />
          <ReachedItem counted="4.7" desc="Rating Worldwide" isBorderLine />
        </div>
      </div>
    </section>
  );
}
