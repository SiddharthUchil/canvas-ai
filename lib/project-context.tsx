"use client"

import { createContext, useContext } from "react"
import type { Project, DialogState } from "@/hooks/use-project-dialogs"

type ProjectContextValue = {
  projects: Project[]
  dialog: DialogState
  loading: boolean
  formName: string
  setFormName: (name: string) => void
  openCreate: () => void
  openRename: (project: Project) => void
  openDelete: (project: Project) => void
  closeDialog: () => void
  createProject: (name: string) => void
  renameProject: (id: string, name: string) => void
  deleteProject: (id: string) => void
}

export const ProjectContext = createContext<ProjectContextValue | null>(null)

export function useProjectContext() {
  const ctx = useContext(ProjectContext)
  if (!ctx) throw new Error("useProjectContext must be used within ProjectContext.Provider")
  return ctx
}
