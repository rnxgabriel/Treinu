import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Picker, PickerProps } from "./Picker";

interface FormPickerProps extends PickerProps {}

export function FormPicker<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: FormPickerProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Picker
          {...rest}
          selectedValue={value}
          selectedValues={value}
          onValueChange={onChange}
          onValuesChange={onChange}
          errorMessage={error?.message}
        />
      )}
    />
  );
}
