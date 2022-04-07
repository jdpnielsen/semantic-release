export default function Debug() {
  return (
    <div>
      <p>Debug page</p>
      <pre>{JSON.stringify({ debug: true }, null, 2)}</pre>
      <p>Release type:</p>
      <ul>
        <li>fix</li>
      </ul>
    </div>
  )
}
