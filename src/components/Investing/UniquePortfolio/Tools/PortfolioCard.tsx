interface PortfolioCardProps {
    title: string;
    description: string;
    image: string;
    categories: string[];
    imagePosition?: "left" | "right";
  }
  
  export default function PortfolioCard({ title, description, image, categories, imagePosition = "right" }: PortfolioCardProps) {
      console.log(imagePosition)
    return (
      <div className="flex flex-col md:flex-row border overflow-hidden">
        {imagePosition === "right" && (
          <div className="md:w-1/3">
            <img
              src={image}
              alt={title}
              className="w-full  h-64 object-cover"
            />
          </div>
        )}
        <div className="flex flex-col justify-center p-6 bg-white md:w-2/3">
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        {imagePosition === "left" && (
          <div className="md:w-1/3">
            <img
              src={image}
              alt={title}
              className="w-full  h-64 object-cover"
            />
          </div>
        )}
      </div>
    );
  }