import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, Smartphone } from 'lucide-react'

export default function VideoUploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const navigate = useNavigate()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload process
      setTimeout(() => {
        setVideoUrl(URL.createObjectURL(file))
        setIsUploading(false)
        navigate('/processing', { state: { videoUrl: URL.createObjectURL(file) } })
      }, 2000)
    }
  }

  const handleYoutubeUpload = () => {
    if (videoUrl) {
      navigate('/processing', { state: { videoUrl } })
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <h1 className="text-4xl font-black leading-tight tracking-tight">上傳影片</h1>
          <p className="text-gray-600">您可以選擇從電腦上傳影片，或是貼上 YouTube 連結</p>
        </div>
      </div>
      <div className="flex px-4 py-3">
        <button
          className="flex-1 gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center"
          onClick={() => document.getElementById('fileInput')?.click()}
          disabled={isUploading}
        >
          <Upload className="h-5 w-5" />
          {isUploading ? '上傳中...' : '從電腦上傳影片'}
        </button>
        <input
          id="fileInput"
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      <p className="text-gray-600 text-sm text-center">或</p>
      <div className="flex px-4 py-3">
        <input
          type="text"
          placeholder="貼上 YouTube 連結"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium"
          onClick={handleYoutubeUpload}
        >
          上傳
        </button>
      </div>
    </div>
  )
}