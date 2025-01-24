import React from 'react'

// Define an interface for the feature structure
interface Feature {
  image: string;
  title: string;
  description: string;
}

// Typed array of features
const features: Feature[] = [
  {
    image: "https://cdn.usegalileo.ai/stability/f265bd17-7351-4bed-9d70-317c11200085.png",
    title: "Detecting traffic violations",
    description: "High accuracy, no false positives"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/b89b233f-ff7a-413e-8f60-d212d0d3a4a7.png",
    title: "Completely automatic",
    description: "Automatic detection, no human intervention"
  },
  {
    image: "https://cdn.usegalileo.ai/stability/8c4c5b1b-0a2f-4b1e-9e1e-a7b9c1b9c1b9.png",
    title: "Real-time processing",
    description: "Instant violation detection and reporting"
  }
];

// Define the component as a React Functional Component
const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
