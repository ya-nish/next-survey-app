'use client'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserProfile } from "@/components/user-profile"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Next Survey App</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <UserProfile />
            ) : (
              <Link href="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          {user ? (
            <>
              <p className="text-muted-foreground">
                Welcome back, {user.user_metadata?.full_name || user.email}!
              </p>
              <p className="text-muted-foreground">
                You're now authenticated and can access all features.
              </p>
            </>
          ) : (
            <>
              {/* <p className="text-muted-foreground">
                shadcn/ui is now configured with theme support and authentication!
              </p> */}
              <p className="text-muted-foreground">
                Sign in to access all features.
              </p>
            </>
          )}
          
          {/* <div className="flex gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
