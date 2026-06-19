import './BigNumberBlock.css';

export interface BigNumberBlockConfig {
  id: string;
  type: 'big_number';
  value: {
    number: string;
    caption?: string;
  };
}

export function BigNumberBlock({data}: {data: BigNumberBlockConfig}) {
  return <div className="content-block-big-number">
    <span className="number">{data.value.number}</span>
    {data.value.caption ? <span className="caption">{data.value.caption}</span> : null}
  </div>;
}
