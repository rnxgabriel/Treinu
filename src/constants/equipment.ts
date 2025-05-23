import { EquipmentEnum } from "@types";

export const EQUIPMENT: { label: string; value: EquipmentEnum }[] = [
  { label: "Nenhum", value: EquipmentEnum.NONE },
  { label: "Peso do corpo", value: EquipmentEnum.BODYWEIGHT },
  { label: "Barra", value: EquipmentEnum.BARBELL },
  { label: "Halter", value: EquipmentEnum.DUMBBELL },
  { label: "Kettlebell", value: EquipmentEnum.KETTLEBELL },
  { label: "Máquina", value: EquipmentEnum.MACHINE },
  { label: "Elástico", value: EquipmentEnum.RESISTANCE_BAND },
  { label: "Outro", value: EquipmentEnum.OTHER },
];
