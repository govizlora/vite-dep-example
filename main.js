// Works with uuid@3
// import uuid from "uuid/v4"

// Works with uuid@8
import { v4 } from "uuid";

document.querySelector("#app").innerHTML = `<p>${v4()}</p>`;
