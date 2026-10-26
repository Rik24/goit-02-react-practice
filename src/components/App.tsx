import { useState } from "react";
import { initialDogs } from "../data/dogs";
import { DogList } from "./DogList/DogList";

export function App() {
  const [dogs, setDogs] = useState(initialDogs);

  const deleteDog = (id: number) => {
    {
      const filteredDogs = dogs.filter((dog) => dog.id !== id);
      setDogs(filteredDogs);
    }
  };
  const changeStatus = (id: number) => {
    const changedArr = dogs.map((dog) => {
      if (dog.id === id) {
        dog.isFriendly = !dog.isFriendly;
      }
      return dog;
    });
    setDogs(changedArr);
  };

  return (
    <DogList dogs={dogs} deleteDog={deleteDog} changeStatus={changeStatus} />
  );
}
