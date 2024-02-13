const ledToggle = document.getElementById("ledToggle");
const statusText = document.getElementById("status");

ledToggle.addEventListener("change", async () => {
  const response = await fetch("http://localhost:3000/api/led", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `ledStatus=${ledToggle.checked}`,
  });
  if (response.ok) {
    statusText.textContent = `LED is ${ledToggle.checked ? "ON" : "OFF"}`;
    console.log("response ok");
  }
});
