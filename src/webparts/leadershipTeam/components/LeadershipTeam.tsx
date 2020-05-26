import * as React from 'react';
import styles from './LeadershipTeam.module.scss';
import { ILeadershipTeamProps, ILeadershipTeamState } from './ILeadershipTeamProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Common from '../../common';
import { List } from 'office-ui-fabric-react/lib/List';
const commonObj: Common = new Common();
const defaultImgUrl = "/SiteAssets/Images/default.jpg";

export default class LeadershipTeam extends React.Component<ILeadershipTeamProps, ILeadershipTeamState> {

  constructor(props: ILeadershipTeamProps, state: ILeadershipTeamState) {
    super(props);
    this.state = {
      leaderItems: []
    };
  }

  public componentDidMount() {
    this.GetAllLeaders();
  }

  private GetAllLeaders() {

    var listName = "LeadersTeam";// this.props.listName;
    var query = "?$select=*,LeaderName/Title,LeaderName/EMail&$expand=LeaderName";
    var method = 'get items for LeadersTeam';
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        dataFiltered.forEach(item => {
          item["siteUrl"] = this.props.siteUrl;
        });

        console.log("after assigning url in items...........");
        console.log(dataFiltered);
        this.setState({ leaderItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<ILeadershipTeamProps> {
    return (
      <div className="inner extra">
        <div className="centerheader">
          <h2>Leadership Team</h2>
        </div>
        <div className="ms-Grid">
          <div className={styles.row} >
            <div data-is-scrollable={true} style={{ width: '100%' }}>
              <List items={this.state.leaderItems} onRenderCell={this.renderColumn} />
            </div>
          </div>
        </div>
      </div >
    );
  }


  private renderColumn(item: any, index: number): JSX.Element {
    // return this.state.leaderItems.map(item => {
    var leaderImg = item.LeaderImage && item.LeaderImage.Url ? item.LeaderImage.Url : item.siteUrl + defaultImgUrl;
    var loginUserEmail = item.LeaderName && item.LeaderName.EMail ? item.LeaderName.EMail : "";
    return (
      <div className={styles.column4 + ' col s1of3'} style={{ marginBottom: '10px' }}>
        {/* <div className={styles.col + ' ' + styles.s1of3}> */}
        <div className="leader-block">
          <div className="leader-img">
            <a href={item.siteUrl + "/SitePages/LeadershipDetail.aspx?itemId=" + item.ID}>
              <div className="bg-cover management-image" style={{ backgroundImage: 'url(' + leaderImg + ')' }}>
                <img src={item.siteUrl + '/SiteAssets/Images/placeholder/10-10.png'} alt="" />
              </div>
            </a>
          </div>
          <div className="caption">
            <h4> {item.LeaderName && item.LeaderName.Title ? item.LeaderName.Title : ""}</h4>
            <p><em>{item.Title ? item.Title : ''}</em>
              {loginUserEmail ? <a href={'mailto:' + loginUserEmail}>E-mail</a> : ""}
              {loginUserEmail ? " | " : ""}
              <a href={item.siteUrl + "/SitePages/LeadershipDetail.aspx?itemId=" + item.ID}>Read More ... </a>
            </p>
          </div>
        </div>
        {/* </div > */}
      </div >
    );

    //});

  }
}
