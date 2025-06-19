"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, MoreVertical, Share } from "lucide-react";

// YouTube videos data matching the screenshot
const youtubeVideos = [
  {
    id: 1,
    title: "Event loop কি?",
    description: "জাভাস্ক্রিপ্ট ইভেন্ট লুপ সম্পর্কে বিস্তারিত আলোচনা",
    videoId: "8aGhZQkoFbQ",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "15:32",
    views: "12.5K",
    publishedAt: "2 months ago",
    channelName: "Yasin Al Hasan",
    channelAvatar: "/img/IMG_0098.jpg",
  },
  {
    id: 2,
    title: "Event loop কি?",
    description: "জাভাস্ক্রিপ্ট ইভেন্ট লুপ সম্পর্কে বিস্তারিত আলোচনা",
    videoId: "O6P86uwfdR0",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "22:18",
    views: "8.3K",
    publishedAt: "3 weeks ago",
    channelName: "Yasin Al Hasan",
    channelAvatar: "/img/IMG_0098.jpg",
  },
  {
    id: 3,
    title: "Event loop কি?",
    description: "জাভাস্ক্রিপ্ট ইভেন্ট লুপ সম্পর্কে বিস্তারিত আলোচনা",
    videoId: "RSIclWvNTdQ",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "18:45",
    views: "15.7K",
    publishedAt: "1 month ago",
    channelName: "Yasin Al Hasan",
    channelAvatar: "/img/IMG_0098.jpg",
  },
  {
    id: 4,
    title: "Event loop কি?",
    description: "জাভাস্ক্রিপ্ট ইভেন্ট লুপ সম্পর্কে বিস্তারিত আলোচনা",
    videoId: "fgTGADljAeg",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "35:20",
    views: "9.8K",
    publishedAt: "2 weeks ago",
    channelName: "Yasin Al Hasan",
    channelAvatar: "/img/IMG_0098.jpg",
  },
];

