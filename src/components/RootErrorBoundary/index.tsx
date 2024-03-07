import { useRouteError } from 'react-router-dom';

export default function RootErrorBoundary() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Click here to reload the app
      </button>
    </div>
  );
}
