// Works with uuid@3
import uuid from "uuid"

// Works with uuid@8
// import { v4 } from "uuid";

document.querySelector("#app").innerHTML = `<p>${uuid()}</p>`;
