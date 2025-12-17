'use server'

import { track } from "@vercel/analytics/server"
import { NextResponse, after } from "next/server"
import PostHogClient from "../posthog"

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "unknown"

  // PowerShell script that installs Google Chrome silently on Windows
  const script = `
# Chrome Installer Script
Write-Host "Installing Google Chrome..." -ForegroundColor Green

$installerPath = "$env:TEMP\\chrome_installer.exe"
$downloadUrl = "https://dl.google.com/chrome/install/latest/chrome_installer.exe"

# Download Chrome installer
Invoke-WebRequest -Uri $downloadUrl -OutFile $installerPath

# Install Chrome silently
Start-Process -FilePath $installerPath -Args "/silent /install" -Wait

# Clean up
Remove-Item -Path $installerPath -Force

Write-Host "Google Chrome has been installed successfully!" -ForegroundColor Green
`
  after(async () => {
    const posthog = PostHogClient()
    const event = {
      userAgent,
    }

    await Promise.all([
      track('chrome_powershell_install', event),
      posthog.capture({
        distinctId: 'anonymous',
        event: 'chrome_powershell_install',
        properties: event,
      }),
    ])

    await posthog.shutdown()
  })
  return new NextResponse(script, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
