import './BigNumberBlock.css';

export interface BigNumberBlockConfig {
  id: string;
  type: 'big_number';
  value: {
    number: string;
    caption?: string;
    color?: 'blue' | 'green' | 'orange';
  };
}

export function BigNumberBlock({data}: {data: BigNumberBlockConfig}) {
  const {number, caption, color} = data.value;
  return <div className="content-block-big-number">
    <span className={color ? `number text-${color}` : 'number'}>{number}</span>
    {caption ? <span className="caption">{caption}</span> : null}
  </div>;
}
