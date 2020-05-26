import * as React from 'react';
//import styles from './CorporateLeadership.module.scss';
import { ICorporateLeadershipProps, ICorporateLeadershipState } from './ICorporateLeadershipProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Common from '../../common';

const commonObj = new Common();
const defaultImgUrl = "https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/default.jpg";


export default class CorporateLeadership extends React.Component<ICorporateLeadershipProps, ICorporateLeadershipState> {

  constructor(props: ICorporateLeadershipProps, state: ICorporateLeadershipState) {
    super(props);
    this.state = {
      corporateItems: []
    }
  }

  componentDidMount() {
    this.getCorporateItems();

  }

  private getCorporateItems() {
    let query = "?$select=*,PersonName/Title,PersonName/EMail&$expand=PersonName";
    commonObj.getDataFromList(this.props.siteUrl, "CorporateLeadershipAndHQList", query, "Get data from CorporateLeadershipAndHQList").then(result => {
      if (result.data.value != undefined && result.data.value != null) {
        var dataFiltered = result.data.value;
        console.log(dataFiltered);
        this.setState({ corporateItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<ICorporateLeadershipProps> {
    return (

      <div className="inner extra">
        <div className="centerheader">
          <h2>Corporate Leadership and HQ List</h2>
        </div>
        <div className="box_main">
          {this.renderLeftItem()}
          <div className="right_part">
            {this.renderRightItems()}
          </div>
        </div>
      </div>
    );
  }

  private renderLeftItem() {
    let count = 0;
    return this.state.corporateItems.map((item) => {
      if (count == 0) {
        count++;
        return (
          <div className="left_part">
            <h5 style={{ marginTop: "15px" }}>
              <img src={item.PersonImage && item.PersonImage.Url ? item.PersonImage.Url : defaultImgUrl} alt="" style={{ width: '100%' }} />
              <span className="contact_high"> {item.PersonName && item.PersonName.Title ? item.PersonName.Title : ""}</span>
            </h5>
            <p>{item.Title ? item.Title : ""}
              <br />
              {item.PersonName && item.PersonName.EMail ?
                <a href={'mailto:' + item.PersonName.EMail}>{item.PersonName.EMail}</a>
                : ""}
              <br />
              {item.Cell ?
                <a href={'tel:' + item.Cell}>{item.Cell}</a>
                : ""}
            </p>
          </div>
        );
      }
    });

  }

  private renderRightItems() {
    let count = 0;
    return this.state.corporateItems.map(item => {
      if (count == 0) {
        count++;
        return false;
      }
      if (count > 0 && count < 5) {
        count++;
        return (
          <div className="right_images">
            <div className="right_images">
              <div className="right_banner_sub_images">
                <a>
                  {/* <span style={{ backgroundImage: 'url(' + item.PersonImage && item.PersonImage.Url ? item.PersonImage.Url : defaultImgUrl + ')' }}></span> */}
                  <img src={item.PersonImage && item.PersonImage.Url ? item.PersonImage.Url : defaultImgUrl} alt="" style={{ width: "100%" }} />
                </a>
              </div>
              <div className="right_banner_1_key_point">
                <div className="future_work_1">
                  {item.PersonName && item.PersonName.Title ? item.PersonName.Title : ""}
                </div>
                <div className="future_work">
                  {item.Title ? item.Title : ""}
                  <br />
                  {item.PersonName && item.PersonName.EMail ?
                    <a href={'mailto:' + item.PersonName.EMail}>{item.PersonName.EMail}</a>
                    : ""}
                  <br />
                  {item.Cell ?
                    <a href={'tel:' + item.Cell}>{item.Cell}</a>
                    : ""}

                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}
