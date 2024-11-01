const getListingResponseTemplate = (pascalCaseName: string): string => {
  return `
export interface ${pascalCaseName}ListingResponse {
  id: string;
  name: string;
  creationDate: Date;
  updateDate: Date;
  deactivationDate: Date;
}
`;
}

export { getListingResponseTemplate };