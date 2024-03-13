
export default function Validation(inputVal) {
  const errors = {};


  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


  if (inputVal.name == "") {
    errors.name = "name is required!";
  }

  if (inputVal.dob == "") {
    errors.dob = "select date of birth!";
  }

  if (inputVal.address == "") {
    errors.address = "enter your address";
  }

  if (inputVal.phone == "") {
    errors.phone = "enter the 10 digit number";
  }

  if (inputVal.email == "") {
    errors.email = "email is required!";
  } else if (!email_pattern.test(inputVal.email)) {
    errors.email = "enter the correct email id";
  }

  return errors;
}
