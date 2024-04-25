import { useEffect, useState } from "react";
import Title from "./Title";
import Counter from "./Counter";
import Button from "./Button";
import { ResetIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const COUNT_LIMIT = 5;

export default function CardCounter() {
  const [counter, setCounter] = useState(0);
  const locked = counter === COUNT_LIMIT ? true : false;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        handleIncrementClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [counter]);

  const handleResetClick = () => {
    setCounter(0);
  };

  const handleIncrementClick = () => {
    setCounter((prev) => {
      if (prev < COUNT_LIMIT) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleDecrementClick = () => {
    setCounter((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className={`card ${locked && "card--limit"}`}>
      <Title title="Fancy Counter" locked={locked} />
      <Counter counter={counter} />
      <Button style="reset-btn" onClick={handleResetClick}>
        <ResetIcon className="reset-btn-icon" />
      </Button>
      <div className="button-container">
        <Button
          disabled={locked}
          style="count-btn"
          onClick={handleDecrementClick}
        >
          <MinusIcon className="count-btn-icon" />
        </Button>
        <Button
          disabled={locked}
          style="count-btn"
          onClick={handleIncrementClick}
        >
          <PlusIcon className="count-btn-icon" />
        </Button>
      </div>
    </div>
  );
}