// YouTube Video Card Component with portfolio gradient colors
function YouTubeVideoCard({ video, index, onPlay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(video)}
    >
      {/* YouTube Player Container - with portfolio gradient colors */}
      <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-orange-600 transition-all duration-300 aspect-video relative">
        {/* Video Background with Portfolio Gradient - Darker Version */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 via-orange-800 to-yellow-700">
          {/* Abstract geometric background pattern with darker orange/yellow */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-600 rounded-full blur-3xl"></div>
          </div>

          {/* Secondary gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/60 via-transparent to-yellow-800/60"></div>

          {/* Geometric shapes overlay with portfolio colors */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-yellow-300 transform rotate-45"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-orange-300 rounded-full"></div>
            <div className="absolute top-1/2 right-8 w-8 h-8 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-orange-400 rounded-full"></div>
          </div>

          {/* Additional texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/20 to-yellow-900/30"></div>
        </div>

        {/* Channel Avatar - Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <img
            src={video.channelAvatar || "/placeholder.svg?height=32&width=32"}
            alt={video.channelName}
            className="w-8 h-8 rounded-full border-2 border-yellow-300/70"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32";
            }}
          />
        </div>

        {/* More Options - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <button className="w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors duration-300 border border-orange-400/30">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Share Button - Top Right (second video style) */}
        {index === 1 && (
          <div className="absolute top-3 right-12 z-10">
            <button className="flex items-center gap-1 bg-black/40 hover:bg-black/60 px-2 py-1 rounded text-white text-xs transition-colors duration-300 border border-orange-400/30">
              <Share className="w-3 h-3" />
              <span>Share</span>
            </button>
          </div>
        )}

        {/* Main Content - Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Large Title Text with enhanced shadow */}
          <div className="text-center mb-4">
            <h3
              className="text-white text-4xl md:text-5xl font-black tracking-wider mb-2 drop-shadow-2xl"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              EVENT
            </h3>
            <div className="flex items-center justify-center gap-2">
              <h3
                className="text-white text-4xl md:text-5xl font-black tracking-wider drop-shadow-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                LO
              </h3>
              {/* YouTube Play Button with portfolio gradient */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl border-2 border-red-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  boxShadow: isHovered
                    ? "0 0 20px rgba(239, 68, 68, 0.6)"
                    : "0 0 10px rgba(239, 68, 68, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Play
                  className="w-5 h-5 text-white ml-0.5"
                  fill="currentColor"
                />
              </motion.div>
              <h3
                className="text-white text-4xl md:text-5xl font-black tracking-wider drop-shadow-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                P
              </h3>
            </div>
            {/* Bengali Text with enhanced shadow */}
            <h4
              className="text-white text-3xl md:text-4xl font-bold mt-2 drop-shadow-2xl"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              কি?
            </h4>
          </div>
        </div>

        {/* YouTube Branding - Bottom */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="flex items-center justify-between">
            {/* Watch on YouTube */}
            <div className="flex items-center gap-2 text-white text-sm bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
              <span>Watch on</span>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center">
                  <Play className="w-3 h-3 text-white" fill="currentColor" />
                </div>
                <span className="font-medium">YouTube</span>
              </div>
            </div>

            {/* Share button for some videos */}
            {(index === 0 || index === 2) && (
              <button className="flex items-center gap-1 bg-black/40 hover:bg-black/60 px-2 py-1 rounded text-white text-xs transition-colors duration-300 border border-orange-400/30">
                <Share className="w-3 h-3" />
                <span>Share</span>
              </button>
            )}
          </div>
        </div>

        {/* Hover Overlay with portfolio gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-yellow-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>

        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ boxShadow: "0 0 0px rgba(249, 115, 22, 0)" }}
          animate={
            isHovered
              ? {
                  boxShadow:
                    "0 0 30px rgba(249, 115, 22, 0.4), inset 0 0 30px rgba(251, 191, 36, 0.1)",
                }
              : {
                  boxShadow: "0 0 0px rgba(249, 115, 22, 0)",
                }
          }
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

// Enhanced Video Modal Component
function VideoModal({ video, isOpen, onClose }) {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-gray-800"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold text-white">{video.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Video Player */}
        <div className="aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&color=white&modestbranding=1`}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Details */}
        <div className="p-4 bg-gray-900">
          <div className="flex items-start gap-3 mb-4">
            <img
              src={video.channelAvatar || "/placeholder.svg?height=40&width=40"}
              alt={video.channelName}
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=40&width=40";
              }}
            />
            <div className="flex-1">
              <h4 className="text-white font-medium">{video.channelName}</h4>
              <p className="text-gray-400 text-sm">{video.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.publishedAt}</span>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function YouTubeSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-orange-900/20 to-yellow-900/20 rounded-3xl p-8 md:p-12 border border-orange-500/20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Find Me On{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              YouTube
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Educational content, tutorials, and insights into web development,
          programming concepts, and industry best practices in Bengali and
          English
        </motion.p>
      </div>

      {/* 2x2 Grid Layout - Matching Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {youtubeVideos.map((video, index) => (
          <YouTubeVideoCard
            key={video.id}
            video={video}
            index={index}
            onPlay={handlePlayVideo}
          />
        ))}
      </div>

      {/* Channel CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 text-white max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold">Subscribe for More Content!</h3>
          </div>
          <p className="mb-6 text-gray-300">
            Join thousands of developers learning modern web development
            techniques and best practices in Bengali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@yourchannel" // Replace with your actual YouTube channel
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Subscribe Now
            </a>
            <a
              href="https://youtube.com/@yourchannel/videos" // Replace with your videos page
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-orange-500/50 text-white rounded-xl font-bold hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:border-transparent transition-all duration-300"
            >
              View All Videos
            </a>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
// Note: Make sure to replace the video IDs and channel links with your actual content.
