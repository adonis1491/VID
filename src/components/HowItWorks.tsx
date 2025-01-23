import React from 'react'
import { Play, ArrowRight, CheckCircle2, BarChart, Settings, Download } from 'lucide-react'

const steps = [
  {
    icon: <Play className="w-6 h-6" />,
    title: "Upload your video to our platform or paste a YouTube link"
  },
  {
    icon: <ArrowRight className="w-6 h-6" />,
    title: "Our advanced A.I. algorithms will analyze the video and detect any potential traffic violations"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Review the results and download a detailed report with timestamps and descriptions"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Integrate our API into your application and start detecting traffic violations in real time"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customize the settings to meet your specific requirements, such as sensitivity levels and violation types"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Download the report and use the data to improve road safety and compliance with local traffic laws"
  }
]

export default function HowItWorks() {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">How it works</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]">
              {step.icon}
            </div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}