import {
  Box,
  Button,
  FormInput,
  FormPicker,
  GradientButton,
  Sheet,
} from "@components";
import { EQUIPMENT, EXERCISE_TYPE } from "@constants";
import { useExerciseForm } from "@form";

export function ExerciseSheet() {
  const {
    form,
    principalMuscleData,
    accessoryMuscleData,
    toggleAccessory,
    showAccessory,
    handleSubmit,
  } = useExerciseForm();

  const { control } = form;

  return (
    <Sheet>
      <Box gap="s10">
        <FormInput
          control={control}
          name="name"
          label="Nome"
          placeholder="ex: Supino inclinado Halter"
        />
        <FormInput
          name="description"
          control={control}
          label="Descrição"
          placeholder="ex: Supino no banco 45°"
        />

        <FormPicker
          name="equipment"
          control={control}
          label="Equipamento"
          data={EQUIPMENT}
        />

        <FormPicker
          control={control}
          name="exerciseType"
          label="Tipo de Exercício"
          data={EXERCISE_TYPE}
          placeholder="ex: Peso & Repetição"
          onBottomSheet
        />

        <FormPicker
          control={control}
          name="principalMuscle"
          label="Músculo Príncipal"
          onBottomSheet
          data={principalMuscleData}
          placeholder="ex: Peito"
        />

        <Button title="Músculo Acessório" onPress={toggleAccessory} />

        {showAccessory && (
          <FormPicker
            control={control}
            name="accessoryMuscles"
            isMultiSelect
            label="Músculos Acessórios"
            placeholder="ex: Tríceps, Ombros"
            onBottomSheet
            data={accessoryMuscleData}
          />
        )}

        <GradientButton
          title="Salvar"
          onPress={handleSubmit}
          alignSelf="center"
        />
      </Box>
    </Sheet>
  );
}
