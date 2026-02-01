import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Hook to manage email copy to clipboard functionality
 * Handles both modern API and fallback for older browsers
 */
export const useEmailCopy = (email) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const handleCopyEmail = useCallback(async () => {
    if (!email) return;

    const showCopiedState = () => {
      setEmailCopied(true);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    };

    try {
      await navigator.clipboard.writeText(email);
      showCopiedState();
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        showCopiedState();
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, [email]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return { emailCopied, handleCopyEmail };
};
