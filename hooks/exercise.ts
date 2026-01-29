import {
  getBodyParts,
  getExercises,
  getExercisesByBodyPart,
} from "@/api/exercises";
import { useQuery } from "@tanstack/react-query";

// TanStack Query hooks
export const useExercises = (limit = 20, offset = 0) => {
  return useQuery({
    queryKey: ["exercises", limit, offset],
    queryFn: () => getExercises(limit, offset),
    staleTime: 1000 * 60 * 5,
  });
};

export const useBodyParts = () => {
  return useQuery({
    queryKey: ["bodyParts"],
    queryFn: getBodyParts,
    staleTime: 1000 * 60 * 60,
  });
};

export const useExercisesByBodyPart = (
  bodyPart: string,
  limit = 20,
  offset = 0,
) => {
  return useQuery({
    queryKey: ["exercises", "bodyPart", bodyPart, limit, offset],
    queryFn: () => getExercisesByBodyPart(bodyPart, limit, offset),
    enabled: !!bodyPart,
    staleTime: 1000 * 60 * 5,
  });
};
