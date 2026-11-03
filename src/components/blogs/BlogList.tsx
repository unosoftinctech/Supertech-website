import CardGrid from "@/components/ui/CardGrid";
import Container from "@/components/ui/Container";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/site";

export default function BlogList() {
  return (
    <Section>
      <Container>
        <CardGrid flush>
          {blogPosts.map((post) => (
            <InfoCard key={post.title} tag={post.tag} title={post.title} text={post.text} left />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
