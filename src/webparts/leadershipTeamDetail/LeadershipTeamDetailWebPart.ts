import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'LeadershipTeamDetailWebPartStrings';
import LeadershipTeamDetail from './components/LeadershipTeamDetail';
import { ILeadershipTeamDetailProps } from './components/ILeadershipTeamDetailProps';

export interface ILeadershipTeamDetailWebPartProps {
  description: string;
}

export default class LeadershipTeamDetailWebPart extends BaseClientSideWebPart<ILeadershipTeamDetailWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ILeadershipTeamDetailProps> = React.createElement(
      LeadershipTeamDetail,
      {
        description: this.properties.description,
        siteUrl: this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
