"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toSlug } from "@/hooks/use-project-dialogs"
import { useProjectContext } from "@/lib/project-context"

export function CreateProjectDialog() {
  const { dialog, formName, setFormName, closeDialog, createProject, loading } = useProjectContext()
  const open = dialog.type === "create"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formName.trim()) createProject(formName.trim())
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              autoFocus
              placeholder="Project name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            {formName && (
              <p className="text-xs text-text-muted">
                slug: <span className="text-text-secondary font-mono">{toSlug(formName)}</span>
              </p>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={closeDialog}>Cancel</Button>
            <Button type="submit" disabled={!formName.trim() || loading}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
