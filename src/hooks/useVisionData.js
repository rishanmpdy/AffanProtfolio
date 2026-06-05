// src/hooks/useVisionData.js
// Fetches strategic vision points from local JSON using TanStack Query.
// Swap the fetcher URL for a real API endpoint in production.
 
import { useQuery } from '@tanstack/react-query'
 
const fetchVision = async () => {
  // Simulates a network fetch from a local JSON file served by Vite.
  // In production: replace with your actual API URL.
  const res = await fetch('/src/data/vision.json')
  if (!res.ok) throw new Error('Failed to fetch vision data')
  return res.json()
}
 
export function useVisionData() {
  return useQuery({
    queryKey: ['vision'],
    queryFn: fetchVision,
    staleTime: Infinity, // static content — never refetch automatically
    retry: 2,
  })
}
