const getUpdateRequestTemplate = (pascalCaseName: string): string => {
  return `
export interface ${pascalCaseName}UpdateRequest {
  name: string;
}
`;
}

export { getUpdateRequestTemplate };