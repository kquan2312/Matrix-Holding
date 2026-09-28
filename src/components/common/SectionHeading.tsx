interface SectionHeadingProps {
  number: string;
  label: string;
  title?: string;
  description?: string;
}

export default function SectionHeading({
  number,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-label">
        <span>{number}</span>
        <span>{label}</span>
      </div>

      {title && <h2>{title}</h2>}

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}