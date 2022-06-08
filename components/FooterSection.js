import { useRouter } from 'next/router';

export default function SatisfactionSection() {
  const router = useRouter();
  return (
    <section id="footer" className="section">
      <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
      <a href="/terms" target="_blank" rel="noreferrer">Term and Conditions</a>
    </section>
  )
}
