import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface DetectionResult {
  id: string
  user_id: string
  video_url: string
  detection_results: any
  created_at: string
}

export default function Results() {
  const [results, setResults] = useState<DetectionResult[]>([])

  useEffect(() => {
    fetchResults()
  }, [])

  const fetchResults = async () => {
    try {
      const { data, error } = await supabase
        .from('detection_results')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setResults(data)
    } catch (error) {
      console.error('Error fetching results:', error)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Detection Results</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <div key={result.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Result {result.id}</h2>
            <p className="text-gray-600 mb-2">Video URL: {result.video_url}</p>
            <p className="text-gray-600 mb-4">Created at: {new Date(result.created_at).toLocaleString()}</p>
            <h3 className="font-semibold mt-4 mb-2">Detected Violations:</h3>
            <ul className="list-disc pl-5">
              {result.detection_results.violations.map((violation: any, index: number) => (
                <li key={index} className="text-gray-700">
                  {violation.type} at {violation.timestamp} (Confidence: {(violation.confidence * 100).toFixed(2)}%))
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}