import * as React from 'react';
import styles from './NewsDetail.module.scss';
import { INewsDetailProps, INewsDetailState } from './INewsDetailProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Common from '../../common';

const commonObj: Common = new Common();
const defaultImgUrl = "/SiteAssets/Images/default.jpg";
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('itemId');
export default class NewsDetail extends React.Component<INewsDetailProps, INewsDetailState> {

  constructor(props: INewsDetailProps, state: INewsDetailState) {
    super(props);
    this.state = {
      newsItem: []
    };
  }

  public componentDidMount() {
    this.GetItemsForNews();
  }

  private GetItemsForNews() {

    var listName = "News";// this.props.listName;
    var query = "?$select=*&$filter=ID eq " + itemId;
    var method = 'get items for News';
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        this.setState({ newsItem: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<INewsDetailProps> {


    return (
      <div>
        {this.renderNews()}
      </div>

    );
  }

  private renderNews() {
    return this.state.newsItem.map(item => {
      var imgUrl = item.NewsImage && item.NewsImage.Url ? item.NewsImage.Url : this.props.siteUrl + defaultImgUrl;
      return (
        <div className={styles.inner + " " + styles.extra}>
          <div className={styles.centerheader}>
            <h5>{item.NewsCategory ? item.NewsCategory : ""}</h5>
            <h2>{item.Title ? item.Title : ""}</h2>
          </div>
          <div className={styles.grid + " " + styles.gutter + " " + styles.collapse840}>
            <div className={styles.col + " " + styles.s3of5}>
              <div>
                <p>{item.Description ? item.Description : ""}</p>
                <p></p>
              </div>
            </div>
            <div className={styles.col + " " + styles.s2of5}>
              <div>
                <p><img src={imgUrl} title="" alt="" data-description="" /></p>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }
}
