interface FooterProps {
  timeout: boolean;
}

export default function Footer({ timeout }: FooterProps) {
  return (
    <footer id="footer" style={timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        &copy; Tobin Postma. Design:{' '}
        <a href="https://html5up.net" target="_blank" rel="noreferrer">
          HTML5 UP
        </a>
        . Built with:{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
      </p>
    </footer>
  );
}
