import React, {FC, ReactNode, useState} from 'react'

type ImageWithFallbackProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  fallback?: ReactNode
  fallbackSrc?: string
  src: string
}

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  fallback,
  fallbackSrc,
  alt,
  src,
  onError: propOnError,
  ...props
}) => {
  const [error, setError] = useState(false)

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true)
    propOnError?.(event)
  }

  const safeSrc = error && fallbackSrc ? fallbackSrc : src

  if ((error || !src) && fallback) {
    return <>{fallback}</>
  }

  return <img alt={alt} onError={handleError} src={safeSrc} {...props} />
}
