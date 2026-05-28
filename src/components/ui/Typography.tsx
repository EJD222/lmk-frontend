import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-brand", className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn("scroll-m-20 text-3xl font-semibold tracking-tight font-brand", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight font-brand", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export function TypographyP({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
}
