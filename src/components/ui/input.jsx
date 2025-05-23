import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-white text-black px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      
      ref={ref}
      {...props} 
      />
  );
});

Input.displayName = "Input";

// Add PropTypes validation
Input.propTypes = {
  className: PropTypes.string, // className should be a string
  type: PropTypes.string, // type should be a string
};

export { Input };
