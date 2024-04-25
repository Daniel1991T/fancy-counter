type CounterProps = {
  counter: number;
};

export default function Counter({ counter }: CounterProps) {
  return <p className="count">{counter}</p>;
}
