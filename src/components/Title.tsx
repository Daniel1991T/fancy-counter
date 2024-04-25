type TitleProps = {
  title: string;
  locked?: boolean;
};

export default function Title({ title, locked }: TitleProps) {
  return (
    <p className="title">
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      ) : (
        title
      )}
    </p>
  );
}
