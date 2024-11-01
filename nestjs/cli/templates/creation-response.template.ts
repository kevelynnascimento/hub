const getCreationResponseTemplate = (pascalCaseName: string): string => {
  return `
export interface ${pascalCaseName}CreationResponse {
  id: string;
}
`;
}

export { getCreationResponseTemplate };