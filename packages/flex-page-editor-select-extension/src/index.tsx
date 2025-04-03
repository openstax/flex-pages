import React from 'react';
import * as UI from '@openstax/ui-components';
import Select from 'react-select';

type OptionValue = {value: number; label: string}[] |
  {value: number; label: string} |
  null;

export const FancySelect = (
  props: Omit<React.ComponentProps<typeof UncontrolledFancySelect>, 'value'>
) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
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

  return <UncontrolledFancySelect
    isClearable={!props.required}
    {...props}
    value={selected}
    onChange={onChange}
  />;
};

const UncontrolledFancySelect = ({label, help, ...props}: React.ComponentProps<Select> & {
  label: string;
  help?: string;
}) => {
  return <UI.Forms.Controlled.FormInputWrapper>
    <UI.Forms.Controlled.FormLabelText><UI.Forms.Controlled.RequiredIndicator show={props.required} />{label}:</UI.Forms.Controlled.FormLabelText>
    <Select {...props} />
    <UI.Forms.Controlled.HelpText value={help} />
  </UI.Forms.Controlled.FormInputWrapper>;
};

export const selectExtensions = {
  'select': FancySelect,
}
