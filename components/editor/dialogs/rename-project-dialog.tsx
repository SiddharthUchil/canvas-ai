"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useProjectContext } from "@/lib/project-context"

export function RenameProjectDialog() {
  const { dialog, formName, setFormName, closeDialog, renameProject, loading } = useProjectContext()
  const open = dialog.type === "rename"
  const project = dialog.type === "rename" ? dialog.project : null

  useEffect(() => {
    if (open && project) setFormName(project.name)
  }, [open, project?.id])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (project && formName.trim()) renameProject(project.id, formName.trim())
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename project</DialogTitle>
          {project && (
            <DialogDescription>
              Renaming <span className="text-text-secondary">{project.name}</span>
            </DialogDescription>
          )}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            autoFocus
            placeholder="Project name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={closeDialog}>Cancel</Button>
            <Button type="submit" disabled={!formName.trim() || loading}>Rename</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
