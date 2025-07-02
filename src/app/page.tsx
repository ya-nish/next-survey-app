import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Next Survey App</h1>
          <ThemeToggle />
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            shadcn/ui is now configured with theme support!
          </p>
          <div className="flex gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
