import * as React from 'react';
import styles from './Announcements.module.scss';
import { IAnnouncementsProps } from './IAnnouncementsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IAnnouncementsState } from './IAnnouncementsState';
import Common from '../../common';

export default class Announcements extends React.Component<IAnnouncementsProps, IAnnouncementsState> {

  constructor(props: IAnnouncementsProps, state: IAnnouncementsState) {
    super(props);
    this.state = {
      items: [
        {
          Title: "A 1",
          Description: "zzz",
          Picture: ""
          //ExpiryDate: new Date()
        }
      ]
    }
  }

  public componentDidMount() {
    this.GetItemsForAnnouncement();
  }

  private GetItemsForAnnouncement() {
    let commonObj: Common = new Common();
    var listName = "Announcements";// this.props.listName;
    // var url = this.props.siteUrl;
    var method = 'get items for announcements';
    commonObj.getDataFromList(this.props.siteUrl, listName, null, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        // .forEach(data => {
        //   data["Picture"] = data.Picture.Url
        // });

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
      <div className={styles.announcements}>
        <div className={styles.container}>
          {/* <div className="ms-Grid" dir="ltr"> */}
          {/* <div className={styles.sectionbody}> */}
          {/* <div className={styles.item}> */}
          {/* <div className={styles.jobsection}> */}
          <div className={styles.jobitem}>
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
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}

        </div>
      </div>
    );
  }
}
{/* <Link
            href={`${this.props.siteurl}/SitePages/Announcement.aspx`}
            target="_blank"
            className={styles.viewAll}>
            <img src={`${arrow}`} className={styles.viewAll} />
          </Link> */}