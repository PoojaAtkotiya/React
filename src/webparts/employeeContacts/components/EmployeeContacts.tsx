import * as React from 'react';
import styles from './EmployeeContacts.module.scss';
import { IEmployeeContactsProps, IEmployeeContactsSTate } from './IEmployeeContactsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Image, ImageFit } from 'office-ui-fabric-react';
import { List } from 'office-ui-fabric-react/lib/List';
import Common from '../../common';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
const common = new Common();

// const dropdownStyles: Partial<IDropdownStyles> = {
//   dropdown: { width: 300 },
// };

export default class EmployeeContacts extends React.Component<IEmployeeContactsProps, IEmployeeContactsSTate> {

  constructor(props: IEmployeeContactsProps, state: IEmployeeContactsSTate) {
    super(props);
    this.state = {
      employeeItems: [],
      officeItems: [],
      departmentItems: [],
      jobTitleItems: []
    };
  }

  componentDidMount() {
    this.getEmployeeContacts();
    this.getAllDdlChoices();
  }


  getAllDdlChoices() {

    //Get and set Office Data
    common.getchoices(this.props.siteUrl, "EmployeeContacts", "Office").then(resp => {
      var officeChoices = [];
      resp.forEach(choice => {
        officeChoices.push({ key: choice, text: choice });
      });
      this.setState({
        officeItems: officeChoices
      });
    }).catch(error => {
      console.log("error while fatching choices from Office column");
      console.log(error);
    });

    //Get and set Department Data
    common.getchoices(this.props.siteUrl, "EmployeeContacts", "Department").then(resp => {
      var departmentChoices: IDropdownOption[];
      resp.forEach(choice => {
        departmentChoices.push({ key: choice, text: choice });
      });
      this.setState({
        departmentItems: departmentChoices
      });
    }).catch(error => {
      console.log("error while fatching choices from Department column");
      console.log(error);
    });

    //Get and set JobTitle Data
    // common.getchoices(this.props.siteUrl, "EmployeeContacts", "Title").then(resp => {
    //   var titlChoices = [];
    //   resp.forEach(choice => {
    //     officeChoices.push({ key: choice, text: choice });
    //   });
    //   this.setState({
    //     officeItems: officeChoices
    //   });
    // }).catch(error => {
    //   console.log("error while fatching choices from Title column");
    //   console.log(error);
    // });
  }

  private getEmployeeContacts() {
    let query = "?$select=*,Employee/FirstName,Employee/LastName,Employee/EMail&$expand=Employee";
    common.getDataFromList(this.props.siteUrl, "EmployeeContacts", query, "Get data from EmployeeContacts").then(result => {
      if (result.data.value != undefined && result.data.value != null) {
        var dataFiltered = result.data.value;
        console.log(dataFiltered);
        this.setState({ employeeItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<IEmployeeContactsProps> {
    return (
      <div className="ms-Grid">
        <div className={styles.row}>
          <div className={styles.column3}>
            <div >
              <Dropdown
                placeholder="Select an option"
                label="Office"
                options={this.state.officeItems}
              //styles={{ dropdown: { width: 300 } }}
              />
            </div>
            <div>
              <Dropdown
                placeholder="Select an option"
                label="Department"
                options={this.state.departmentItems}
              //styles={dropdownStyles}
              />
            </div>
            <div>
              <Dropdown
                placeholder="Select an option"
                label="Job Title"
                options={this.state.jobTitleItems}
              //styles={{}}
              />
            </div>
          </div>
          <div className={styles.column9}>
            <div data-is-scrollable={true}>
              <List items={this.state.employeeItems} onRenderCell={this._onRenderCell} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _onRenderCell(item: any, index: number): JSX.Element {
    return (
      <div data-is-focusable={true}>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-xl6">
          <div className={styles.users_info}>
            <div className={styles.user}>
              {item.Employee.EMail ? <Image height='80px' width='80px' src={"/_layouts/15/userphoto.aspx?username=" + item.Employee.EMail} /> : ''}
            </div>
            <div className={styles.user_data}>
              {item.Employee && item.Employee.FirstName && item.Employee.LastName ? <h2>{item.Employee.FirstName + " " + item.Employee.LastName}</h2> : ''}
              {item.Title ? <p className={styles.user_position}>{item.Title}</p> : ''}
              {item.Department ? <p>Department:  {item.Department}</p> : ''}
              {item.Office ? <p>Office:  {item.Office} </p> : ''}
              {item.Room ? <p>Room:  {item.Room}</p> : ''}
              <a href={"mailto:"} className={styles.user_email}>{item.Employee.EMail}</a>
              {item.WorkPhone ? <a href={"tel:"} className={styles.user_tel}>{item.WorkPhone}</a> : ''}
            </div>

          </div>
        </div>
      </div>
    )
  }
}
