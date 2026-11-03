import { company } from "@/data/site";

const fab =
  "fixed bottom-[calc(18px+env(safe-area-inset-bottom,0px))] z-30 flex items-center gap-2 rounded-[40px] px-5 py-[13px] font-body text-[15px] font-bold leading-[normal] text-white no-underline shadow-[0_8px_24px_rgba(0,0,0,.35)] phone:px-4 phone:py-3 phone:text-[14px]";

export default function FloatingButtons() {
  return (
    <>
      <a
        href={company.phoneHref}
        aria-label="Call SuperTech"
        className={`${fab} left-4 bg-linear-to-b from-[#2a6fee] to-[#0a2a5e]`}
      >
        <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden="true">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
        </svg>
        Call
      </a>

      <a
        href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappDefaultText)}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className={`${fab} right-4 bg-[#128c4a]`}
      >
        <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.15-1.35A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.05.8.82-2.97-.2-.31A8.2 8.2 0 1 1 12 20.2zm4.5-6.15c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.28.19-.53.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.65 4.2 3.72 1.56.67 2.17.73 2.95.62.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
        </svg>
        WhatsApp
      </a>
    </>
  );
}
