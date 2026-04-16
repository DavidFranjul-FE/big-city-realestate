type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {description ? (
        <p className="mt-2 text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}
