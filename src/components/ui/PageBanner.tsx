import Container from "./Container";

type Props = { title: string; subtitle: string };

/** Dark blue banner shown at the top of every inner page. */
export default function PageBanner({ title, subtitle }: Props) {
  return (
    <div className="bg-navy-gradient py-[54px] text-white phone:py-[38px]">
      <Container>
        <h1 className="text-[clamp(40px,7vw,80px)]">{title}</h1>
        <p className="mt-2 text-[#c4ccd7]">{subtitle}</p>
      </Container>
    </div>
  );
}
