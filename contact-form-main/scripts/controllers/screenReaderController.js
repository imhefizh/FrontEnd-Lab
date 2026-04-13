export function announceToScreenReader(message) {
  const helper = document.getElementById("accessibility-helper");
  const p = document.createElement("p");
  const IDs = [...helper.children].map((child) => child.id);
  console.log(IDs);
  p.id = IDs.length == 0 ? "1" : String(Number(IDs[IDs.length - 1]) + 1);
  IDs.push(p.id);
  p.textContent = message;
  helper.appendChild(p);
}
