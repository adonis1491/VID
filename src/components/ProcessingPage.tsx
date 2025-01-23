import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Play } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function ProcessingPage() {
  const [progress, setProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const totalFrames = 1000
  const navigate = useNavigate()
  const location = useLocation()
  const videoUrl = location.state?.videoUrl || ''

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
      setCurrentFrame(prev => Math.min(prev + 10, totalFrames))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      saveDetectionResults()
    }
  }, [progress])

  const saveDetectionResults = async () => {
    try {
      // Simulate detection results
      const results = {
        violations: [
          { type: 'Speeding', timestamp: '00:15', confidence: 0.95 },
          { type: 'Red Light', timestamp: '01:23', confidence: 0.88 },
        ]
      }

      const { data, error } = await supabase
        .from('detection_results')
        .insert({
          user_id: 'user123', // Replace with actual user ID
          video_url: videoUrl,
          detection_results: results
        })
        .select()

      if (error) throw error

      navigate('/results')
    } catch (error) {
      console.error('Error saving detection results:', error)
    }
  }

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto py-5">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-[#111418] text-base font-medium leading-normal">
            Analyzing frame {currentFrame} of {totalFrames}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-gray-600 text-sm font-normal leading-normal">
          Estimated time remaining: {Math.ceil((100 - progress) / 10)} seconds
        </p>
      </div>
      <div
        className="relative flex items-center justify-center bg-[#111418] bg-cover bg-center aspect-video mt-4 rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/1dd5c319-dd4a-4fb3-9a82-e9c0a44b3f96.png")' }}
      >
        <button className="flex items-center justify-center rounded-full w-16 h-16 bg-black/40 text-white">
          <Play className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}