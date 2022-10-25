import { useState } from "react";
import data from "../../mock/apiResponseMock";
import { CoffeCard } from "../CoffeCard";
import { CoffeCardProps } from "../CoffeCard/interfaces";
import * as S from "./styles";

export const CoffesList = () => {
  const [coffes, setCoffes] = useState<CoffeCardProps[]>(
    data as CoffeCardProps[]
  );

  return (
    <S.CoffesList>
      <S.Title>Nossos cafés</S.Title>

      <S.CoffesListContent>
        {coffes.map((coffe) => (
          <CoffeCard
            key={coffe.id}
            coffeType={coffe.coffeType}
            title={coffe.title}
            description={coffe.description}
            price={coffe.price}
            img={coffe.img}
          />
        ))}
      </S.CoffesListContent>
    </S.CoffesList>
  );
};
