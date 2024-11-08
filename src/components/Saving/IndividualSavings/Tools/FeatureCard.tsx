interface FeatureCardProps {
  title: string;
  description: string;
  isPrimary?: boolean;
}

export default function FeatureCard({
  title,
  description,
  isPrimary,
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md hover:transform hover:scale-95 transition-transform cursor-pointer
             ${isPrimary ? "bg-blue-900 text-white" : "bg-white"}`}
    >
      <h4
        className={`text-xl font-semibold ${isPrimary ? "" : "text-gray-900"}`}
      >
        {title}
      </h4>
      <p className={`mt-2 ${isPrimary ? "" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
}
