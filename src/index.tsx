import React from 'react';
import type * as UI from '@openstax/ui-components';
import Select from 'react-select';

type OptionValue = {value: number; label: string}[] |
  {value: number; label: string} |
  null;

export const FancySelect = (Forms: typeof UI.Forms.Controlled) => (
  {label, help, ...props}: Omit<React.ComponentProps<Select>, 'value'>
) => {
  const formState = Forms.useFormHelpers();
  const value = formState.data[props.name] || undefined;
  const setValue = formState.setInput.field(props.name);

  const getSelected = React.useCallback(() => {
    return (props.options as any[]).find(o => o.value === value) || null;
  }, [value, props.options]);

  const [selected, setSelected] = React.useState<OptionValue>(getSelected());

  React.useEffect(() => {
    const found = getSelected();
    if (found !== selected) {
      setSelected(found);
    }
  }, [getSelected, selected]);

  const onChange = React.useCallback((
    newValue: {value: number; label: string} | null
  ) => {
    if (newValue) {
      setValue(newValue.value);
    } else {
      setValue(undefined);
    }
  }, [formState, props.name, props.isMulti]);

  return <Forms.FormInputWrapper>
    <Forms.FormLabelText><Forms.RequiredIndicator show={props.required} />{label}:</Forms.FormLabelText>
    <Select {...props} value={selected} onChange={onChange} />
    <Forms.HelpText value={help} />
  </Forms.FormInputWrapper>;
};

export const selectExtensions = ({Forms}: {Forms: typeof UI.Forms.Controlled}) => ({
  'select': FancySelect(Forms),
});
