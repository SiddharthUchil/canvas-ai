import { useState } from "react"

export type Project = {
  id: string
  name: string
  slug: string
  owned: boolean
}

export type DialogState =
  | { type: "none" }
  | { type: "create" }
  | { type: "rename"; project: Project }
  | { type: "delete"; project: Project }

const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "Ghost AI Platform", slug: "ghost-ai-platform", owned: true },
  { id: "2", name: "Auth Module", slug: "auth-module", owned: true },
  { id: "3", name: "Shared Design", slug: "shared-design", owned: false },
]

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const [dialog, setDialog] = useState<DialogState>({ type: "none" })
  const [loading, setLoading] = useState(false)
  const [formName, setFormName] = useState("")

  function openCreate() {
    setFormName("")
    setDialog({ type: "create" })
  }

  function openRename(project: Project) {
    setFormName(project.name)
    setDialog({ type: "rename", project })
  }

  function openDelete(project: Project) {
    setDialog({ type: "delete", project })
  }

  function closeDialog() {
    setDialog({ type: "none" })
    setFormName("")
  }

  function createProject(name: string) {
    setLoading(true)
    setProjects((prev) => [
      ...prev,
      { id: Date.now().toString(), name, slug: toSlug(name), owned: true },
    ])
    setLoading(false)
    closeDialog()
  }

  function renameProject(id: string, name: string) {
    setLoading(true)
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name, slug: toSlug(name) } : p))
    )
    setLoading(false)
    closeDialog()
  }

  function deleteProject(id: string) {
    setLoading(true)
    setProjects((prev) => prev.filter((p) => p.id !== id))
    setLoading(false)
    closeDialog()
  }

  return {
    projects,
    dialog,
    loading,
    formName,
    setFormName,
    openCreate,
    openRename,
    openDelete,
    closeDialog,
    createProject,
    renameProject,
    deleteProject,
  }
}
