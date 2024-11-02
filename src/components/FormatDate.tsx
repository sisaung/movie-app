type OptionsDate = {
  month: "short";
  day: "numeric";
  year: "numeric";
};

const FormatDate = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  const d = new Date(date);

  const options: OptionsDate = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const format = d.toLocaleDateString("en-US", options);

  return (
    <div>
      <p className={`${className}`}>{format}</p>
    </div>
  );
};

export default FormatDate;
