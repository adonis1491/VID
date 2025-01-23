import React from 'react'

const features = [
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
    image: "https://cdn.usegalileo.ai/sdxl10/bfb2ebcd-6cef-4090-8dd2-6569f2ef67de.png",
    title: "No need for manual labor",
    description: "Fully automated, no human input required"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/eb00a2ee-488a-4f91-bd96-7426b419d8b4.png",
    title: "Fast, accurate and reliable",
    description: "Fast, accurate and reliable"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/539f4831-f4e5-4b56-80d4-c065976df8c8.png",
    title: "24/7 and 365 continuous monitoring",
    description: "Continuous monitoring, no downtime"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/4b88c95f-5572-4d5e-bf0a-0b5c4e8d4b78.png",
    title: "A.I. algorithm technology",
    description: "Machine learning, deep learning, neural networks"
  }
]

export default function Features() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Why use the Traffic Violation Detection API?
        </h2>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
          Our Traffic Violation Detection API is a robust, scalable and cost-effective solution for detecting traffic violations in real-time video streams. It uses
          advanced A.I. algorithms to analyze video footage and identify potential violations, such as speeding, running red lights, illegal turns, and more.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url("${feature.image}")` }}
            />
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">{feature.title}</p>
              <p className="text-[#637588] text-sm font-normal leading-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}