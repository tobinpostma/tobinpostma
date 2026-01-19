import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="body">
      <div id="wrapper">
        <article id="not-found" style={{ display: 'flex' }}>
          <h2 className="major">404 - Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <p>
            <Link href="/">Return to Home</Link>
          </p>
        </article>
      </div>
      <div id="bg"></div>
    </div>
  );
}
