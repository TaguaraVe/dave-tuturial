'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Go to Home Page
      </button> */}
      <Link href={'/'}>Back to Home page</Link>
    </div>
  );
};

export default Error;
