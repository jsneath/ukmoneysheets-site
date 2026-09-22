import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-teal text-ivory shadow-[0_1px_0_rgba(6,38,56,0.12)] hover:bg-teal-deep",
        navy: "bg-navy text-ivory hover:bg-navy-soft",
        outline:
          "border border-teal/40 bg-transparent text-teal hover:border-teal hover:bg-mint/60",
        ghost: "text-navy hover:bg-mint/70 hover:text-navy",
        ivory:
          "bg-ivory text-navy hover:bg-paper shadow-[0_1px_0_rgba(6,38,56,0.08)]",
        link: "text-teal underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 rounded-lg px-5 text-[0.95rem]",
        sm: "h-9 rounded-md px-3.5 text-sm",
        lg: "h-12 rounded-xl px-6 text-base",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
