import * as React from 'react';
import styles from './Announcements.module.scss';
import { IAnnouncementsProps } from './IAnnouncementsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IAnnouncementsState } from './IAnnouncementsState';
import Common from '../../common';

const commonObj: Common = new Common();

const defaultImgUrl = "https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/default.jpg";
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
      // <div className={styles.announcements}>
      //   <div className={styles.container}>
      <div className={styles.inner + " " + styles.extra}>
        <div className={styles.centerheader}>
          <h2>ANNOUNCEMENTS</h2>
        </div>
        <div className={styles.box_main}>
          {this.renderLeftItem()}
          <div className={styles.right_part}>
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
          <div className={styles.left_part}>
             <a href="announcement.html"><img src={item.Picture && item.Picture.Url ? item.Picture.Url :defaultImgUrl} alt="" style={{ width: '100%' }} /></a>
            <h5 style={{ marginTop: "15px;" }}>{item.Title ? <a href="announcement.html">{item.Title}</a> : ""}</h5>
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
        return (
          <div className={styles.right_images}>
            <div className={styles.right_images}>
                <div className={styles.right_banner}>
                  <a href="announcement.html">
                   <img src={item.Picture && item.Picture.Url ? item.Picture.Url : defaultImgUrl} alt="" style={{ width: "100%" }} />
                  </a>
                </div>
              <div className={styles.right_banner_1}>
                <div className={styles.future_work_1}><a href="announcement.html" style={{ textDecoration: 'none', color: '#000' }}>{item.Title ? item.Title : ""}</a></div>
                <div className={styles.future_work}> {item.Description ? commonObj.truncate(item.Description, 50) : ""}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}

{/* <div className={styles.right_images}>
          <div className={styles.right_banner}>
            <a href="announcement.html">
              <img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/content.jpg" alt="" style={{ width: '100%' }} />
            </a>
          </div>
          <div className={styles.right_banner_1}>
            <div className={styles.future_work_1}>
              <a href="announcement.html" style={{ textDecoration: 'none', color: '#000' }}>The Future of Work</a>
            </div>
            <div className={styles.future_work}>Less Red Tape, More Sales</div>
          </div>
        </div> */}

{/* <div className={styles.right_images}>
          <div className={styles.right_banner_34}>
            <div className={styles.future_work_1}><a href="announcement.html" style={{ textDecoration: 'none', color: '#000' }}>The Future of Work</a></div>
            <div className={styles.future_work}>Less Red Tape, More Sales</div>
          </div>
        </div>
        <div className={styles.right_images}>
          <div className={styles.right_banner_34}>
            <div className={styles.future_work_1}><a href="announcement.html" style={{ textDecoration: 'none', color: '#000' }}>The Future of Work</a></div>
            <div className={styles.future_work}>Less Red Tape, More Sales</div>
          </div>
        </div> */}











{/* <div className={styles.jobitem}>
            {this.state.items.map((item, key) => {
              return (
                <div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md3">
                      <div className={styles.dateitem}>
                        <img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/1.jpg" alt="test" />
                      </div>
                    </div>
                    <div className="ms-Grid-col ms-md9">
                      <p className={styles.subject}>{item.Title}</p>
                      <p className={styles.subject1}>
                        {item.Description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}


      //   </div>
      // </div>