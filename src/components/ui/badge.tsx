import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-md backdrop-blur-md animate-fade-in",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-br from-primary to-accent text-primary-foreground hover:scale-105",
        secondary:
          "border-transparent bg-gradient-to-br from-secondary to-muted text-secondary-foreground hover:scale-105",
        destructive:
          "border-transparent bg-gradient-to-br from-destructive to-accent text-destructive-foreground hover:scale-105",
        outline: "text-[hsl(var(--foreground))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
