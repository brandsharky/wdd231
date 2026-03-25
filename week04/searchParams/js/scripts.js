const myInfo = new URLSearchParams(window.location.search);
document.getElementById("results").innerHTML = `
  <p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
  <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple.</p>
  <p>Your Phone: ${myInfo.get("phone")}</p>
  <p>You email: ${myInfo.get("email")}</p>
`;


