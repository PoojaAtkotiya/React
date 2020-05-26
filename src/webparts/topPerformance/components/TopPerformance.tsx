import * as React from 'react';
//import styles from './TopPerformance.module.scss';
import { ITopPerformanceProps, ITopPerformanceState } from './ITopPerformanceProps';
import Common from '../../common';
import { Image, ImageFit } from 'office-ui-fabric-react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



const commonObj: Common = new Common();
export default class TopPerformance extends React.Component<ITopPerformanceProps, ITopPerformanceState> {

  constructor(props: ITopPerformanceProps) {
    super(props);
    this.state = {
      topPerformanceItems: []
    };
  }

  public componentDidMount() {
    this.GetItemsForTopPerformance();
  }

  private GetItemsForTopPerformance() {

    var listName = "TopPerformancesHonerRoll";// this.props.listName;
    var method = 'get items for top performance';
    var query = '?$select=*,EmployeeName/Title,EmployeeName/EMail,EmployeeName/JobTitle&$expand=EmployeeName'
    commonObj.getDataFromList(this.props.siteUrl, listName, query, method).then(res => {
      if (res.data.value != undefined && res.data.value != null) {
        var dataFiltered = res.data.value;
        console.log(dataFiltered)
        this.setState({ topPerformanceItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }


  public render(): React.ReactElement<ITopPerformanceProps> {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
      <div>
        <h4>Top Performer</h4>

        <div className="owl-carousel performer-slider owl-theme">
          <div className="item" style={{ backgroundImage: 'url(' + this.props.siteUrl + '/SiteAssets/Images/performer-slider-bg.png)' }}>
            <div className="profile-round-image"><img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/t8.jpg" alt="" /></div>
            <h5>Congratulations</h5>
            <h6>Jay Patel <span>Eastern Division Field Sales </span></h6>
            <h3>April 2020 <span>TOP PERFORMER</span></h3>
          </div>
          <div className="item" style={{ backgroundImage: 'url(' + this.props.siteUrl + '/SiteAssets/Images/performer-slider-bg.png)' }}>
            <div className="profile-round-image"><img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/t9.jpg" alt="" /></div>
            <h5>Congratulations</h5>
            <h6>jaya Patel <span>Eastern Division Field Sales </span></h6>
            <h3>April 2020 <span>TOP PERFORMER</span></h3>
          </div>
        </div>
      </div>
    );
  }

  private renderTopPerformanceDetails() {
    let currDate: Date = new Date(new Date().setHours(0, 0, 0, 0));
    let count = 0;
    return this.state.topPerformanceItems.map((topPerformanceItem) => {
      let startDate: Date = topPerformanceItem.FeaturedStartDate ? new Date(topPerformanceItem.FeaturedStartDate) : new Date();
      let endDate: Date = topPerformanceItem.FeaturedEndDate ? new Date(topPerformanceItem.FeaturedEndDate) : new Date();

      if ((currDate >= startDate && currDate <= endDate)) {
        {
          // count++;
          return (

            <div className="performance-block" >
              <div className="profile-round-image">
                <img src="https://esmsyspvt.sharepoint.com/:i:/r/sites/Almatica/SiteAssets/Images/t8.jpg?csf=1&web=1&e=0P97Mg" alt="" />
              </div>
              <h5>Congratulations</h5>
              <h6><b>Jay Patel </b><span>Eastern Division Field Sales </span></h6>
              <h3>April 2020 <span>TOP PERFORMER</span></h3>
            </div >


          );
        }
      }
    });
  }
}

{/* <div className={styles.employee_spotlight}>
  <div className={styles.employee_pic}>
    <Image width="100%" height="100%" className={styles.CoverImage} src={this.props.siteUrl + "/_layouts/15/userphoto.aspx?username=" + topPerformanceItem.EmployeeName.EMail} />
  </div>
  <div className={styles.employee_des}>
    <h2>Top Performer {commonObj.getMonthName(startDate.getMonth()) + '-' + startDate.getFullYear()}</h2>
    <h4>{topPerformanceItem.EmployeeName.Title ? topPerformanceItem.EmployeeName.Title : ''}</h4>
    <h5>{topPerformanceItem.EmployeeName.JobTitle ? topPerformanceItem.EmployeeName.JobTitle : topPerformanceItem.Title}</h5>
    <p>{topPerformanceItem.Content ? commonObj.truncate(topPerformanceItem.Content, 150) : ''}</p>
  </div>
</div> */}