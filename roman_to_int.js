function  get_int_of_roman_char(roman_char) {
  switch (roman_char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      throw new Error("Invalid Roman character were passed. Terminating.");
  }
}

function  roman_to_int(roman_str) {
  let int_representation = null;
  let to_subtract = 0;
  let curr_char_in_int = null;
  let prev_char_in_int = null;

  for (let i = 0; i < roman_str.length; i++) {
    curr_char_in_int = get_int_of_roman_char(roman_str[i]);
    int_representation += curr_char_in_int;

    if (0 < i && prev_char_in_int < curr_char_in_int) {
      to_subtract += prev_char_in_int * 2;
    }

    prev_char_in_int = curr_char_in_int;
  }

  return to_subtract = 0 ? int_representation : int_representation - to_subtract;
}

export { roman_to_int };
