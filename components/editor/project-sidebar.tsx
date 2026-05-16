"use client"

import { X, Plus, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProjectContext } from "@/lib/project-context"
import type { Project } from "@/hooks/use-project-dialogs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function ProjectItem({ project }: { project: Project }) {
  const { openRename, openDelete } = useProjectContext()
  return (
    <div className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-bg-subtle mx-2 cursor-pointer">
      <span className="text-sm text-text-primary truncate">{project.name}</span>
      {project.owned && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-text-muted hover:text-text-primary"
            onClick={(e) => { e.stopPropagation(); openRename(project) }}
          >
            <Pencil className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-text-muted hover:text-state-error"
            onClick={(e) => { e.stopPropagation(); openDelete(project) }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  const { projects, openCreate } = useProjectContext()
  const myProjects = projects.filter((p) => p.owned)
  const sharedProjects = projects.filter((p) => !p.owned)

  return (
    <>
      {/* Mobile backdrop scrim */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Desktop click-outside */}
      {isOpen && (
        <div className="fixed inset-0 z-30 hidden lg:block" onClick={onClose} />
      )}
      <aside
        className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-64 z-40 flex flex-col bg-bg-surface border-r border-border-default transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-default">
          <span className="text-sm font-medium text-text-primary">Projects</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6 text-text-muted hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="my-projects" className="flex flex-col flex-1 overflow-hidden">
          <TabsList className="mx-3 mt-3">
            <TabsTrigger value="my-projects" className="flex-1">My Projects</TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">Shared</TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1 overflow-y-auto py-2">
            {myProjects.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-xs text-text-muted">No projects yet</p>
              </div>
            ) : (
              myProjects.map((p) => <ProjectItem key={p.id} project={p} />)
            )}
          </TabsContent>
          <TabsContent value="shared" className="flex-1 overflow-y-auto py-2">
            {sharedProjects.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-xs text-text-muted">No shared projects</p>
              </div>
            ) : (
              sharedProjects.map((p) => <ProjectItem key={p.id} project={p} />)
            )}
          </TabsContent>
        </Tabs>

        <div className="p-3 border-t border-border-default">
          <Button className="w-full" size="sm" onClick={openCreate}>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}
