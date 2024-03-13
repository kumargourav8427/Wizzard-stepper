
export default function Validation2(inputVal) {
    const errors1 = {};
  
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if (inputVal.phone == "") {
      errors1.phone = "enter the 10 digit number";
    }
  
    if (inputVal.email == "") {
      errors1.email = "email is required!";
    } else if (!email_pattern.test(inputVal.email)) {
      errors1.email = "enter the correct email id";
    }
  
    return errors1;
  }
  