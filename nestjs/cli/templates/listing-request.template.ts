const getListingRequestTemplate = (pascalCaseName: string): string => {
  return `
import { PaginationRequest } from "../../../../infrastructure/helpers/pagination.helper";

export interface ${pascalCaseName}ListingRequest extends PaginationRequest {

}
`;
}

export { getListingRequestTemplate };