export default function Debug() {
  return (
    <div>
      <p>Debug page</p>
      <pre>{JSON.stringify({ debug: true }, null, 2)}</pre>
    </div>
  )
}
