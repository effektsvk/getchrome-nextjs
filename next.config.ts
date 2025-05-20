import { NextConfig } from 'next'

const config: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'header',
              key: 'user-agent',
              value: '.*[Cc]url.*',
            },
          ],
          destination: '/curl',
        },
        {
          source: '/',
          has: [
            {
              type: 'header',
              key: 'user-agent',
              value: '.*[Pp]ower[Ss]hell.*',
            },
          ],
          destination: '/powershell',
        },
      ],
    }
  },
}

export default config
