

export default function validator(evt, input) {

    const char = evt.key.toUpperCase();

    let field = input.current.value;
    const regex = /^[a-zA-Z]$/;
    const regexNum = /^[\d]$/; 
    const regexAll = /^[a-zA-Z0-9]$/;                
             
    if(field.length === 8) return true;

    if(field.charAt(3) === "-" && field.charAt(4) === "-") {
      field = field.substring(0, 4) + field.substring(5);
    }

    if(!regexAll.test(char)) input.current.value = field.replace(char,"");

    if(field.length < 4 && !regex.test(char)) field = field.replace( /[^a-z]$/i, '' );
    
    else if(field.length === 4) {
      if(regexNum.test(char)) field = field.replace( /(.{3})(.)/,"$1-$2" );
      else field = field.substring(0, field.length - 1);  
    }

    else if(field.length > 4 && !regexNum.test(char)) field = field.substring(0, field.length - 1);        

    input.current.value = field;                        

    return false
}
  