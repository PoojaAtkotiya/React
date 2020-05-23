import * as React from 'react';
import styles from './AnnouncementDetails.module.scss';
import { IAnnouncementDetailsProps, IAnnouncementDetailsState } from './IAnnouncementDetailsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Common from '../../common';

const commonObj: Common = new Common();
const defaultImgUrl = "/SiteAssets/Images/default.jpg";
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('itemId');
export default class AnnouncementDetails extends React.Component<IAnnouncementDetailsProps, IAnnouncementDetailsState> {

  constructor(props: IAnnouncementDetailsProps, state: IAnnouncementDetailsState) {
    super(props);
    this.state = {
      announcementItem: []
    };
  }

  public componentDidMount() {
    this.GetItemsForAnnouncement();
  }

  private GetItemsForAnnouncement() {
    var listName = "Announcements";// this.props.listName;
    var query = "?$select=*&$filter=ID eq " + itemId;
    var method = 'get items for announcements';
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        this.setState({ announcementItem: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<IAnnouncementDetailsProps> {
    return (
      <div>
        {this.renderAnnouncement()}
      </div>
    );

  }

  private renderAnnouncement() {
    return this.state.announcementItem.map(item => {
      return(
      <div className={styles.inner + " " + styles.extra + " " + styles.nobottompadding}>
        <div className={styles.centerheader}>
          {/* <h5>New Arrivals</h5> */}
          <h2>{item.Title ? item.Title : ""}</h2>
        </div>
        <div className={styles.grid + " " + styles.gutter + " " + styles.collapse840}>
          <div className={styles.col + " " + styles.s1of2}>
            <div>
              <p>{item.Description ? item.Description : ""} </p>
            </div>
          </div>
          <div className={styles.col + " " + styles.s1of2}>
            <div>
              <p><img src={item.Picture && item.Picture.Url ? item.Picture.Url : this.props.siteUrl + defaultImgUrl} title="" alt=""
                data-description="" /></p>
            </div>
          </div>
        </div >
      </div>)
    });
  }
}
