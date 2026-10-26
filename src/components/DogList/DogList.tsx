import type { IDog } from "../../types";
import { Dog } from "../Dog/Dog";

interface DogListProps {
  dogs: IDog[];
  deleteDog: (id: number) => void;
  changeStatus: (id: number) => void;
}

export function DogList({ dogs, deleteDog, changeStatus }: DogListProps) {
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>
          <Dog dog={dog} deleteDog={deleteDog} changeStatus={changeStatus} />
        </li>
      ))}
    </ul>
  );
}
