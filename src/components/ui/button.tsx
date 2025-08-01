import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 group bg-white text-primary hover:bg-blue-50 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
  {
    variants: {
      variant: {
        default: "bg-white text-primary hover:bg-blue-50 h-11 rounded-md px-8 group dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
        destructive:
          "bg-gradient-to-br from-destructive to-accent text-destructive-foreground hover:scale-105",
        outline:
          "border border-primary text-primary bg-white hover:bg-blue-50 h-11 rounded-md px-8 group dark:border-blue-400 dark:text-white dark:bg-blue-500 dark:hover:bg-blue-400",
        secondary:
          "bg-gradient-to-br from-secondary to-muted text-secondary-foreground hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    ) as any;
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
