"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useProjectContext } from "@/lib/project-context"

export function DeleteProjectDialog() {
  const { dialog, closeDialog, deleteProject, loading } = useProjectContext()
  const open = dialog.type === "delete"
  const project = dialog.type === "delete" ? dialog.project : null

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project</DialogTitle>
          {project && (
            <DialogDescription>
              This will permanently delete <span className="text-text-secondary">{project.name}</span>. This action cannot be undone.
            </DialogDescription>
          )}
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={closeDialog}>Cancel</Button>
          <Button
            variant="destructive"
            disabled={loading}
            onClick={() => project && deleteProject(project.id)}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
