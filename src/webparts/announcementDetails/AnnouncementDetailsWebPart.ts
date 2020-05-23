import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AnnouncementDetailsWebPartStrings';
import AnnouncementDetails from './components/AnnouncementDetails';
import { IAnnouncementDetailsProps } from './components/IAnnouncementDetailsProps';

export interface IAnnouncementDetailsWebPartProps {
  description: string;
}

export default class AnnouncementDetailsWebPart extends BaseClientSideWebPart <IAnnouncementDetailsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnnouncementDetailsProps> = React.createElement(
      AnnouncementDetails,
      {
        description: this.properties.description,
        siteUrl:this.context.pageContext.web.absoluteUrl
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
