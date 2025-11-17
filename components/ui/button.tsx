import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 relative overflow-hidden group button-shimmer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        destructive:
          "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        whatsapp:
          "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-green-500/25 [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        outline:
          "border border-indigo-500/30 backdrop-blur-sm hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        secondary:
          "professional-glass text-white hover:bg-white/10 [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        ghost: "hover:bg-white/10 text-white hover:text-white [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
        link: "text-indigo-400 underline-offset-4 hover:text-indigo-300 hover:underline [&_svg]:group-hover:rotate-12 [&_svg]:group-hover:scale-110 [&_svg]:transition-transform [&_svg]:duration-300",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 py-2",
        lg: "h-12 rounded-xl px-8 py-4 text-lg",
        icon: "h-11 w-11 rounded-xl",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Gradient overlay effect */}
        {variant === 'default' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
        {variant === 'destructive' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
        {variant === 'whatsapp' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
        
        {/* Border glow effect for primary buttons */}
        {(variant === 'default' || variant === 'destructive') && (
          <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200"></span>
        )}
        {variant === 'whatsapp' && (
          <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-green-500/50 via-green-400/50 to-green-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200"></span>
        )}
        
        {props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
