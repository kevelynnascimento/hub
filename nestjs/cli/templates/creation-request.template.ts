const getCreationRequestTemplate = (pascalCaseName: string): string => {
  return `
export interface ${pascalCaseName}CreationRequest {
  name: string;
}
`;
}

export { getCreationRequestTemplate };