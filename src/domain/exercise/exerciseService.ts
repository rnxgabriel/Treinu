import { ExerciseFormData } from "@form";
import { firestoreInstance } from "@services";
import { MuscleEnum } from "@types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  WithFieldValue,
} from "firebase/firestore";
import { ExerciseT } from "./exerciseTypes";

export function useExerciseService() {
  const exerciseCollection = collection(firestoreInstance, "Exercises");

  async function create(data: ExerciseFormData) {
    const object = await addDoc(
      exerciseCollection,
      data as WithFieldValue<ExerciseT>,
    );
    console.log(object);
  }

  async function read() {
    const exercisesSnapshot = await getDocs(exerciseCollection);
    const exercises: ExerciseT[] = exercisesSnapshot.docs.map((doc) => ({
      uuid: doc.id,
      ...doc.data(),
    })) as ExerciseT[];
    return exercises;
  }

  async function readById(id: string) {
    const exerciseRef = doc(exerciseCollection, id);
    const exerciseSnap = await getDoc(exerciseRef);

    if (!exerciseSnap.exists()) {
      return null;
    }
    return { id: exerciseSnap.id, ...exerciseSnap.data() };
  }

  async function update(id: string, data: ExerciseT) {
    const exerciseRef = doc(exerciseCollection, id);
    return await updateDoc(exerciseRef, data);
  }

  async function deleteById(id: string) {
    const exerciseRef = doc(exerciseCollection, id);
    return await deleteDoc(exerciseRef);
  }

  async function readByMuscle(muscle: MuscleEnum) {
    const q = query(exerciseCollection, where("principalMuscle", "==", muscle));
    const exercisesSnapshot = await getDocs(q);
    const exercises = exercisesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return exercises;
  }

  return {
    create,
    read,
    readById,
    update,
    deleteById,
    readByMuscle,
  };
}
