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
    <Select
      {...props}
      value={selected}
      onChange={onChange}
      // Position the menu `fixed` so it escapes an `overflow: hidden` ancestor
      // (e.g. the link-editor modal) WITHOUT a body portal — a portal renders
      // outside react-aria's modal overlay, which blocks pointer events to the
      // menu. Keeping it inline leaves it inside the modal's interaction scope.
      menuPosition="fixed"
      styles={{menu: base => ({...base, zIndex: 9999})}}
    />
    <Forms.HelpText value={help} />
  </Forms.FormInputWrapper>;
};

export const selectExtensions = ({Forms}: {Forms: typeof UI.Forms.Controlled}) => ({
  select: FancySelect(Forms),
});
