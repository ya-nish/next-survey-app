import { useQuery } from '@tanstack/react-query'

// Example API function
async function fetchExample() {
  const response = await fetch('/api/example')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// Example React Query hook
export function useExampleQuery() {
  return useQuery({
    queryKey: ['example'],
    queryFn: fetchExample,
    staleTime: 5 * 60 * 1000, // 5 minutes
    // Other options like enabled, refetchOnWindowFocus, etc.
  })
}

// Example with parameters
export function useExampleWithId(id: string) {
  return useQuery({
    queryKey: ['example', id],
    queryFn: () => fetchExampleById(id),
    enabled: !!id, // Only run if id is provided
  })
}

async function fetchExampleById(id: string) {
  const response = await fetch(`/api/example/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
} 