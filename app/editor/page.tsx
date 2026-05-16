"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjectContext } from "@/lib/project-context"

export default function EditorPage() {
  const { openCreate } = useProjectContext()

  return (
    <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-3rem)]">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-text-primary mb-2">
          Create a project or open an existing one
        </h1>
        <p className="text-sm text-text-muted mb-6">
          Start a new architecture workspace, or choose a project from the sidebar.
        </p>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
    </div>
  )
}
