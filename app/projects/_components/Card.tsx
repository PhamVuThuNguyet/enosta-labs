'use client'

import { useEffect, useState } from 'react'
import Image from '@/components/containers/Image'
import Link from '@/components/containers/Link'
import { DevIcons } from './DevIcons'

const Card = ({ title, description, imgSrc, href, techStack }) => {
  // to solve hydration mismatch error
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <a href={href} className="max-w-lg">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-zinc-300 p-[6px] hover:border-black dark:border-zinc-700 hover:dark:border-white/90">
        {imgSrc && (
          <div className="flex-shrink-0 object-none">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-72 lg:h-72"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex-grow p-3">
          <div className="mb-5 flex flex-wrap gap-2">
            {techStack.map((t) => {
              const Icon = DevIcons[t]
              return (
                <div
                  key={t}
                  className="flex items-center justify-center gap-2 rounded-md border border-black bg-white p-1 px-2 text-sm font-bold text-black md:text-base"
                >
                  {t}
                  <div>
                    <Icon />
                  </div>
                </div>
              )
            })}
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight hover:underline">
            {title}
          </h2>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <Link
            href={href}
            className="text-base font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </a>
  )
}

export default Card
