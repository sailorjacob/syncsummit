import { PortableText as SanityPortableText } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type PortableTextProps = {
  value: any
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-6 relative w-full h-auto aspect-video">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )
    },
    callout: ({ value }: any) => {
      const typeClasses = {
        info: 'bg-blue-50 border-blue-500 text-blue-700',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
        tip: 'bg-green-50 border-green-500 text-green-700',
        important: 'bg-red-50 border-red-500 text-red-700'
      }
      const classes = typeClasses[value.type as keyof typeof typeClasses] || typeClasses.info
      
      return (
        <div className={`border-l-4 p-4 my-6 ${classes}`}>
          <p>{value.text}</p>
        </div>
      )
    },
    embed: ({ value }: any) => {
      return (
        <div className="my-6">
          <iframe 
            src={value.url} 
            width="100%" 
            height="400" 
            frameBorder="0" 
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      )
    }
  }
}

export default function PortableText({ value }: PortableTextProps) {
  return <SanityPortableText value={value} components={components} />
} 