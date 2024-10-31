import { useEffect, useState } from "react";

export const DemoComponent = (props: { num: number }) => {
  const [isPrime, setIsPrime] = useState(true);

  useEffect(() => {
    let i = 2;

    (() => {
      while (i < props.num) {
        if (props.num % i === 0) {
          setIsPrime(false);
          return;
        }
        i++;
      }
    })();
  }, [props.num]);

  return <div>{`${props.num} is ${isPrime ? "" : "not"} a prime number`}</div>;
};
