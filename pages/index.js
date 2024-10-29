export default function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Intify - Solar Investment Platform</h1>
      <p>Interested in solar investment or installing solar panels?</p>
      <form action="mailto:YOUR_EMAIL@gmail.com" method="post" encType="text/plain">
        <input type="email" placeholder="Your email" style={{ padding: "10px", marginRight: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px", background: "#0070f3", color: "white", border: "none" }}>
          Contact Us
        </button>
      </form>
    </div>
  )
}
