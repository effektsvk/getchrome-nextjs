"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Chrome, Terminal, ArrowRight, Copy } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText("irm getchro.me | iex")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-4 min-h-[100dvh]">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <header>
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Chrome className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">getchro.me</h1>
            <p className="text-zinc-400">Install Chrome with a single PowerShell command</p>
          </div>
        </header>

        <main>
          {/* Main Command Card */}
          <Card className="mb-8 border-zinc-800 bg-zinc-950/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Terminal className="h-4 w-4 mr-2 text-zinc-400" />
                  <span className="text-sm text-zinc-400">PowerShell</span>
                </div>
                <button
                  onClick={copyCommand}
                  className="flex items-center text-zinc-400 hover:text-zinc-200 transition-colors"
                  aria-label="Copy command"
                >
                  {copied ? <span className="text-xs text-green-500 mr-1">Copied!</span> : null}
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <pre className="font-mono text-lg text-blue-500 overflow-x-auto">irm getchro.me | iex</pre>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-950 text-blue-500 mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-zinc-300">Run the command in PowerShell</p>
                  <p className="text-sm text-zinc-400">Copy and paste the command above into PowerShell</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-950 text-blue-500 mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-zinc-300">Our server detects PowerShell via User-Agent</p>
                  <p className="text-sm text-zinc-400">We automatically serve a PowerShell script</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-950 text-blue-500 mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-zinc-300">Chrome installs automatically</p>
                  <p className="text-sm text-zinc-400">The latest version of Chrome is installed silently</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use This */}
          <Card className="mb-12 border-zinc-800 bg-zinc-950/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Why Use This?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium">Fast & Simple</p>
                    <p className="text-sm text-zinc-400">No browser needed to download Chrome</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium">Latest Version</p>
                    <p className="text-sm text-zinc-400">Always installs the current release</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium">Silent Install</p>
                    <p className="text-sm text-zinc-400">No clicks or prompts needed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium">IT Friendly</p>
                    <p className="text-sm text-zinc-400">Perfect for new computer setup</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-400 space-y-1">
          <p>© {new Date().getFullYear()} getchro.me | Not affiliated with Google</p>
          <p>
            Made with ❤️ by <a href="https://github.com/effektsvk" className="text-blue-500 hover:text-blue-400 transition-colors">Erik</a>
          </p>
          <p>
            <a href="https://github.com/effektsvk/getchrome-nextjs" className="text-blue-500 hover:text-blue-400 transition-colors">
              Open source
            </a> and free to use
          </p>
        </footer>
      </div>
    </div>
  )
}
