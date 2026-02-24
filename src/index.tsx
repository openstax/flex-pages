import type * as UI from '@openstax/ui-components';
import React from 'react';
import Select, { type SingleValue } from 'react-select';

type OptionType = {value: number; label: string};

type OptionValue = OptionType[] | OptionType | null;

type FancySelectProps = Omit<React.ComponentProps<typeof Select>, 'value'> & {
  label?: string;
  help?: string;
  name: string;
};

export const FancySelect = (Forms: typeof UI.Forms.Controlled) => (
  {label, help, ...props}: FancySelectProps
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
    newValue: SingleValue<unknown>
  ) => {
    const option = newValue as OptionType | null;
    if (option) {
      setValue(option.value);
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
  select: FancySelect(Forms),
});
