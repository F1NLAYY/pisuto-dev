'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type TestTableRow = {
    id: number
    created_at: string  // Allows flexibility if you're not sure of exact structure
  }

export default function TestSupabase() {
    const [data, setData] = useState<TestTableRow[] | null>(null)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
      async function testSupabaseConnection() {
        try {
          const { data: fetchedData, error } = await supabase
            .from('testtable')
            .select('*')
  
          if (error) throw error
          setData(fetchedData)
        } catch (err) {
          console.error('Supabase connection error:', err)
          setError(err instanceof Error ? err.message : 'An unknown error occurred')
        }
      }
  
      testSupabaseConnection()
    }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Supabase Connection Test</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            Error: {error}
          </div>
        )}
        
        {!data && !error && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          </div>
        )}
        
        {data && (
          <div>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              Connection successfully established!
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Record {index + 1}
                  </h2>
                  <div className="bg-gray-50 p-3 rounded">
                    <pre className="text-sm text-gray-700 overflow-auto max-h-48">
                      {JSON.stringify(item, null, 2)}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}