import { roman_to_int } from "./roman_to_int.js";
import { get_roman_list } from "./get_roman_list.js"

function  test_roman_to_int() {
  const romans = get_roman_list();
  let itgr = null;
  let errors = 0;

  for (var i = 1; i < romans.length; i++) {
    itgr = roman_to_int(romans[i]);

    if (itgr === i) {
      console.log("OK");
    } else {
      console.log(`KO. Expected output: ${i}. Your output: ${itgr}`);
      errors++;
    }
  }

  console.log("");
  if (errors === 0) {
    console.log(`ran ${i} tests.\nPASS.`);
  } else {
    console.log(`FAIL. ${errors}/${i} conversion errors.`);
  }
}

test_roman_to_int();
