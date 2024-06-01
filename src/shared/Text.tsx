import { ComponentPropsWithoutRef, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"p">;

export default function Text({
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <p className={`text-base tracking-[0.5px] ${className}`} {...props}>
      {children}
    </p>
  );
}
