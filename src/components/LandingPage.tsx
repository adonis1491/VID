import React from 'react'
import { Link } from 'react-router-dom'
import Features from './Features'
import HowItWorks from './HowItWorks'

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/274eba6d-99a7-4710-b9a8-6ae2d8fd14aa.png")'
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Detect Traffic Violations in Seconds
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Upload your video and get results in seconds with our advanced AI technology.
              </h2>
            </div>
            <Link to="/upload" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Features />
      <HowItWorks />
    </div>
  )
}