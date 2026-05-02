"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={onClose}
        />
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
          <TabsContent value="my-projects" className="flex-1 flex items-center justify-center">
            <p className="text-xs text-text-muted">No projects yet</p>
          </TabsContent>
          <TabsContent value="shared" className="flex-1 flex items-center justify-center">
            <p className="text-xs text-text-muted">No shared projects</p>
          </TabsContent>
        </Tabs>

        <div className="p-3 border-t border-border-default">
          <Button className="w-full" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}
