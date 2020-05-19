import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export interface IEmployeeContactsProps {
  description: string;
  siteUrl: string;
}

export interface IEmployeeContactsSTate {
  employeeItems: any;
  officeItems: any;
  departmentItems: any;
  jobTitleItems: any;
}
