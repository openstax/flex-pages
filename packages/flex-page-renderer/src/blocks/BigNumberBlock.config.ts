export const config = {
  type: 'big_number',
  categories: ['content'],
  label: 'Big Number',
  description: 'A large statistic with an optional caption, e.g. "8M+ learners".',
  fields: [
    {name: 'number', label: 'Number', type: 'text', required: true, help: 'The statistic to display large, e.g. 8M+.'},
    {name: 'caption', label: 'Caption', type: 'text', help: 'Optional supporting text shown below the number.'},
  ],
};
