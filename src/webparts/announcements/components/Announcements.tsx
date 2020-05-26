import * as React from 'react';
//import styles from './Announcements.module.scss';
import { IAnnouncementsProps } from './IAnnouncementsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IAnnouncementsState } from './IAnnouncementsState';
import Common from '../../common';
// import { ListNames } from '../../Constants';


const commonObj: Common = new Common();

const defaultImgUrl = "/SiteAssets/Images/default.jpg";
export default class Announcements extends React.Component<IAnnouncementsProps, IAnnouncementsState> {

  constructor(props: IAnnouncementsProps, state: IAnnouncementsState) {
    super(props);
    this.state = {
      items: []
    };
  }

  public componentDidMount() {
    this.GetItemsForAnnouncement();
  }

  private GetItemsForAnnouncement() {

    var listName = "Announcements";// this.props.listName;
    var query = "?$orderby=ID desc";
    var method = 'get items for announcements';
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        // .filter(
        //   data => new Date(data.ExpiryDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
        // );
        this.setState({ items: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<IAnnouncementsProps> {
    return (

      <div className="inner extra">
        <div className="centerheader">
          <h2>ANNOUNCEMENTS</h2>
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
    return this.state.items.map((item) => {
      if (count == 0) {
        count++;
        return (
          <div className="left_part">
            <a href={this.props.siteUrl + "/SitePages/AnnouncementDetail.aspx?itemId=" + item.ID}><img src={item.Picture && item.Picture.Url ? item.Picture.Url : this.props.siteUrl + defaultImgUrl} alt="" style={{ width: '100%' }} /></a>
            <h5 style={{ marginTop: "15px" }}>{item.Title ? <a href={this.props.siteUrl + "/SitePages/AnnouncementDetail.aspx?itemId=" + item.ID}>{item.Title}</a> : ""}</h5>
            <p>{item.Description ? commonObj.truncate(item.Description, 200) : ""}</p>
          </div>
        );
      }
    });

  }

  private renderRightItems() {
    let count = 0;
    return this.state.items.map(item => {
      if (count == 0) {
        count++;
        return false;
      }
      if (count > 0 && count < 5) {
        count++;
        var imgUrl = item.Picture && item.Picture.Url ? item.Picture.Url : this.props.siteUrl + defaultImgUrl;
        return (
          <div className="right_images">
            <div className="right_image">
              <div className="right_banner">
                <a href={this.props.siteUrl + "/SitePages/AnnouncementDetail.aspx?itemId=" + item.ID}>
                  {/* <img src={item.Picture && item.Picture.Url ? item.Picture.Url : this.props.siteUrl + defaultImgUrl} alt="" style={{ width: "100%" }} /> */}
                  <span style={{ backgroundImage: 'url(' + imgUrl + ')' }}></span>
                </a>
              </div>
              <div className="right_banner_1">
                <div className="future_work_1"><a href={this.props.siteUrl + "/SitePages/AnnouncementDetail.aspx?itemId=" + item.ID} style={{ textDecoration: 'none', color: '#000' }}>{item.Title ? item.Title : ""}</a></div>
                <div className="future_work"> {item.Description ? commonObj.truncate(item.Description, 50) : ""}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}