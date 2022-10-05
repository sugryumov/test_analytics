import { FC, useEffect, useState } from "react";
import { Error } from "../../common/Error";
import { Spinner } from "../../common/Spinner";
import { ICards } from "../../models/ICards";
import { getCards } from "../../services";

export const Cards: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [cards, setCards] = useState<ICards[] | null>(null);

  useEffect(() => {
    getCards({ type: "Sales" })
      .then(({ response }) => {
        setCards(response);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setLoading(false));
  }, [setCards]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error message={errorMessage} />;
  }

  return (
    <div>
      {cards?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
};
