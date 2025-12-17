'use server'

import { track } from '@vercel/analytics/server'
import { NextResponse, after } from 'next/server'
import PostHogClient from '../posthog'

export async function GET(request: Request) {
  const userAgent = request.headers.get('user-agent') ?? 'unknown'

  // Bash script that installs Google Chrome on macOS or Linux
  const script = `
#!/usr/bin/env bash
echo "Installing Google Chrome..."

# Detect OS
OS="$(uname -s)"
if [ "$OS" = "Darwin" ]; then
  echo "Detected macOS"
  echo "Warning: installing Homebrew can take a long time."
  read -p "Do you want to install Chrome via Homebrew? [y/N]: " use_brew
  use_brew=\${use_brew:-N}
  if [[ "$use_brew" =~ ^[Yy] ]]; then
    if ! command -v brew >/dev/null; then
      echo "Homebrew not found. Installing Homebrew..."
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    echo "Installing Google Chrome via Homebrew..."
    brew install --cask google-chrome
  else
    echo "Installing Google Chrome manually..."
    TMP_DMG="$(mktemp -d)"
    curl -L -o "$TMP_DMG/googlechrome.dmg" "https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg"
    hdiutil attach "$TMP_DMG/googlechrome.dmg" -nobrowse -quiet
    cp -R "/Volumes/Google Chrome/Google Chrome.app" /Applications/
    hdiutil detach "/Volumes/Google Chrome" -quiet
    rm -rf "$TMP_DMG"
  fi
  echo "Google Chrome has been installed successfully!"
  exit 0
fi

# Linux installation
TMP="$(mktemp)"
curl -L -o "$TMP" https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
if command -v sudo >/dev/null; then
  SUDO='sudo'
else
  SUDO=''
fi
if command -v dpkg >/dev/null; then
  $SUDO dpkg -i "$TMP" || $SUDO apt-get install -f -y
elif command -v yum >/dev/null; then
  $SUDO yum localinstall -y "$TMP"
elif command -v zypper >/dev/null; then
  $SUDO zypper install -y "$TMP"
else
  echo "Could not detect package manager. Please install Chrome manually."
  exit 1
fi
rm "$TMP"
echo "Google Chrome has been installed successfully!"
`
  after(async () => {
    const posthog = PostHogClient()
    const event = {
      userAgent,
    }

    await Promise.all([
      track('chrome_curl_install', event),
      posthog.capture({
        distinctId: 'anonymous',
        event: 'chrome_curl_install',
        properties: event,
      }),
    ])

    await posthog.shutdown()
  })
  return new NextResponse(script, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
