import * as React from 'react';
import styles from './Headquarters.module.scss';
import { IHeadquartersProps, IHeadquartersState } from './IHeadquartersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { List } from 'office-ui-fabric-react/lib/List';
import Common from '../../common';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';



const common = new Common();

export default class Headquarters extends React.Component<IHeadquartersProps, IHeadquartersState> {

  constructor(props: IHeadquartersProps, state: IHeadquartersState) {
    super(props);
    this.state = {
      headquartersItems: []
    };
  }

  componentDidMount() {
    this.getHeadquarters();

  }

  private getHeadquarters() {
    //let query = "?$select=*,Location/Name,Location/Country,Location/City&$expand=Location";
    common.getDataFromList(this.props.siteUrl, "Headquarters", '', "Get data from Headquarters").then(result => {
      if (result.data.value != undefined && result.data.value != null) {
        var dataFiltered = result.data.value;
        console.log(dataFiltered);
        this.setState({ headquartersItems: dataFiltered });
      }
    }).catch(error => {
      console.log('error while getting data');
      console.log(error);
    });
  }

  public render(): React.ReactElement<IHeadquartersProps> {
    return (
      <div className="ms-Grid">
        <div className={styles.row}>
          {/* <div className={styles.column12}> */}
          <div data-is-scrollable={true}>
            <List items={this.state.headquartersItems} onRenderCell={this._onRenderCell} />
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }

  private _onRenderCell(item: any, index: number): JSX.Element {
    return (
      <div data-is-focusable={true} >
        <div className={styles.column4} style={{ marginBottom: '10px' }}>
          <div className={styles.headquarterItem}>
            {/* <div className={styles.user_data}> */}
            <Card>
              <Card.Item>
                <div className={styles.itemDetails}>
                  {item.Title ? <h3>{item.Title}</h3> : ''}
                  {item.DispName ? <p>{item.DispName}</p> : ''}
                  {item.Street ? <p>{item.Street}</p> : ''}
                  {item.City ? <p> {item.City} </p> : ''}
                  {item.Country ? <p>{item.Country}</p> : ''}
                  {item.PostalCode ? <p> {item.PostalCode}</p> : ''}
                </div>
              </Card.Item>
            </Card>

          </div>

          {/* </div>*/}
        </div>
      </div>
    )
  }
}
