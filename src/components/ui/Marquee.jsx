// src/components/ui/Marquee.jsx
// Infinite horizontally-scrolling text ribbon — Carlos portfolio style

export default function Marquee({ items, className = '' }) {
  // Duplicate items so the loop feels seamless
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden border-y border-black-border py-4 ${className}`}>
      <div className="marquee-track">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-6 mx-8 font-accent text-xs uppercase tracking-[0.25em] text-silver whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
