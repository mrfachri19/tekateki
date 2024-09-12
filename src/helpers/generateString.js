export function generateString(length) {
    const result = Math.random().toString(36).substring(2, length + 2)
    return result;
}

export  function getInitialName(name){
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
  }