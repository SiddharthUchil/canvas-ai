import { SignIn } from "@clerk/nextjs"
import { Cpu, Users, FileCode } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileCode,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export default function SignInPage() {
  return (
    <div className="min-h-screen flex bg-bg-base">
      {/* Left panel — hidden on small screens */}
      <div className="hidden lg:flex lg:w-1/2 flex-col px-16 py-12 border-r border-border-default">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-auto">
          <div className="h-7 w-7 rounded-md bg-accent-primary flex items-center justify-center">
            <span className="text-xs font-bold text-bg-base">G</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">Ghost AI</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col justify-center flex-1 py-16">
          <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
            Design systems at the<br />speed of thought.
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Describe your architecture in plain English, Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>

          {/* Feature list */}
          <div className="space-y-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-bg-subtle border border-border-default flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-text-muted" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — Clerk form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <SignIn />
      </div>
    </div>
  )
}
