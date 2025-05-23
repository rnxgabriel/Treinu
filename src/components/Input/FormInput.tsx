import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Input, InputProps } from "./Input";

export function FormInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          {...props}
          value={value}
          onChangeText={onChange}
          errorMessage={error?.message}
        />
      )}
    />
  );
}
