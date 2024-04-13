export const InputValidate = (
  errorMassage: Record<string, string>,
  key: string,
  input: string
) => {
  if (input.length < 5) errorMassage[key] = `${key} 입력하세요. (최소 5자)`;
  else {
    delete errorMassage[key];
  }

  return errorMassage;
};
