export function checkEmail(email: string) {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  if (exptext.test(email) == false) {
    alert("이메일형식이 올바르지 않습니다.");
    return false;
  }
  return true;
}
