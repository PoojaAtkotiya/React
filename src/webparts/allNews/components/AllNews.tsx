import * as React from 'react';
import styles from './AllNews.module.scss';
import { IAllNewsProps, IAllNewsState } from './IAllNewsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Common from '../../common';

const commonObj: Common = new Common();
const defaultImgUrl = "/SiteAssets/Images/default.jpg";
export default class AllNews extends React.Component<IAllNewsProps, IAllNewsState> {

  constructor(props: IAllNewsProps, state: IAllNewsState) {
    super(props);
    this.state = {
      newsItems: []
    };
  }

  public componentDidMount() {
    this.GetItemsForNews();
  }

  private GetItemsForNews() {

    var listName = "News";// this.props.listName;
    var query = "?$orderby=ID desc";
    var method = 'get items for News';
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        this.setState({ newsItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<IAllNewsProps> {
    return (
      <div className={styles.inner + " " + styles.extra}>
        <div className={styles.centerheader}>
          <h2>News</h2>
        </div>
        <div className={styles.box_main}>
          <div className={styles.company_text_main}>
            {this.renderLeftNewsItem()}
          </div>
          <div className={styles.main_people}>
            <div className={styles.row}>
              {this.renderRightNews()}

              {/* <div className={styles.col_lg_12}>
                <div className={styles.news}>
                  <div className={styles.blog_text_title}><a href="#">-CEO BLOG</a></div>
                  <div className={styles.blog_text_title_1}><a href="#">A MESSAGE TO YOU DURING THIS CHALLENGING TIME OF COVID - 19</a></div>
                  <div className={styles.blog_text_title}><a href="#">-COMPANY</a></div>
                  <div className={styles.blog_text_title_1}><a href="#">LOTUS ANNOUNCE NEW GLOBAL PARTNERSHIPS TO DRIVE GROWTH</a></div>
                  <div className={styles.blog_text_title}><a href="#">-COMPANY</a></div>
                  <div className={styles.blog_text_title_1}><a href="#">LOTUS QUALITY SYSTEMS & COMPLIANCE</a></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderLeftNewsItem() {
    let count = 0;
    return this.state.newsItems.map((item) => {
      if (count == 0) {
        count++;
        var imgUrl = item.NewsImage && item.NewsImage.Url ? item.NewsImage.Url : this.props.siteUrl + defaultImgUrl;
        return (
          <div className={styles.company_main} style={{ backgroundImage: 'url(' + imgUrl + ')' }}>
            <div className={styles.company_text}><a href={this.props.siteUrl + "/sitepages/NewsDetail.aspx?itemID=" + item.ID}>{item.NewsCategory ? item.NewsCategory : ""}</a></div>
            <div className={styles.sub_title}><a href={this.props.siteUrl + "/sitepages/NewsDetail.aspx?itemID=" + item.ID}>{item.Title ? item.Title : ""}</a></div>
          </div>
        );
      }
    });
  }
  private renderRightNews() {
    let count = 0;
    return this.state.newsItems.map(item => {
      if (count == 0) {
        count++;
        return false;
      }
      if (count > 0) {
        count++;
        var imgUrl = item.NewsImage && item.NewsImage.Url ? item.NewsImage.Url : this.props.siteUrl + defaultImgUrl;
        return (
          <div className={styles.col_lg_12}>
            <div className={styles.people_main} style={{ backgroundImage: 'url(' + imgUrl + ')' }}>
              <div className={styles.people_text}><a href={this.props.siteUrl + "/sitepages/NewsDetail.aspx?itemID=" + item.ID}>{item.NewsCategory ? item.NewsCategory : ""} </a></div>
              <div className={styles.sub_text}><a href={this.props.siteUrl + "/sitepages/NewsDetail.aspx?itemID=" + item.ID}>{item.Title ? item.Title : ""}</a></div>
            </div>
          </div>
        );
      }
    });
  }
}
