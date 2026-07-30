import { useEffect, useRef, useState } from 'react'

interface TypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenLines?: number
}

export function useTypewriter({
  words,
  typeSpeed = 30,
  deleteSpeed = 15,
  delayBetweenLines = 600,
}: TypewriterOptions) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const indexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const fullLine = words[indexRef.current]

      if (!isDeletingRef.current) {
        // Typing
        if (charIndexRef.current < fullLine.length) {
          charIndexRef.current++
          setCurrentText(fullLine.slice(0, charIndexRef.current))
          timer = setTimeout(tick, typeSpeed)
        } else {
          // Line complete — move to next line after delay
          isDeletingRef.current = true
          timer = setTimeout(tick, delayBetweenLines)
        }
      } else {
        // Deleting
        if (charIndexRef.current > 0) {
          charIndexRef.current--
          setCurrentText(fullLine.slice(0, charIndexRef.current))
          timer = setTimeout(tick, deleteSpeed)
        } else {
          // Deleted — move to next word
          setDisplayedLines(prev => [...prev, fullLine])
          isDeletingRef.current = false
          indexRef.current++

          if (indexRef.current >= words.length) {
            setIsTyping(false)
            setCurrentText('')
            return
          }

          timer = setTimeout(tick, typeSpeed)
        }
      }
    }

    timer = setTimeout(tick, typeSpeed)

    return () => clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, delayBetweenLines])

  return { displayedLines, currentText, isTyping }
}
