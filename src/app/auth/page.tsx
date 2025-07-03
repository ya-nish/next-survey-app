'use client'

import { useState } from 'react'
import { AuthForm } from '@/components/auth-form'

export default function AuthPage() {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in')

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthForm mode={mode} onModeChange={setMode} />
    </div>
  )
} 