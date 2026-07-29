import type { UseTypewriterOptions } from "@/types";
import { useEffect, useRef, useState } from "react";

export const useTypewriter = ({
  texts,
  typeSpeed = 60,
  deleteSpeed = 35,
  pauseTime = 2000,
}: UseTypewriterOptions) => {
  const textsRef = useRef(texts);

  const [displayed, setDisplayed] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const texts = textsRef.current;
    const currentText = texts[textIndex];

    if (isPaused) {
      const pause = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pause);
    }

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }
  }, [
    charIndex,
    isDeleting,
    isPaused,
    textIndex,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  return { displayed, isTyping: !isDeleting && !isPaused };
};
