import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "w-[90%] px-3 text-[#75716B] text-base font-medium font-[Poppins]  border-none outline-none placeholder:text-[#75716B]"
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
