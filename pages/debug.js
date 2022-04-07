export default function Debug() {
  return (
    <div>
      <p>Debug page</p>
      <pre>{JSON.stringify({ debug: true }, null, 2)}</pre>
      <p>Testing release type:</p>
      <ul>
        <li>fix</li>
        <li>ci</li>
      </ul>
    </div>
  )
}
