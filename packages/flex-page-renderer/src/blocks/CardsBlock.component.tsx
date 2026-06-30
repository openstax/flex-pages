import { CardGrid } from './CardGrid.component.js';
import { CTALink } from './CTABlock.component.js';
import type { CardBlockConfig, CardsBlockConfig } from './CardsBlock.config.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './CardsBlock.css';

export function CardsBlock({data}: {data: CardsBlockConfig}) {
  return (
    <CardGrid config={data.value.config}>
      {data.value.cards.map((card, i) => <CardContent key={i} data={card} />)}
    </CardGrid>
  );
}

function CardContent({data}: {data: CardBlockConfig}) {
  const [cta] = data.ctaBlock ?? [];
  return <>
    <RichTextContent html={data.text} />
    {cta ? <CTALink link={cta} /> : null}
  </>;
}
