import Container from "@/components/ui/Container";
import { featureCards } from "@/data/site";

export default function FeatureCards() {
  return (
    <Container>
      <div className="relative -mt-14 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px] tablet:-mt-11">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-lg border-t-4 bg-white p-[26px] shadow-[0_14px_40px_rgba(4,18,48,.16)] ${card.border}`}
          >
            <h3 className="mb-2 text-[25px] text-navy">{card.title}</h3>
            <p className="text-[15px]">{card.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
